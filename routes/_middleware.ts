import { getCookies, setCookie } from "@std/http/cookie";
import type { FreshContext } from "$fresh/server.ts";

import { isAllowedLanguage } from "@/core/i18n/mod.ts";
import type { State } from "@/core/types.ts";

export async function handler(
	req: Request,
	ctx: FreshContext<State>,
): Promise<Response> {
	// Handle static files:
	// - ignore from i18n
	// - add cache header
	const hasFileExt = ctx.url.pathname.includes(".");
	if (hasFileExt) {
		const res = await ctx.next();

		if (res.ok) {
			// Add cache header for 15 days
			res.headers.set("Cache-Control", "public, max-age=1296000, immutable");
		}

		return res;
	}

	// #region i18n
	// Set default language
	ctx.state.language = "en";

	// Get browser lang from URL or headers
	const customLangURL = ctx.url.searchParams.get("lang");
	if (customLangURL !== null && isAllowedLanguage(customLangURL)) {
		ctx.state.language = customLangURL;

		// Save custom language to cookies
		const res = await ctx.next();
		setCookie(res.headers, {
			name: "lang",
			value: customLangURL,
			path: "/",
			secure: false,
			httpOnly: true,
			sameSite: "Strict",
		});
		return res;
	} else {
		const customLangCookie = getCookies(req.headers).lang;
		if (customLangCookie !== undefined && isAllowedLanguage(customLangCookie)) {
			ctx.state.language = customLangCookie;
		} else {
			// Get language from request
			const languages = req.headers.get("accept-language");
			const langMatch = languages?.match(/([a-zA-Z]{2})(?:-[a-zA-Z]{2})?/);
			if (langMatch && isAllowedLanguage(langMatch[1])) {
				ctx.state.language = langMatch[1];
			}
		}
	}
	// #endregion i18n

	return await ctx.next();
}

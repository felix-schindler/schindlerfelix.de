import { FreshContext } from "$fresh/server.ts";
import { getCookies, setCookie } from "@std/http/cookie";

import { isAllowedLanguage } from "@/core/i18n/mod.ts";
import type { AllowedLanguage, State } from "@/core/types.ts";

export async function handler(
	req: Request,
	ctx: FreshContext<State>,
): Promise<Response> {
	// Get current URL and pathname
	const currentUrl = ctx.url;
	const pathname = currentUrl.pathname;

	// Redirect old URLs
	if (pathname.startsWith("/content")) {
		currentUrl.pathname = pathname.replace("/content", "");
		return Response.redirect(currentUrl, 302);
	}

	// Ignore static files
	const hasFileExt = pathname.includes(".");
	if (hasFileExt) {
		return await ctx.next();
	}

	// #region i18n
	// Set default language
	ctx.state.language = "en";

	// Get browser lang from URL or headers
	const customLangURL = currentUrl.searchParams.get("lang");
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
			ctx.state.language = customLangCookie as AllowedLanguage;
		} else {
			// Get language from request
			const languages = req.headers.get("accept-language");
			const langMatch = languages?.match(/([a-zA-Z]{2})(?:-[a-zA-Z]{2})?/);
			if (langMatch && isAllowedLanguage(langMatch[1])) {
				ctx.state.language = langMatch[1] as AllowedLanguage;
			}
		}
	}
	// #endregion i18n

	return await ctx.next();
}

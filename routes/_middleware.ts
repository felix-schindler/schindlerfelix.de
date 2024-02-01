import { FreshContext } from "$fresh/server.ts";
import { State } from "@/core/types.ts";
import type { AllowedLanguage } from "@/core/types.ts";
import { getCookies, setCookie } from "$std/http/cookie.ts";

const ALLOWED_LANGUAGES: Array<AllowedLanguage> = ["en", "de", "zh"];

export async function handler(
	req: Request,
	ctx: FreshContext<State>,
): Promise<Response> {
	const currentUrl = new URL(req.url);
	const { pathname, searchParams } = currentUrl;

	if (pathname.startsWith("/content")) {
		currentUrl.pathname = pathname.replace("/content", "");
		return Response.redirect(currentUrl, 302);
	}

	// Set default language
	ctx.state.language = "en";

	// Get browser lang from URL or headers
	const customLang = searchParams.get("lang") ?? getCookies(req.headers).lang;
	if (
		customLang !== undefined &&
		ALLOWED_LANGUAGES.includes(customLang as AllowedLanguage)
	) {
		// Get language from URL
		ctx.state.language = customLang as AllowedLanguage;

		// Save custom language to cookies
		const res = await ctx.next();
		setCookie(res.headers, { name: "lang", value: customLang, path: "/", secure: false, httpOnly: true, sameSite: "Strict" });
		return res;
	} else {
		// Get language from request
		const languages = req.headers.get("accept-language")?.split(",");
		if (languages !== undefined && languages.length > 0) {
			for (const language of languages) {
				const lang = language.split(";")[0].split("-")[0];
				// @ts-ignore We're looking if this 2-letter language is included
				if (ALLOWED_LANGUAGES.includes(lang)) {
					ctx.state.language = lang as AllowedLanguage;
					break;
				}
			}
		}

		return await ctx.next();
	}
}

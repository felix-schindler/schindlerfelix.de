import { FreshContext } from "$fresh/server.ts";

export async function handler(
	req: Request,
	ctx: FreshContext,
): Promise<Response> {
	const currentUrl = new URL(req.url);
	const { pathname } = currentUrl;

	if (pathname.startsWith("/content")) {
		currentUrl.pathname = pathname.replace("/content", "");
		return Response.redirect(currentUrl, 302);
	}

	return await ctx.next();
}

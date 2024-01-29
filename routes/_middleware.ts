import { FreshContext } from "$fresh/server.ts";

export async function handler(
	req: Request,
	ctx: FreshContext,
): Promise<Response> {
	const { pathname } = new URL(req.url);

	if (pathname.startsWith("/content")) {
		return Response.redirect(pathname.replace("/content", ""), 302);
	}

	return await ctx.next();
}

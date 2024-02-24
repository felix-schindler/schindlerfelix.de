import { Handlers } from "$fresh/server.ts";

const AVATAR_URL = "https://gitlab.com/uploads/-/system/project/avatar/33025310/Tanuki-200kb.png";

export const handler: Handlers = {
	async GET() {
		const res = await fetch(AVATAR_URL);

		if (!res.ok) {
			return new Response(null, { status: 500 });
		}

		// Reply with the image and 7 days cache
		return new Response(res.body, {
			status: 200,
			headers: {
				"Content-Type": "image/png",
				"Cache-Control": "public, max-age=604800, immutable",
			},
		});
	}
}

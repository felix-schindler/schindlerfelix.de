import { isAllowedLanguage } from '$lib/types';
import { readFile } from 'node:fs/promises';
import type { RequestHandler } from './$types';
import { cwd } from 'node:process';
import { join } from 'node:path';

export const GET: RequestHandler = async ({ url }) => {
	const dark = url.searchParams.has('dark');
	let lang = url.searchParams.get('lang');

	if (!isAllowedLanguage(lang)) {
		lang = 'en';
	}

	try {
		return new Response(
			await readFile(
				join(
					cwd(),
					'src',
					'routes',
					'img',
					'app_store.svg',
					`${lang}_${dark ? 'white' : 'black'}.svg`
				)
			),
			{
				headers: {
					'content-type': 'image/svg+xml'
				}
			}
		);
	} catch {
		return Response.error();
	}
};

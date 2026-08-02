import { getTextDirection } from '$lib/paraglide/runtime';
import { paraglideMiddleware } from '$lib/paraglide/server';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = ({ event, resolve }) => {
	if (event.url.pathname === '/projects/tanuki/support') {
		redirect(303, '/projects/tanuki/feedback');
	}

	return paraglideMiddleware(event.request, ({ request, locale }) => {
		event.request = request;
		event.locals.lang = locale;

		return resolve(event, {
			transformPageChunk: ({ html }) =>
				html.replace('%lang%', locale).replace('%dir%', getTextDirection(locale))
		});
	});
};

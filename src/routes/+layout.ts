import { loadTranslations } from '$lib/i18n';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ url, data }) => {
	await loadTranslations(data.lang, url.pathname); // keep this just before the `return`

	// Don't ask me why. After returning the same object on the +layout.server we need to return it here again
	return data;
};

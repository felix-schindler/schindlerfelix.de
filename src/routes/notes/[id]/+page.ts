import { pb } from '$lib';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ data, params }) => {
	const note = pb
		.collection('notes')
		.getFirstListItem(`slug='${params.id}'`, {
			expand: data.lang
		})
		.catch((e) => {
			console.error(e);
			return null;
		});

	return { note };
};

import { pb } from '$lib';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ data, fetch }) => {
	const locs = pb
		.collection('locations')
		.getFullList({ fetch })
		.catch(() => {
			console.warn('Fetch error ignored');
			return [];
		});

	const experiences = pb
		.collection('experience')
		.getFullList({ expand: data.lang, sort: '-type,-from,-until', fetch })
		.catch(() => {
			console.warn('Fetch error ignored');
			return [];
		})
		.then((data) => {
			return {
				work: data.filter((d) => d.type === 'work'),
				edu: data.filter((d) => d.type === 'edu')
			};
		});

	const notes = pb
		.collection('notes')
		.getFullList({ expand: data.lang, fields: 'id,slug,expand', fetch })
		.catch(() => {
			console.warn('Fetch error ignored');
			return [];
		});

	return { locs, experiences, notes };
};

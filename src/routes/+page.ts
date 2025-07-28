import PocketBase from 'pocketbase';
import type { PageLoad } from './$types';
import type { TypedPocketBase } from '$lib/types';

export const load: PageLoad = ({ data, fetch }) => {
	const pb = new PocketBase('https://pb.schindlerfelix.de').autoCancellation(
		false
	) as TypedPocketBase;

	const locs = pb
		.collection('locations')
		.getFullList({ fetch })
		.catch(() => {
			console.warn('Fetch error ignored');
			return Promise.resolve([]);
		});

	const experiences = pb
		.collection('experience')
		.getFullList({ expand: data.lang, sort: '-type,-from,-until', fetch })
		.catch(() => {
			console.warn('Fetch error ignored');
			return Promise.resolve([]);
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
			return Promise.resolve([]);
		});

	return { locs, experiences, notes };
};

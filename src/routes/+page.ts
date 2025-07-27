import PocketBase from 'pocketbase';
import type { PageLoad } from './$types';
import type { TypedPocketBase } from '$lib/types';

export const load: PageLoad = ({ fetch }) => {
	const pb = new PocketBase('https://pb.schindlerfelix.de') as TypedPocketBase;
	const locs = pb
		.collection('locations')
		.getFullList({ fetch })
		.catch((e) => {
			console.error(e);
			return Promise.resolve([]);
		});
	return { locs };
};

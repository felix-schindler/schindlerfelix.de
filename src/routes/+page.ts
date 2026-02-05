import { pb } from '$lib';
import type { Localized, Skill } from '$lib/types';
import type { PageLoad } from './$types';

type ExpandedSkill = Skill & {
	expand: {
		category: Localized;
	};
};

export const load: PageLoad = ({ data, fetch }) => {
	const locs = pb
		.collection('locations')
		.getFullList({ fetch })
		.catch(() => {
			console.warn('Fetch error ignored');
			return [];
		});

	const skills = pb
		.collection('skills')
		.getFullList<ExpandedSkill>({ fetch, sort: 'sort', expand: 'category' })
		.then((items) => {
			const grouped = items.reduce(
				(acc, item) => {
					const key = item.expand.category[`name_${data.lang}`];
					if (!acc[key]) {
						acc[key] = [];
					}
					acc[key].push(item);
					return acc;
				},
				{} as Record<string, Skill[]>
			);

			return Object.entries(grouped);
		})
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

	return { locs, skills, experiences, notes };
};

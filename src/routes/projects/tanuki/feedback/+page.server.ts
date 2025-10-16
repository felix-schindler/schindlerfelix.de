import PocketBase from 'pocketbase';
import type { Actions } from './$types';
import type { TypedPocketBase } from '$lib/types';

export const actions: Actions = {
	default: async ({ request }) => {
		let from = '',
			text = '',
			read_legal = '';

		try {
			const data = await request.formData();
			const f_from = data.get('email');
			const f_text = data.get('text');
			const f_read_legal = data.get('read_legal');

			if (
				typeof f_from !== 'string' ||
				typeof f_text !== 'string' ||
				typeof f_read_legal !== 'string'
			) {
				throw new Error('Invalid submission data');
			} else {
				from = f_from;
				text = f_text;
				read_legal = f_read_legal;
			}
		} catch (e) {
			return {
				message: String(e),
				from,
				text
			};
		}

		try {
			if (read_legal !== 'on') {
				throw new Error('You need to accept');
			}

			const pb = new PocketBase('https://pb.schindlerfelix.de') as TypedPocketBase;
			await pb.collection('tanuki_feedback').create({
				from,
				text
			});
		} catch (e) {
			return {
				message: String(e),
				from,
				text
			};
		}

		return {
			message: 'Feedback sent',
			from: '',
			text: ''
		};
	}
};

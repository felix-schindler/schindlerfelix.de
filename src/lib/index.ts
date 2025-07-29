// place files you want to import through the `$lib` alias in this folder.

import PocketBase from 'pocketbase';
import type { TypedPocketBase } from '$lib/types';

export const pb = new PocketBase('https://pb.schindlerfelix.de').autoCancellation(
	false
) as TypedPocketBase;

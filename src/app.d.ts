// See https://svelte.dev/docs/kit/types#app.d.ts

import type { AllowedLanguage } from '$lib/types';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			lang: AllowedLanguage;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

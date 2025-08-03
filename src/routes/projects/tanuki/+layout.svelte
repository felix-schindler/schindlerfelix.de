<script lang="ts">
	import { t } from '$lib/i18n/index.js';
	import { userPrefersMode } from 'mode-watcher';

	const { data, children } = $props();

	let countryCode = $derived.by(() => {
		switch (data.lang) {
			case 'de':
				return 'de';
			case 'en':
				return 'us';
			case 'zh':
				return 'cn';
		}
	});
</script>

<div class="my-10">
	<div class="text-center">
		<img
			src="/img/tanuki.png"
			alt="Tanuki app icon"
			class="mx-auto h-16 w-16 rounded-sm align-bottom shadow-2xl shadow-foreground"
		/>
		<h1 class="mt-2 font-bold">Tanuki for GitLab</h1>
		<div class="my-8 text-center">
			<p class="text-4xl font-bold sm:text-5xl md:text-7xl">{$t('tanuki.title')}</p>
			<p class="text-muted-foreground">{$t('tanuki.subtitle')}</p>
		</div>
	</div>
	<p class="my-4 flex items-center justify-center gap-2">
		<a
			href={`https://apps.apple.com/${countryCode}/app/tanuki-for-gitlab/id6446419487`}
			class="inline-block transition-transform duration-200 hover:scale-95"
		>
			{#if userPrefersMode.current === 'light'}
				<img
					alt="Download on the App Store"
					class="h-12"
					src={`/img/app_store/${data.lang}_black.svg`}
				/>
			{:else if userPrefersMode.current === 'dark'}
				<img
					alt="Download on the App Store"
					class="h-12"
					src={`/img/app_store/${data.lang}_white.svg`}
				/>
			{:else}
				<picture>
					<source
						srcset={`/img/app_store/${data.lang}_white.svg`}
						media="(prefers-color-scheme: dark)"
					/>
					<img
						alt="Download on the App Store"
						class="h-12"
						src={`/img/app_store/${data.lang}_black.svg`}
					/>
				</picture>
			{/if}
		</a>
	</p>
</div>

<div class="mx-auto w-full md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[60%]">
	{@render children?.()}
</div>

<script lang="ts">
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

<div class="mb-10">
	<h1
		class="flex scroll-m-20 items-center justify-center gap-4 text-4xl font-extrabold tracking-tight lg:text-5xl"
	>
		<img src="/img/tanuki.png" alt="Tanuki app icon" class="h-16 w-16 rounded-sm align-bottom" />
		Tanuki for GitLab
	</h1>
	<p class="my-2.5 flex items-center justify-center gap-2">
		<a
			href={`https://apps.apple.com/${countryCode}/app/tanuki-for-gitlab/id6446419487`}
			class="inline-block transition-transform duration-200 hover:scale-95"
		>
			{#if userPrefersMode.current === 'light'}
				<img
					alt="Download on the App Store"
					class="h-12"
					src={`/img/app_store.svg?lang=${data.lang}`}
				/>
			{:else if userPrefersMode.current === 'dark'}
				<img
					alt="Download on the App Store"
					class="h-12"
					src={`/img/app_store.svg?dark=true&lang=${data.lang}`}
				/>
			{:else}
				<picture>
					<source
						srcset={`/img/app_store.svg?dark=true&lang=${data.lang}`}
						media="(prefers-color-scheme: dark)"
					/>
					<img
						alt="Download on the App Store"
						class="h-12"
						src={`/img/app_store.svg?lang=${data.lang}`}
					/>
				</picture>
			{/if}
		</a>
	</p>
</div>

<div class="mx-auto w-full md:max-w-[90%] lg:max-w-[80%]">
	{@render children?.()}
</div>

<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { t } from '$lib/i18n/index.js';
	import { FileText, Github, House, MessageCircleHeart } from '@lucide/svelte';
	import { userPrefersMode } from 'mode-watcher';

	const { data, children } = $props();
</script>

<div class="my-12 flex flex-col gap-4 sm:gap-8 md:gap-12">
	<div class="flex items-center justify-center gap-4 sm:flex-col sm:gap-2">
		<img
			src="/img/cup/icon.png"
			alt="Cup app icon"
			class="size-12 rounded-sm align-bottom shadow-2xl shadow-neutral-500 sm:size-16 dark:shadow-neutral-400"
		/>
		<p class="text-4xl font-heading font-bold sm:text-5xl md:text-7xl">{$t('cup.title')}</p>
		<p class="text-muted-foreground">{$t('cup.subtitle')}</p>
	</div>
	<p class="flex items-center justify-center gap-2">
		<a
			href="https://apps.apple.com/app/id6768708389"
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
	<div class="flex flex-wrap justify-center gap-2">
		<Button href="/" variant="outline">
			<House />
			{$t('cup.start')}
		</Button>
		<Button href="/projects/cup/feedback" variant="outline">
			<MessageCircleHeart />
			{$t('cup.feedback')}
		</Button>
		<Button href="/projects/cup/privacy" variant="outline">
			<FileText />
			{$t('cup.privacy')}
		</Button>
		<Button
			href="https://github.com/felix-schindler/cup-for-gitea"
			target="_blank"
			variant="outline"
		>
			<Github />
			{$t('cup.repo')} &nearr;
		</Button>
	</div>
</div>

<div class="mx-auto w-full md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[60%]">
	{@render children?.()}
</div>

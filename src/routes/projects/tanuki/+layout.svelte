<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { t } from '$lib/i18n/index.js';
	import { FileText, Gitlab, House, MessageCircleHeart, MoveUpRight } from '@lucide/svelte';
	import { userPrefersMode } from 'mode-watcher';

	const { data, children } = $props();
</script>

<div class="my-12 flex flex-col gap-4 sm:gap-8 md:gap-12">
	<div class="flex flex-col items-center justify-center sm:gap-2">
		<img
			src="/img/tanuki.png"
			alt="Tanuki app icon"
			class="size-12 rounded-sm align-bottom shadow-2xl shadow-neutral-500 sm:size-16 dark:shadow-neutral-400"
		/>
		<h1 class="text-4xl font-bold sm:text-5xl md:text-7xl">{$t('tanuki.title')}</h1>
		<p class="text-muted-foreground">{$t('tanuki.subtitle')}</p>
	</div>
	<p class="flex items-center justify-center gap-2">
		<a
			href="https://apps.apple.com/app/id6446419487"
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
			{$t('tanuki.start')}
		</Button>
		<Button href="/projects/tanuki/feedback" variant="outline">
			<MessageCircleHeart />
			{$t('tanuki.feedback')}
		</Button>
		<Button href="/projects/tanuki/privacy" variant="outline">
			<FileText />
			{$t('tanuki.privacy')}
		</Button>
		<Button href="https://gitlab.com/felix-schindler/gitlab-ios" target="_blank" variant="outline">
			<Gitlab />
			{$t('tanuki.gitlab_repo')}
			<MoveUpRight />
		</Button>
	</div>
</div>

<div class="mx-auto w-full md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[60%]">
	{@render children?.()}
</div>

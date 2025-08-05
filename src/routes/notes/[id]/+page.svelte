<script lang="ts">
	import { t } from '$lib/i18n';
	import 'github-markdown-css/github-markdown.css';

	const { data } = $props();
</script>

<div class="mx-auto max-w-3xl">
	{#await data.note}
		<p>Loading</p>
	{:then note}
		{#if note === null}
			<p>Error</p>
		{:else}
			<p class="mb-10 scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
				{$t('common.notes')}
			</p>
			<article
				data-color-mode="auto"
				data-light-theme="light"
				data-dark-theme="dark"
				class="markdown-body !font-sans"
			>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html note.expand[data.lang]?.content}
			</article>
		{/if}
	{/await}
</div>

<style>
	:global {
		.markdown-body {
			--bgColor-default: transparent !important;
		}

		.markdown-body ul {
			list-style: disc;
		}

		.markdown-body pre {
			white-space: pre-wrap;
			word-wrap: break-word;
		}
	}
</style>

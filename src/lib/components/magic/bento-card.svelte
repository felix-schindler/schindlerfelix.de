<script lang="ts" module>
	export type BentoCardProps = {
		name: string;
		description: string;
		Background?: Component;
		Icon?: typeof LucideIcon;
		class?: string;
	};
</script>

<script lang="ts">
	import { cn } from '$lib/components/utils';
	import { t } from '$lib/i18n';
	import type { Component as LucideIcon } from '@lucide/svelte';
	import type { Component } from 'svelte';

	const { name, Background, Icon, description, class: className }: BentoCardProps = $props();
</script>

<div
	id={name}
	class={cn(
		'relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl',
		'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
		'transform-gpu dark:bg-black dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]',
		className
	)}
>
	{#if Background}
		<div class="my-auto">
			<Background />
		</div>
	{/if}

	<div
		class="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300"
	>
		{#if Icon}
			<Icon
				class="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out"
			/>
		{/if}

		<h3 class="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
			{$t(name)}
		</h3>
		<p class="max-w-lg text-neutral-400">{$t(description)}</p>
	</div>

	<div class="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300"></div>
</div>

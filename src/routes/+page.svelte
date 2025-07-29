<script lang="ts">
	import Languages from '$lib/components/custom/languages.svelte';
	import Technologies from '$lib/components/custom/technologies.svelte';
	import BentoCard, { type BentoCardProps } from '$lib/components/magic/bento-card.svelte';
	import BentoGrid from '$lib/components/magic/bento-grid.svelte';
	import DockIcon from '$lib/components/magic/dock-icon.svelte';
	import Dock from '$lib/components/magic/dock.svelte';
	import Globe from '$lib/components/magic/globe.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { t } from '$lib/i18n';
	import {
		CodeXml,
		Github,
		Gitlab,
		Instagram,
		Linkedin,
		Mail,
		MessageCircle
	} from '@lucide/svelte';

	const { data } = $props();

	let dateFormatter = $derived(
		new Intl.DateTimeFormat(data.lang, {
			month: 'long',
			year: 'numeric'
		})
	);

	const features: BentoCardProps[] = [
		{
			Icon: MessageCircle,
			Background: Languages,
			name: 'home.languages.title',
			description: 'home.languages.description',
			class: 'col-span-3 lg:col-span-1'
		},
		{
			Icon: CodeXml,
			Background: Technologies,
			name: 'home.technologies.title',
			description: 'home.technologies.description',
			class: 'col-span-3 lg:col-span-2'
		}
	] as const;

	const navs = [
		{ label: 'GitHub', icon: Github, href: 'https://github.com/felix-schindler' },
		{ label: 'GitLab', icon: Gitlab, href: 'https://gitlab.com/felix-schindler' },
		{
			label: 'LinkedIn',
			icon: Linkedin,
			href: 'https://www.linkedin.com/in/felix-schindler-vhwjpzf1z0fi73a/'
		},
		{ label: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/vhwjpzf1z0fi73a' },
		{ label: 'Mail', icon: Mail, href: 'mailto:webmaster@schindlerfelix.de' }
	] as const;
</script>

<div class="my-32">
	<div class="flex w-full items-center justify-center">
		<div
			class="relative flex h-fit w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pt-8 pb-40 md:pb-60 md:shadow-xl"
		>
			<span
				class="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre text-transparent select-none dark:from-white dark:to-slate-900/10"
			>
				{$t('common.name')}
			</span>
			<Globe class="top-16" locations={data.locs} />
			<div
				class="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]"
			></div>
		</div>
	</div>

	<Dock class="my-8" let:mouseX let:distance let:magnification>
		{#each navs as item (item.label)}
			<DockIcon {mouseX} {magnification} {distance}>
				<Tooltip.Provider delayDuration={0}>
					<Tooltip.Root>
						<Tooltip.Trigger>
							{#snippet child({ props })}
								<Button {...props} variant="ghost" class="size-11 rounded-full" href={item.href}>
									<item.icon class="size-6 stroke-1" />
								</Button>
							{/snippet}
						</Tooltip.Trigger>
						<Tooltip.Content sideOffset={8}>
							<p>{item.label}</p>
						</Tooltip.Content>
					</Tooltip.Root>
				</Tooltip.Provider>
			</DockIcon>
		{/each}
	</Dock>
</div>

<div class="mx-auto w-full md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[60%]">
	<BentoGrid>
		<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
		{#each features as item (item.name)}
			<BentoCard {...item} />
		{/each}
	</BentoGrid>

	{#await data.experiences}
		<p>Loading</p>
	{:then experiences}
		<h2>{$t('home.experiences')}</h2>
		<div class="grid-cols-default grid gap-4">
			{#each experiences.work as e (e.id)}
				<Card.Root class="w-full">
					<Card.Header>
						<Card.Description>
							{#if e.until}
								<p>{dateFormatter.formatRange(Date.parse(e.from), Date.parse(e.until))}</p>
							{:else}
								<p>{dateFormatter.format(Date.parse(e.from))}</p>
							{/if}
						</Card.Description>
						<Card.Title>{e.expand[data.lang]?.title}</Card.Title>
					</Card.Header>
					<Card.Content>
						<p>{e.expand[data.lang]?.description}</p>
						{#if e.technologies}
							<div class="flex flex-wrap gap-1">
								{#each e.technologies as t (t)}
									<Badge variant="secondary">{t}</Badge>
								{/each}
							</div>
						{/if}
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
		<h2>{$t('home.edu')}</h2>
		<div class="grid-cols-default grid gap-4">
			{#each experiences.edu as e (e.id)}
				<Card.Root class="w-full">
					<Card.Header>
						<Card.Description>
							{#if e.until}
								<p>{dateFormatter.formatRange(Date.parse(e.from), Date.parse(e.until))}</p>
							{:else}
								<p>{dateFormatter.format(Date.parse(e.from))}</p>
							{/if}
						</Card.Description>
						<Card.Title>{e.expand[data.lang]?.title}</Card.Title>
					</Card.Header>
					<Card.Content>
						<p>{e.expand[data.lang]?.description}</p>
						{#if e.technologies}
							<div class="flex flex-wrap gap-1">
								{#each e.technologies as t (t)}
									<Badge variant="secondary">{t}</Badge>
								{/each}
							</div>
						{/if}
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	{:catch e}
		<p>{$t('home.error')} {String(e)}</p>
	{/await}

	{#await data.notes}
		<p>Loading</p>
	{:then notes}
		<h2>{$t('common.notes')}</h2>
		<div class="grid-cols-default grid gap-2">
			{#each notes as n (n.id)}
				<a class="group block" href="/notes/{n.slug}">
					<Card.Root class="h-full transition-all  group-hover:border-foreground">
						<Card.Header>
							<Card.Title>{n.expand[data.lang]?.title}</Card.Title>
						</Card.Header>
						<Card.Content>
							<p>{n.expand[data.lang]?.description}</p>
						</Card.Content>
					</Card.Root>
				</a>
			{/each}
		</div>
	{:catch e}
		<p>{$t('home.error')} {String(e)}</p>
	{/await}
</div>

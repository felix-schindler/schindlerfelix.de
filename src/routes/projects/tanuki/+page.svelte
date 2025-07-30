<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Carousel from '$lib/components/ui/carousel';
	import { t } from '$lib/i18n';
	import { FileText, Gitlab, MessageCircleQuestion } from '@lucide/svelte';

	const imgsv2 = [
		'home.avif',
		'project.avif',
		'issues.avif',
		'mr.avif',
		'group-expanded.avif'
	] as const;

	const imgs = [
		'home.avif',
		'project.avif',
		'issues.avif',
		'branches.avif',
		'group.avif',
		'file.avif'
	] as const;
</script>

<div class="text-center sm:text-left">
	<h2>Links</h2>
	<div class="flex flex-wrap gap-2">
		<Button href="https://gitlab.com/felix-schindler/gitlab-ios" variant="outline">
			<Gitlab />
			{$t('tanuki.gitlab_repo')}
		</Button>
		<Button href="/projects/tanuki/support" variant="outline">
			<MessageCircleQuestion />
			{$t('tanuki.support')}
		</Button>
		<Button href="/projects/tanuki/privacy" variant="outline">
			<FileText />
			{$t('tanuki.privacy')}
		</Button>
	</div>

	<h2>Screenshots of v2 (unreleased)</h2>
	<Carousel.Root>
		<Carousel.Content class="-ml-1">
			{#each imgsv2 as img (img)}
				<Carousel.Item class="pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
					<div class="p-1">
						<Card.Root
							class="aspect-[9/19.5] bg-cover bg-center bg-no-repeat"
							style="background-image: url(/img/tanuki/v2/{img})"
						/>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>

	<h2>Screenshots of v1</h2>
	<Carousel.Root>
		<Carousel.Content class="-ml-1">
			{#each imgs as img (img)}
				<Carousel.Item class="pl-1 sm:basis-1/2 md:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
					<div class="p-1">
						<Card.Root
							class="aspect-[9/19.5] bg-cover bg-center bg-no-repeat"
							style="background-image: url(/img/tanuki/{img})"
						/>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
</div>

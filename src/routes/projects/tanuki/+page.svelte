<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Carousel from '$lib/components/ui/carousel';

	const imgs = [
		'home.png',
		'project.png',
		'issues.png',
		'mr.png',
		'group.png',
		'code.png',
		'diff.png'
	] as const;
</script>

<div class="text-center sm:text-left">
	<h2>Screenshots</h2>
	<div class="px-10">
		<Carousel.Root>
			<Carousel.Content class="-ml-2">
				{#each imgs as img (img)}
					<Carousel.Item class="pl-2 sm:basis-1/2 md:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
						<Card.Root
							class="aspect-[9/19.5] bg-cover bg-center bg-no-repeat"
							style="background-image: url(/img/tanuki/{img})"
						/>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
			<Carousel.Previous />
			<Carousel.Next />
		</Carousel.Root>
	</div>
</div>

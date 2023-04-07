<script lang="ts">
	import Gallery from "$lib/components/Gallery.svelte";

	export let country: {
		name: string;
		mask: string;
		sky: string;
	};

	export let cities: {
		name: string;
		english?: string;
		images: string[];
	}[];

	let parallaxTitle: HTMLDivElement;

	function onScroll() {
		parallaxTitle.style.top = window.scrollY * -0.9 + "px";
	}
</script>

<svelte:window on:scroll={onScroll} />

<div class="hero">
	<div
		class="hero-img hero-img-mask"
		style="background-image: url('{country.mask}')"
	/>
	<div class="parallax-title" bind:this={parallaxTitle}>
		<h1 class="hero-title">{country.name}</h1>
	</div>
	<div class="hero-img" style="background-image: url('{country.sky}');" />
</div>

{#each cities as city}
	<div class="city">
		<h2>{city.name}</h2>
		{#if city.english}
			<p>{city.english}</p>
		{/if}
		<Gallery>
			{#each city.images as src}
				<img {src} alt="" />
			{/each}
		</Gallery>
	</div>
{/each}

<div class="city">
	<slot />
</div>

<style>
	.hero {
		position: relative;
		height: 100vh;
	}

	.hero-img {
		background-repeat: no-repeat;
		background-size: cover;
		position: absolute;
		bottom: 0;
		height: 100%;
		width: 100%;
	}

	.hero-img-mask {
		z-index: 3;
		background-size: 100%;
		background-position: bottom;
	}

	.parallax-title {
		font-family: var(--mono);
		position: absolute;
		height: 100vh;
		width: calc(100% - 5vw);
		padding-left: 5vw;
	}

	.hero-title {
		z-index: 2;
		margin: 0;
		position: absolute;
		color: white;
		text-transform: uppercase;
		font-weight: bold;
		font-size: 20vw;
		bottom: 10%;
	}

	@media screen and (max-width: 768px) {
		.hero-img-mask {
			background-size: 300%;
			background-position: 85% 100%;
		}

		.parallax-title {
			display: grid;
			place-items: center;
			width: 100%;
			padding-left: 0;
		}

		.hero-title {
			bottom: 50%;
			font-size: 20vw;
		}
	}

	div.city {
		margin-top: 100px;
		max-width: 980px;
		margin: 0 auto;
	}

	@media (max-width: 768px) {
		div.city {
			padding: 0 1em;
		}
	}
</style>

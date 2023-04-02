<script lang="ts">
	import { onMount } from "svelte";

	/** Whether is viewed on a small screen */
	let isPrettyAverage: boolean;
	let parallaxTitle: HTMLElement;

	function onScroll() {
		const scrollTop = window.scrollY;

		if (isPrettyAverage) {
			parallaxTitle.style.top = scrollTop * -0.5 + "px";
		} else {
			parallaxTitle.style.top = scrollTop * -0.3 + "px";
		}
	}

	onMount(() => {
		isPrettyAverage = window.innerWidth < 768;
	});
</script>

<svelte:window on:scroll={onScroll} />

<div class="hero">
	<div class="hero-img hero-img-mask" />
	<div class="parallax-title" bind:this={parallaxTitle}>
		<h1 class="hero-title">China</h1>
	</div>
	<div class="hero-img hero-img-bg" />
</div>
<div style="height: 100vh;">
	<h2>Sources</h2>
	<a href="https://eliasruiz.com/china">Elias Ruiz</a>
</div>

<style>
	/* Overwrite */
	.hero-img-mask {
		background-image: url("/img/china/mask.png");
	}

	.hero-img-bg {
		background-image: url("/img/china/china.jpg");
	}

	.hero-title {
		font-size: 20vw;
		bottom: 10%;
	}

	@media screen and (max-width: 768px) {
		.hero-title {
			bottom: 63%;
			font-size: 30vw;
		}
	}
</style>

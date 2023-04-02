<script lang="ts">
	import { onMount } from "svelte";

	/** Whether is viewed on a small screen */
	let isPrettyAverage: boolean;
	let parallaxTitle: HTMLDivElement;

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
		<h1 class="hero-title">Stuttgart</h1>
	</div>
	<div class="hero-img hero-img-bg" />
</div>
<div style="height: 100vh;">
	<h2>Sources</h2>
	<p>
		Photo by <a
			href="https://unsplash.com/@prerna_bhardwaj?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
			>Prerna Bhardwaj</a
		>
		on
		<a
			href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
			>Unsplash</a
		>
	</p>
	<p>
		Photo by <a
			href="https://unsplash.com/@oleg_mit?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
			>Oleg Mitiukhin</a
		>
		on
		<a
			href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
			>Unsplash</a
		>
	</p>
</div>

<style>
	/* Overwrite */
	.hero-img-mask {
		background-image: url("/img/china/mask-stgt.png");
	}

	.hero-img-bg {
		background-image: url("/img/china/sky.jpg");
	}

	.hero-title {
		font-size: 12vw;
		bottom: 35vh;
	}

	@media screen and (max-width: 768px) {
		.hero-title {
			bottom: 80vh;
			font-size: 15vw;
		}
	}
</style>

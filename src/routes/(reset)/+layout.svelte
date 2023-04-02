<slot />

<style>
	:global(.hero) {
		position: relative;
		height: 100vh;
	}

	:global(.hero-img) {
		background-repeat: no-repeat;
		background-size: cover;
		position: absolute;
		bottom: 0;
		height: 100%;
		width: 100%;
	}

	:global(.hero-img-bg) {
		/* TODO overwrite */
		background-image: url("/img/china/sky.jpg");
	}

	:global(.hero-img-mask) {
		z-index: 3;
		/* TODO overwrite */
		background-image: url("/img/china/mask.png");
		background-size: 100%;
		background-position: bottom;
	}

	:global(.parallax-title) {
		font-family: "IBM Plex Mono", monospace;
		position: absolute;
		height: 100vh;
		width: calc(100% - 5vw);
		padding-left: 5vw;
	}

	:global(.hero-title) {
		z-index: 2;
		margin: 0;
		position: absolute;
		color: white;
		text-transform: uppercase;
		font-weight: bold;
		/* TODO Overwrite */
		font-size: 20vw;
		/* TODO Overwrite */
		bottom: 20vh;
	}

	@media screen and (max-width: 768px) {
		:global(.hero-img-mask) {
			background-size: 300%;
			background-position: 85% 100%;
		}

		:global(.parallax-title) {
			display: grid;
			place-items: center;
			width: 100%;
			padding-left: 0;
		}

		/* TODO Overwrite */
		:global(.hero-title) {
			bottom: 50vh;
			font-size: 25vw;
		}
	}
</style>

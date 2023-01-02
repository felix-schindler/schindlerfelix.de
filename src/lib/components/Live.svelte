<span class="live" />

<style>
	span.live {
		display: inline-block;
		height: 0.75rem;
		width: 0.75rem;
		background-color: var(--accent);
		border-radius: 50%;
		-webkit-animation: blink 2s infinite;
		animation: blink 2s infinite;
	}

	@keyframes blink {
		0% {
			opacity: 0;
		}

		50% {
			opacity: 1;
		}

		to {
			opacity: 0;
		}
	}
</style>

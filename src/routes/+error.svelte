<script>
	import { page } from "$app/stores";
</script>

<div class="ac">
	<h1>{$page.status} <small>- {$page.error?.message}</small></h1>
	<div class="row">
		<a href="/" role="button">Home</a>
		<span>|</span>
		<button class="inverse" on:click={() => history.back()}>Back</button>
	</div>
</div>

<style>
	.row {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 1em;
	}
</style>

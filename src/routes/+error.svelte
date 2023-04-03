<script>
	import { page } from "$app/stores";
</script>

<div>
	<h1>{$page.status} <small>- {$page.error?.message}</small></h1>
	<div class="row">
		<button class="inverse" on:click={() => history.back()}>Back</button>
		<span>&nbsp;|&nbsp;</span>
		<a href="/" role="button">Home</a>
	</div>
</div>

<style>
	div {
		text-align: center;
	}
</style>

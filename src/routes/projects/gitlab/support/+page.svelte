<script lang="ts">
	let title: string, msg: string;

	async function sendSupport() {
		open(
			"mailto:contact-project+felix-schindler-gitlab-ios-33025310-issue-@incoming.gitlab.com" +
				"?subject=" +
				encodeURIComponent(title) +
				"&body=" +
				encodeURIComponent(msg)
		);
	}
</script>

<div class="ac">
	<form class="card" on:submit|preventDefault={sendSupport}>
		<h2>Tanuki Support</h2>
		<input placeholder="Title" type="text" bind:value={title} />
		<textarea placeholder="Message" cols="30" rows="10" bind:value={msg} />
		<input type="submit" disabled={!title || !msg} />
	</form>
</div>

<style>
	input[type="submit"]:not(:disabled) {
		cursor: pointer;
	}
</style>

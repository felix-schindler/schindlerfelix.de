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

<h2>Support</h2>

<form class="card" on:submit|preventDefault={sendSupport}>
	<h3>Support request</h3>
	<input placeholder="Title" type="text" bind:value={title} />
	<textarea placeholder="Message" cols="30" rows="10" bind:value={msg} />
	<button type="submit" disabled={!title || !msg}>Send</button>
</form>

<h3 id="faq">FAQ</h3>
<div class="grid">
	<div class="card">
		<h3>Why does the app cost anything?</h3>
		<p>
			Apple charges money for developer accounts, which you need to be able to
			deploy apps to the App Store. <small
				>Also, I shouldn't work for free forever.</small
			>
		</p>
		<p>
			I'm not a fan of monthly subscriptions, so that's why there's just the
			one-time-cost.
		</p>
	</div>
	<div class="card">
		<h3>How to submit a feature request?</h3>
		<p>
			Just fill in the form above and send the email, or head over to <a
				href="https://gitlab.com/felix-schindler/gitlab-ios">the repo</a
			>
			and open an issue yourself.
		</p>
		<p>You can also just open a merge request if you'd like!</p>
	</div>
	<div class="card">
		<h3>When will the app be feature complete?</h3>
		<p>
			Feature completeness is a hard thing to achive as GitLab is a pretty big
			software.
		</p>
		<p>
			The goal for the beginning is to support the most used features by most
			users. After that, the focus is on whatever the users suggest. When there
			are no suggestions the app will receivice incremental updates with no
			specific focus.
		</p>
	</div>
</div>

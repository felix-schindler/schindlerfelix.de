<script lang="ts">
	import { m } from '$lib/paraglide/messages';
</script>

<svelte:head>
	<title>{m.privacy_page_title()} &middot; Felix Schindler</title>
</svelte:head>

<div class="wrap-break-words mx-auto max-w-3xl space-y-8 px-2 hyphens-auto sm:mt-16">
	<h1 class="mb-6 text-center font-heading text-4xl font-semibold tracking-tight">
		{m.privacy_page_title()}
	</h1>

	<div class="space-y-4">
		<h2>{m.privacy_general()}</h2>
		<p><em class="block">{m.privacy_last_updated()}</em></p>
		<p>{m.privacy_general_p1()}</p>
		<p>
			{m.privacy_general_p2()}
			<a href="https://www.cloudflare.com/privacypolicy/" class="underline hover:no-underline">
				{m.privacy_cloudflare_link()}
			</a>.
		</p>
	</div>

	<div class="space-y-4">
		<h2>{m.privacy_contact()}</h2>
		<p>{m.privacy_contact_p1()}</p>
	</div>

	<div class="space-y-4">
		<h2>{m.privacy_rights()}</h2>
		<p>
			{m.privacy_rights_p1()}
			<a href="mailto:webmaster@schindlerfelix.de" class="underline select-none hover:no-underline">
				webmaster[at]schindlerfelix.de
			</a>.
		</p>
	</div>
</div>

<script lang="ts">
	import * as Card from '../ui/card';
	import Marquee from '../magic/marquee.svelte';
	import { ALLOWED_LANGUAGES } from '$lib/types';
	import { t } from '$lib/i18n';
</script>

<Marquee pauseOnHover>
	{#each ALLOWED_LANGUAGES as l, index (index)}
		<Card.Root>
			<Card.Content>
				<Card.Title>{$t(`common.${l}`)}</Card.Title>
			</Card.Content>
		</Card.Root>
	{/each}
</Marquee>

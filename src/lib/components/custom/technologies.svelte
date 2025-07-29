<script lang="ts">
	import * as Card from '../ui/card';
	import Marquee from '../magic/marquee.svelte';

	const technologies = [
		{
			name: 'TypeScript'
		},
		{
			name: 'Swift'
		},
		{
			name: 'Java'
		},
		{
			name: 'PHP'
		},
		{
			name: 'Go'
		},
		{
			name: 'Docker'
		},
		{
			name: 'SQL'
		},
		{
			name: 'Tailwind'
		},
		{
			name: 'SvelteKit'
		}
	] as const;

	const more = [
		{
			name: 'C#'
		},
		{
			name: 'MySQL'
		},
		{
			name: 'SQLite'
		},
		{
			name: 'PostgreSQL'
		},
		{
			name: 'SQLite'
		},
		{
			name: 'Firebase'
		},
		{
			name: 'Supabase'
		},
		{
			name: 'PocketBase'
		},
		{
			name: 'MongoDB'
		},
		{
			name: 'Linux'
		},
		{
			name: 'Web Servers'
		},
		{
			name: 'Web Sockets'
		},
		{
			name: 'NodeJS'
		},
		{
			name: 'Deno'
		},
		{
			name: '.NET'
		},
		{
			name: 'React'
		},
		{
			name: 'Fresh (Preact)'
		},
		{
			name: 'Bootstrap'
		}
	] as const;
</script>

<Marquee pauseOnHover>
	{#each technologies as t, index (index)}
		<Card.Root>
			<Card.Content>
				<Card.Title>{t.name}</Card.Title>
			</Card.Content>
		</Card.Root>
	{/each}
</Marquee>
<Marquee pauseOnHover reverse>
	{#each more as t, index (index)}
		<Card.Root>
			<Card.Content>
				<Card.Title>{t.name}</Card.Title>
			</Card.Content>
		</Card.Root>
	{/each}
</Marquee>

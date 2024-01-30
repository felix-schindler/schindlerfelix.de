import { Tech } from "@/components/utils.tsx";

export default function Languages() {
	return (
		<>
			<div>
				<h2 class="text-3xl mb-2 font-bold tracking-tight">Languages</h2>
				<p>
					<Tech name="TypeScript" />
					<Tech name="Swift" />
					<Tech name="Java" />
					<Tech name="PHP" />
					<Tech name="Go" />
				</p>
				<p>
					<Tech name="MySQL" />
					<Tech name="SQLite" />
					<Tech name="Firebase" />
					<Tech name="PostgreSQL" />
					<Tech name="MongoDB" />
					<Tech name="Oracle" />
				</p>
				<details>
					<summary class="cursor-pointer">More technologies I've used</summary>
					<p class="flex flex-wrap items-center">
						<Tech name="C#" />
						<Tech name="C++" />
						<Tech name="Python" />
						<Tech name="Assembly" />
					</p>
					<p class="flex flex-wrap items-center">
						<Tech name="NodeJS" />
						<Tech name="Deno" />
						<Tech name="Bun" />
						<Tech name=".NET" icon={false} />
						<Tech name="Mono" icon={false} />
					</p>
					<p class="flex flex-wrap items-center">
						<Tech name="SvelteKit" />
						<Tech name="Fresh" />
						<Tech name="React" />
						<Tech name="Hono" icon={false} />
						<Tech name="Express" icon={false} />
						<Tech name="EJS" icon={false} />
						<Tech name="Mongoose" icon={false} />
						<Tech name="SocketIO" icon={false} />
						<Tech name="Bootstrap" />
					</p>
				</details>
			</div>
			<div>
				<h2 class="text-3xl mb-2 font-bold tracking-tight">Human Languages</h2>
				<p>
					<Tech name="German (native)" icon="🇩🇪" />
					<Tech name="English (B2)" icon="🇬🇧" />
					<Tech name="Chinese (B1)" icon="🇨🇳" />
					<Tech name="French (B1)" icon="🇫🇷" />
				</p>
			</div>
		</>
	);
}

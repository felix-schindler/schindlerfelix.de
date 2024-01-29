import { Head } from "$fresh/runtime.ts";
import { ButtonLink } from "@/components/utils.tsx";

export default function Error404() {
	return (
		<>
			<Head>
				<title>404 - Page not found</title>
			</Head>
			<div class="h-full grid place-items-center">
				<div class="text-center">
					<h1 class="mt-5 text-6xl font-mono font-bold tracking-tighter">
						404 - Page not found
					</h1>
					<p class="mt-5">The page you were looking for doesn't exist.</p>
					<p class="mt-5">
						<ButtonLink name="&larr; Back to home page" href="/" />
					</p>
				</div>
			</div>
		</>
	);
}

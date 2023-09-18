<script>
	import { t } from "$lib/translations";
</script>

<h1>{$t("content.heading")}</h1>
<h2 id="projects">{$t("content.projects.heading")}</h2>
<p>{$t("content.projects.subheading")}</p>
<div class="grid">
	<div class="card">
		<h3>{$t("content.projects.portfolio.heading")}</h3>
		<p class="tech">
			<span>
				<img src="/img/tech/svelte.svg" alt="" loading="lazy" /> SvelteKit
			</span>
		</p>
		<p>{$t("content.projects.portfolio.desc")}</p>
	</div>
	<a href="/content/projects/tanuki" class="card clickable">
		<h3>{$t("content.projects.tanuki.heading")}</h3>
		<p class="tech">
			<span>
				<img src="/img/tech/swift.svg" loading="lazy" alt="" /> Swift
			</span>
			<span>SwiftUI</span>
			<span>
				<img src="/img/tech/gitlab.svg" alt="" />
				GitLab API
			</span>
		</p>
		<p>{$t("content.projects.tanuki.desc")}</p>
	</a>
	<a href="https://clicker.deno.dev" class="card clickable">
		<h3>Clicker</h3>
		<p class="tech">
			<span>
				<img src="/img/tech/deno.svg" loading="lazy" alt="" /> Deno
			</span>
			<span>
				<img src="/img/tech/fresh.svg" loading="lazy" alt="" /> Fresh
			</span>
		</p>
		<p>
			Realtime counter and message board. <a
				href="https://deno.com/deploy/docs/regions">Worldwide</a
			>. All clients and servers are in sync
		</p>
	</a>
	<a href="https://github.com/felix-schindler" class="card clickable">
		<h3>Deno Libraries</h3>
		<p class="tech">
			<span>
				<img src="/img/tech/deno.svg" alt="" /> Deno
			</span>
			<span>Rust</span>
		</p>
		<p>
			Using Deno FFI and Rust to supply password hashing functions (bcrypt and
			argon2)
		</p>
	</a>
	<a href="https://github.com/felix-schindler/Router" class="card clickable">
		<h3>Router</h3>
		<p class="tech">
			<span>
				<img src="/img/tech/php.svg" alt="" /> PHP
			</span>
		</p>
		<p>My own MVC framework for PHP</p>
	</a>
	<a href="https://cn.schindlerfelix.de" class="card clickable">
		<h3>China Exchange</h3>
		<p class="tech">
			<span>
				<img src="/img/tech/deno.svg" loading="lazy" alt="" /> Deno
			</span>
			<span>
				<img src="/img/tech/fresh.svg" loading="lazy" alt="" /> Fresh
			</span>
		</p>
		<p>Collected information and vocabulary of my china exchange program.</p>
	</a>
	<a
		href="https://gitlab.com/felix-schindler/advanced-style"
		class="card clickable"
	>
		<h3>Nimiq Style Fork</h3>
		<p class="tech">
			<span>
				<img src="/img/tech/css.svg" alt="" /> CSS
			</span>
		</p>
		<p>
			Fork of the Nimiq Styles; I added auto dark mode and removed the need of
			classes
		</p>
	</a>
	<div class="card">
		<p>Many more unfinished projects...</p>
		<small
			>Too many to list them here. There are a few public ones on Git though</small
		>
	</div>
</div>
<h3>Work</h3>
<div class="grid">
	<a href="https://mademyday.com" class="card clickable">
		<h3>MadeMyDay</h3>
		<p class="tech">
			<span>
				<img src="/img/tech/php.svg" loading="lazy" alt="" /> PHP
			</span>
			<span>
				<img src="/img/tech/react.svg" loading="lazy" alt="" /> React
			</span>
			<span>SCSS</span>
			<span>SQL</span>
		</p>
		<p>
			Website of a German social media presence. Just click here to look at it.
			With auth, ads, posts, comments, etc.
		</p>
	</a>
	<div class="card">
		<h3>Internal company websites</h3>
		<p class="tech">
			<span>
				<img src="/img/tech/svelte.svg" loading="lazy" alt="" /> SvelteKit
			</span>
			<span>
				<img src="/img/tech/go.svg" loading="lazy" alt="" /> Go
			</span>
			<span>
				<img src="/img/tech/firebase.svg" loading="lazy" alt="" /> Firebase
			</span>
			<span>
				<img src="/img/tech/pocketbase.svg" loading="lazy" alt="" /> PocketBase
			</span>
		</p>
		<ul>
			<li>Ticket-, Time-Tracking and Customer Information System</li>
			<li>System for the management and evaluation of insurance contracts</li>
		</ul>
	</div>
</div>
<h3>University</h3>
<div class="grid">
	<div class="card">
		<h3>ChadGPT</h3>
		<p class="tech">
			<span>
				<img src="/img/tech/swift.svg" alt="" /> Swift
			</span>
			<span>SwiftUI</span>
		</p>
		<p>
			iOS app to chat with your (AI) celebrity crush and generate pick-up lines
		</p>
	</div>
	<div class="card">
		<h3>Find Your Enemy</h3>
		<p class="tech">
			<span>
				<img src="/img/tech/typescript.svg" alt="" /> TypeScript
			</span>
			<span>
				<img src="/img/tech/svelte.svg" alt="" /> SvelteKit
			</span>
			<span>
				<img src="/img/tech/deno.svg" alt="" /> Deno
			</span>
			<span>
				<img src="/img/tech/postgres.svg" alt="" /> ProgreSQL
			</span>
		</p>
		<p>
			(Primarily Mobile) Web Application to find your enemies (based on the 16
			personalities test) and battle them via a clicker game.
		</p>
	</div>
	<div class="card">
		<h3>2D Game</h3>
		<p class="tech">
			<span>
				<img src="/img/tech/c%23.svg" loading="lazy" alt="" /> C#
			</span>
			<span>
				<img src="/img/tech/unity.svg" loading="lazy" alt="" /> Unity 3D
			</span>
			<span>
				<img src="/img/tech/php.svg" loading="lazy" alt="" /> PHP
			</span>
			<span>
				<img src="/img/tech/mysql.svg" loading="lazy" alt="" /> MySQL
			</span>
		</p>
		<p>
			A 2D game where you can explore the world, fight enemies and collect
			items.
		</p>
	</div>
	<div class="card">
		<h3>Budget tracker</h3>
		<p class="tech">
			<span>
				<img src="/img/tech/java.svg" alt="" /> Java
			</span>
			<span>JavaFX</span>
			<span>
				<img src="/img/tech/sqlite.svg" alt="" />
				SQLite
			</span>
		</p>
		<p>Desktop App for tracking your budget (locally, offline)</p>
	</div>
	<div class="card">
		<h3>Weather App</h3>
		<p class="tech">
			<span>
				<img src="/img/tech/java.svg" alt="" /> Java
			</span>
		</p>
		<p>
			CLI application to learn the basics of Java and classes; Fetches an API
			and prints the answer in a readable format.
		</p>
	</div>
	<a href="https://fs146.home.hdm-stuttgart.de/webdev/" class="card clickable">
		<h3>Really simple website</h3>
		<p class="tech">
			<span>HTML</span>
			<span>
				<img src="/img/tech/css.svg" alt="" /> CSS
			</span>
		</p>
		<p>To learn the basics of HTML and CSS</p>
	</a>
</div>
<h3>School</h3>
<div class="grid">
	<div class="card">
		<h3>AFC-Mirror</h3>
		<p class="tech">
			<span>
				<img src="/img/tech/php.svg" alt="" /> PHP
			</span>
			<span>
				<img src="/img/tech/mysql.svg" alt="" /> MySQL
			</span>
		</p>
		<p>To learn the basics of PHP; Online shop for smart mirrors</p>
	</div>
	<div class="card">
		<h3>Tiny projects</h3>
		<p class="tech">
			<span>
				<img src="/img/tech/c++.svg" alt="" /> C, C++
			</span>
		</p>
		<p>Many smaller programs to learn the basics of C and C++</p>
	</div>
</div>

<!-- <h2 id="photos">Photos</h2>
<p>I like taking photos, however, I stopped carrying around a big camera.</p>
<div class="grid">
	<a href="/content/photos/germany" class="card clickable">
		<h3>Germany</h3>
	</a>
	<a href="/content/photos/china" class="card clickable">
		<h3>China</h3>
	</a>
</div> -->

<h2 id="blog">Blog</h2>
<p>thoughts and prayers</p>
<div class="grid">
	<a href="/content/blog/pgp" class="card clickable">
		<h3>GPG and Git</h3>
		<p>How to setup and use (on Mac)</p>
	</a>
	<a href="/content/blog/mc-perf" class="card clickable">
		<h3>Minecraft Perf Mods</h3>
		<p>Collection of some Minecraft Fabric performance mods</p>
	</a>
	<a href="/content/blog/reset" class="card clickable">
		<h3>reset</h3>
		<p>Hi, hello and welcome!</p>
	</a>
</div>

<style lang="scss">
	// Overwrite markdown style
	a {
		color: inherit !important;
	}

	a.clickable:hover {
		text-decoration: none !important;
	}

	.card {
		padding: 1em !important;
		background-color: rgba(var(--gray-rgb), 0.2);
	}

	h3 {
		margin-block-end: 0;
	}

	p {
		margin-block: 0.5em;

		&.tech {
			margin-block-start: 0.25em;
		}
	}

	.tech {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.25em;

		&:first-child {
			margin-bottom: 0.75em;
		}

		&:last-child {
			margin-bottom: 0.5em;
		}

		span {
			// FIXME: Why does this need to be smaller than on /about ??
			font-size: 0.9em;
			padding: 0.1em 0.4em;
			// padding: 0.2em 0.4em;
			// border: 1px solid rgba(var(--gray-rgb), 0.8);
			border: 1px solid;
			border-radius: var(--radius);

			img {
				height: 18px;
				width: 18px;
				margin-right: 0.125em;
				vertical-align: text-bottom;
				background-color: transparent !important; // Overwrite markdown style
			}
		}
	}
</style>

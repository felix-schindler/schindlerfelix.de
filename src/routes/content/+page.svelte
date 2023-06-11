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
		<h3>PGP / GPG and Git</h3>
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
			border: 1px solid rgba(var(--gray-rgb), 0.8);
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

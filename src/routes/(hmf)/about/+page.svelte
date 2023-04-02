<script>
	import Live from "$lib/components/Live.svelte";

	const g2 = "2Gs";
	const og = "guinea pig and girlfriend";
	let g = g2;
</script>

<div class="intro">
	<h1>Felix Schindler</h1>
	<p>Hey, I am a 20-year-old German <mark>student</mark> who loves to code.</p>
	<p>
		Based in Stuttgart; living with my
		{#key g}
			<abbr on:mouseenter={() => (g = og)} on:mouseleave={() => (g = g2)}
				>{g}</abbr
			>.
		{/key}
	</p>
	<p>
		I am currently studying <mark>computer science</mark> as a
		<mark>German-Chinese double degree</mark> at Stuttgart Media University.
	</p>
	<p>
		I'm coding every day, however most of my projects aren't available to the
		public as I keep deleting them / not wanting to host them anymore.
	</p>
	<p>
		You can find some of my projects on my <a href="/projects">projects page</a
		>,
		<a href="https://github.com/felix-schindler" rel="noopener noreferrer"
			>GitHub</a
		>
		or
		<a href="https://gitlab.com/felix-schindler" rel="noopener noreferrer"
			>GitLab</a
		>. Some experiments might also be documented on my <a href="/blog">blog</a>.
		Also, pay a visit to my <a href="https://schindlerflorian.de">brother</a>!
	</p>
</div>
<div class="skills">
	<div class="cv">
		<h2>🧑🏻‍💻 Coding</h2>
		<div class="grid">
			<div class="card">
				<details>
					<summary class="tech">
						<span>
							<img src="/img/tech/php.svg" loading="lazy" alt="" /> PHP
						</span>
						<span>
							<img src="/img/tech/typescript.svg" loading="lazy" alt="" /> TypeScript
						</span>
						<span>
							<img src="/img/tech/css.svg" loading="lazy" alt="" /> CSS
						</span>
					</summary>
					<p class="tech">
						<span>
							<img src="/img/tech/node.svg" alt="" loading="lazy" /> NodeJS
						</span>
						<span>
							<img src="/img/tech/deno.svg" alt="" loading="lazy" /> Deno
						</span>
						<span>
							<img src="/img/tech/bun.svg" alt="" loading="lazy" /> Bun
						</span>
					</p>
					<p class="tech">
						<span>
							<img src="/img/tech/svelte.svg" alt="" loading="lazy" /> SvelteKit
						</span>
						<span>
							<img src="/img/tech/react.svg" alt="" loading="lazy" /> React
						</span>
						<span>Express</span>
						<span>EJS</span>
						<span>Mongoose</span>
						<span>SocketIO</span>
					</p>
					<p class="tech">
						<span>
							<img src="/img/tech/bootstrap.svg" alt="" loading="lazy" /> Bootstrap
						</span>
					</p>
				</details>
				<meter min="1" max="100" value="100" />
			</div>
			<div class="card">
				<details>
					<summary class="tech">
						<span>
							<img src="/img/tech/java.svg" loading="lazy" alt="" /> Java
						</span>
						<span>
							<img src="/img/tech/swift.svg" loading="lazy" alt="" /> Swift
						</span>
						<span>
							<img src="/img/tech/c%23.svg" loading="lazy" alt="" /> C#
						</span>
					</summary>
					<p class="tech">
						<span>SwiftUI</span>
						<span>
							<img src="/img/tech/xml.svg" alt="" loading="lazy" /> JavaFX
						</span>
						<span>
							<img src="/img/tech/unity.svg" alt="" loading="lazy" /> Unity
						</span>
					</p>
				</details>
				<meter min="1" max="100" value="92" />
			</div>
			<div class="card">
				<p class="tech">
					<span><img src="/img/tech/c++.svg" loading="lazy" alt="" /> C++</span>
					<span><img src="/img/tech/c.svg" loading="lazy" alt="" /> C</span>
					<span>
						<img src="/img/tech/python.svg" loading="lazy" alt="" /> Python
					</span>
					<span>
						<img src="/img/tech/assembly.svg" loading="lazy" alt="" /> ASM
					</span>
				</p>
				<meter min="1" max="100" value="20" />
			</div>
		</div>
	</div>
	<div class="cv">
		<h2>💾 Data(base)</h2>
		<div class="grid">
			<div class="card">
				<p class="tech">
					<span>
						<img src="/img/tech/mysql.svg" loading="lazy" alt="" /> MySQL / MariaDB
					</span>
					<span>
						<img src="/img/tech/sqlite.svg" loading="lazy" alt="" /> SQLite
					</span>
				</p>
				<meter min="1" max="100" value="97" />
			</div>
			<div class="card">
				<p class="tech">
					<span>
						<img src="/img/tech/pocketbase.svg" loading="lazy" alt="" /> PocketBase
					</span>
					<span>
						<img src="/img/tech/firebase.svg" loading="lazy" alt="" /> Firebase
					</span>
				</p>
				<meter min="1" max="100" value="90" />
			</div>
			<div class="card">
				<p class="tech">
					<span>
						<img src="/img/tech/mongo.svg" loading="lazy" alt="" /> MongoDB
					</span>
					<span>
						<img src="/img/tech/oracle.svg" loading="lazy" alt="" /> Oracle
					</span>
					<span>PL/SQL</span>
				</p>
				<meter min="1" max="100" value="50" />
			</div>
		</div>
	</div>
	<div class="cv">
		<h2>🎓 Education</h2>
		<div class="grid">
			<div class="card">
				<h3>🧑🏻‍🎓 Hochschule der Medien</h3>
				<p>Nov '20 - <Live /> now</p>
			</div>
			<div class="card">
				<h3>📚 Ferdinand von Steinbeis Schule</h3>
				<p>Sep '18 - Jul '20</p>
			</div>
		</div>
	</div>
	<div class="cv">
		<h2>💼 Jobs</h2>
		<div class="grid">
			<div class="card">
				<h3>🖥️ Software-Developer</h3>
				<p>May '22 - <Live /> now</p>
				<p>TypeScript, Firebase, PocketBase, SvelteKit</p>
				<ul>
					<li><a href="#!" class="hidden">not public</a></li>
				</ul>
			</div>
			<div class="card">
				<h3>👨🏻‍💻 Web-Developer</h3>
				<p>Nov '20 - Apr '21</p>
				<p>PHP, SQL, TypeScript, React</p>
				<ul>
					<li>
						<a href="https://mademyday.com" rel="noreferrer">mademyday.com</a>
					</li>
					<li><a href="#!" class="hidden">not public</a></li>
				</ul>
			</div>
			<div class="card">
				<h3>🗞 Deliveryman</h3>
				<p>Oct '15 - Jul '20</p>
			</div>
		</div>
	</div>
	<div class="cv">
		<h2>🗺 Languages</h2>
		<div class="grid">
			<div class="card">
				<h3>🇩🇪 German</h3>
				<p>native speaker</p>
			</div>
			<div class="card">
				<h3>🇬🇧 English</h3>
				<p>B2</p>
			</div>
			<div class="card">
				<h3>🇨🇳 Chinese (Mandarin)</h3>
				<p>~700 汉子</p>
			</div>
			<div class="card">
				<h3>🇫🇷 French</h3>
				<p>B1</p>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	div.intro {
		hyphens: auto;
		text-align: justify;

		@media (min-width: 1024px) {
			font-size: 1.1em;
			width: 50%;
			margin: 0 auto;
		}

		@media (min-width: 2048px) {
			width: 30%;
		}

		h1 {
			text-decoration: underline;
			letter-spacing: 1.5px;
			text-decoration-color: var(--accent);
			text-decoration-thickness: 5px;
		}

		p {
			font-family: var(--mono);
		}

		a {
			color: var(--accent);
		}
	}

	div.skills {
		margin-top: 5em !important;

		div.cv {
			h2 {
				text-decoration: underline;
				text-decoration-thickness: 3px;
				text-decoration-color: var(--accent);
				text-transform: uppercase;
			}

			div.grid > div.card {
				width: 100%;

				h3 {
					margin-block-end: 0;
				}

				.tech {
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					gap: 0.25em;
				}

				details > :not(summary).tech {
					span {
						font-weight: normal;
					}
				}

				.tech {
					&:first-child {
						margin-bottom: 0.75em;
					}

					&:last-child {
						margin-bottom: 0.5em;
					}

					span {
						font-weight: 500;
						padding: 0.2em 0.4em;
						border: 1px solid rgba(var(--gray-rgb), 0.8);
						border-radius: var(--radius);

						img {
							height: 18px;
							width: 18px;
							margin-right: 0.125em;
							vertical-align: text-bottom;
						}
					}
				}

				ul {
					padding-inline-start: 1.75em;
					margin-block-start: 0.75em;
				}

				.hidden {
					filter: blur(0.125em);
				}

				p {
					margin-block-start: 0.25em;
					margin-block-end: 0;
				}

				meter,
				meter::-webkit-meter-bar {
					background: rgba(var(--gray-rgb), 0.2);

					height: 1em;
					width: 100%;

					border: 0;
					border-radius: calc(var(--radius) * 0.5);
				}

				meter::-webkit-meter-optimum-value {
					background: linear-gradient(
							0deg,
							hsla(0, 0%, 100%, 0.1),
							rgba(0, 0, 0, 0.1)
						),
						linear-gradient(270deg, var(--accent), var(--accent-alt));
					border-radius: calc(var(--radius) * 0.5);
				}

				meter::-moz-meter-bar {
					background: linear-gradient(
							0deg,
							hsla(0, 0%, 100%, 0.1),
							rgba(0, 0, 0, 0.1)
						),
						linear-gradient(270deg, var(--accent), var(--accent-alt));
					border-radius: calc(var(--radius) * 0.5);
				}
			}
		}
	}

	@media (min-width: 1024px) {
		div.skills {
			width: 80%;
			margin: 0 auto;
		}

		div.cv {
			display: grid;
			grid-template-columns: 1fr 4fr;
			gap: 1em;
			margin-block: 1em;
		}
	}
</style>

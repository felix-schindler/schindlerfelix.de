<div class="intro">
	<h1>Felix Schindler</h1>
	<p>Hey, I am an 20-year-old German <mark>student</mark> who loves to code.</p>
	<p>
		I am currently studying <mark>computer science</mark> as a
		<mark>German-Chinese double degree</mark> at Stuttgart Media University.
	</p>
	<p>
		Most of my projects aren't available to the public, tho I have some public
		repositories on
		<a href="https://github.com/felix-schindler" rel="noopener noreferrer">
			GitHub
		</a>
		and
		<a href="https://gitlab.com/felix-schindler" rel="noopener noreferrer">
			GitLab</a
		>. <i>That's just because I don't want to host them anymore.</i> If you want
		to know more about me, my interests or my projects, feel free to pay a visit
		to my <a href="/blog">blog</a>.
	</p>
</div>
<div class="skills">
	<div class="cv">
		<h2>🧑🏻‍💻 Coding</h2>
		<div class="grid">
			<div class="card">
				<p class="tech">
					<span><img src="/img/tech/php.svg" loading="lazy" alt="" /> PHP</span>
					<span>
						<img src="/img/tech/typescript.svg" loading="lazy" alt="" /> TypeScript
					</span>
					<span>
						<img src="/img/tech/html.svg" loading="lazy" alt="" /> HTML
					</span>
					<span>
						<img src="/img/tech/css.svg" loading="lazy" alt="" /> CSS
					</span>
				</p>
				<meter min="1" max="100" value="100" />
			</div>
			<div class="card">
				<p class="tech">
					<span
						><img src="/img/tech/java.svg" loading="lazy" alt="" /> Java</span
					>
					<span><img src="/img/tech/c%23.svg" loading="lazy" alt="" /> C#</span>
				</p>
				<meter min="1" max="100" value="80" />
			</div>
			<div class="card">
				<p class="tech">
					<span><img src="/img/tech/c++.svg" loading="lazy" alt="" /> C++</span>
					<span><img src="/img/tech/c.svg" loading="lazy" alt="" /> C</span>
					<span>
						<img src="/img/tech/python.svg" loading="lazy" alt="" /> Python
					</span>
					<span>
						<img src="/img/tech/assembly.svg" loading="lazy" alt="" /> Assembly
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
				<meter min="1" max="100" value="90" />
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
				<meter min="1" max="100" value="75" />
			</div>
			<div class="card">
				<p class="tech">
					<span>
						<img src="/img/tech/oracle.svg" loading="lazy" alt="" /> Oracle
					</span>
					<span>PL/SQL</span>
				</p>
				<meter min="1" max="100" value="70" />
			</div>
		</div>
	</div>
	<div class="cv">
		<h2>🎓 Education</h2>
		<div class="grid">
			<div class="card">
				<h3>🧑🏻‍🎓 Hochschule der Medien</h3>
				<p>Nov '20 - <span class="live" /> now</p>
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
				<h3>🧑🏻‍💻 Software-Developer</h3>
				<p>May '22 - <span class="live" /> now</p>
				<p>TypeScript, Firebase, PocketBase, SvelteKit</p>
			</div>
			<div class="card">
				<h3>🧑🏻‍💻 Web-Developer</h3>
				<p>Nov '20 - Apr '21</p>
				<p>PHP, SQL, TypeScript, React</p>
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
		width: 80%;
		margin: 0 auto;
		margin-top: 5em;

		h2 {
			text-transform: uppercase;
		}

		meter,
		meter::-webkit-meter-bar {
			background: rgba(var(--gray-rgb), 0.2);

			height: 0.8em;
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

		@-moz-document url-prefix() {
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

		p.tech {
			display: flex;
			flex-wrap: wrap;
			gap: 0.25em;

			span {
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

		span.live {
			display: inline-block;
			height: 0.75rem;
			width: 0.75rem;
			background-color: var(--accent);
			border-radius: 50%;
			-webkit-animation: blink 2s infinite;
			animation: blink 2s infinite;
		}

		@keyframes blink {
			0% {
				opacity: 0;
			}

			50% {
				opacity: 1;
			}

			to {
				opacity: 0;
			}
		}

		div.cv {
			display: grid;
			grid-template-columns: 1fr 3fr;
			gap: 1em;
			margin-block: 1em;

			div.grid > div.card {
				width: 100%;
			}
		}
	}
</style>

<div>
	<img src="https://avatars.githubusercontent.com/u/65357346" alt="<fe/ix>" />
	<h1>My Blog</h1>
	<p>thoughts and prayers</p>
</div>
<ul>
	<li>
		2023
		<ul>
			<li>
				<a href="./blog/pgp">PGP / GPG and Git</a>
				<p>
					{new Date("2023-03-25").toLocaleDateString()} &middot; How to setup and
					use (on Mac)
				</p>
			</li>
		</ul>
	</li>
	<li>
		2022
		<ul>
			<li>
				<a href="./blog/mc-perf">Minecraft Perf Mods</a>
				<p>
					{new Date("2022-11-02").toLocaleDateString()} &middot; Collection of some
					Minecraft Fabric performance mods
				</p>
			</li>
			<li>
				<a href="./blog/reset">reset</a>
				<p>
					{new Date("2022-06-17").toLocaleDateString()} &middot; Hi, hello and welcome!
				</p>
			</li>
		</ul>
	</li>
	<li>
		2021
		<p><i>Articles have been deleted</i></p>
	</li>
	<li>
		2020
		<p><i>Articles have been deleted</i></p>
	</li>
</ul>

<style lang="scss">
	div {
		text-align: center;
		padding: 1em;
		margin-bottom: 1em;
		border-bottom: 1px solid var(--color-border-muted);

		h1 {
			border-bottom: 0;
			margin: 0;
		}

		img {
			width: 10em;
			height: 10em;
			border-radius: calc(var(--radius) * 10);
		}
	}

	p {
		margin: 0;
		color: var(--light-gray);
	}

	a {
		font-size: 1.1em;
	}
</style>

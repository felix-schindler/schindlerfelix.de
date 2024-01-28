<script>
	import { locale } from "$lib/translations";
</script>

<div class="imprint">
	<h1>Imprint</h1>
	<p>Angaben gemäß § 5 TMG</p>
	<h2>Verantwortlich für den Inhalt</h2>
	<p><a href="/">👨🏻‍💻 Felix Schindler</a></p>
	<h3>Adresse</h3>
	<address>
		Kreuzstraße<br />
		70730 Esslingen<br />
		Deutschland
	</address>
	<h3>Kontakt</h3>
	<a href="https://t.me/felix_schindler" rel="noopener noreferrer" title="Telegram">
		📱 t.me/felix_schindler
	</a>
	<a href="mailto:webmaster@schindlerfelix.de" title="E-Mail"> 📧 webmaster@schindlerfelix.de </a>
</div>
<div class="data">
	<h1>Datenschutz</h1>
	<p>
		Diese Datenschutzerklärung gilt für die persönliche Webseite unter
		<code>www.schindlerfelix.de</code> und <code>schindlerfelix.de</code>.
	</p>
	<h2>Hoster</h2>
	<p>Die Webseite wird gehostet von Deno Deploy, einem Service von Deno Land Inc.</p>
	<address>
		Deno Land Inc.<br />
		251 Little Falls Dr<br />
		Wilmington DE 19808-1674<br />
		USA
	</address>
	<h2>Erfasste Daten</h2>

	<h3>Cookies & Tracking</h3>
	<p>Unsere Webseite verwendet keine Cookies oder ähnliche Tracking-Technologien.</p>

	<h3>Datenweitergabe</h3>
	<p>Wir geben keinerlei Daten an Dritte weiter.</p>

	<h3>Externe Links</h3>
	<p>
		Unsere Webseite enthält Links zu externen Webseiten. Bitte beachten Sie, dass diese
		Datenschutzerklärung ausschließlich für unsere Webseite gilt. Wir haben keinen Einfluss auf die
		Datenschutzpraktiken externer Webseiten und übernehmen keine Verantwortung für deren Inhalte
		oder Handlungen. Bitte lesen Sie die Datenschutzerklärungen der externen Webseiten, wenn Sie
		diese besuchen.
	</p>

	<h3>Kontakt</h3>
	<p>
		Wenn Sie Fragen oder Anliegen bezüglich dieser Datenschutzerklärung haben, können Sie uns per
		E-Mail unter webmaster@schindlerfelix.de kontaktieren.
	</p>

	<h3>Änderungen der Datenschutzerklärung</h3>
	<p>
		Wir behalten uns das Recht vor, diese Datenschutzerklärung zu ändern. Aktualisierungen werden
		auf unserer Webseite veröffentlicht. Bitte überprüfen Sie regelmäßig unsere
		Datenschutzerklärung, um auf dem neuesten Stand zu bleiben.
	</p>

	<p>
		Stand: {new Date("2024-01-16").toLocaleDateString($locale, {
			day: "2-digit",
			month: "long",
			year: "numeric",
		})}
	</p>
</div>

<style lang="scss">
	h1,
	h2,
	h3 {
		margin-block-end: 0;
	}

	code {
		font-family: var(--mono);
	}

	div.imprint {
		p {
			margin: 0;
		}

		a {
			display: block;
		}
	}
</style>

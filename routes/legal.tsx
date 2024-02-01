import { ButtonLink, Link } from "@/components/utils.tsx";
import { fmt } from "@/core/utils.ts";
import type { State } from "@/core/types.ts";
import type { PageProps } from "$fresh/server.ts";

const back_to_home = {
	en: "Back to home page",
	de: "Zurück zur Startseite",
	zh: "返回主页",
} as const;

export default function LegalPage(props: PageProps<never, State>) {
	const lang = props.state.language;

	return (
		<>
			<div class="flex flex-col gap-2 mb-5">
				<p>
					<ButtonLink name={`← ${back_to_home[lang]}`} href="/" />
				</p>
				<h1 class="text-3xl mb-2 font-bold tracking-tight">Impressum</h1>
				<h2 class="text-2xl">Verantwortlich für den Inhalt</h2>
				<Link
					href="https://www.schindlerfelix.de"
					name="👨🏻‍💻 Felix Schindler"
					secondary
				/>
				<h2 class="text-xl">Adresse</h2>
				<address>
					Kreuzstraße<br />
					73730 Esslingen<br />
					Deutschland
				</address>
				<h2 class="text-xl">Kontakt</h2>
				<Link
					href="mailto:webmaster@schindlerfelix.de"
					name="📧 webmaster@schindlerfelix.de"
					secondary
				/>
				<Link
					href="https://t.me/felix_schindler"
					name="📱 t.me/felix_schindler"
					secondary
				/>
			</div>
			<div class="flex flex-col gap-2">
				<h1 class="text-3xl mb-2 font-bold tracking-tight">Datenschutz</h1>
				<p>
					Diese Datenschutzerklärung gilt für die informative Webseite unter
					{" "}
					<code>www.schindlerfelix.de</code>.
				</p>
				<h2 class="text-2xl">Hoster</h2>
				<p>
					<p>
						Die Webseite wird gehostet von Deno Deploy, einem Service von Deno
						Land Inc.
					</p>
					<address>
						Deno Land Inc.<br />
						251 Little Falls Dr<br />
						Wilmington DE 19808-1674<br />
						USA
					</address>
				</p>
				<h2 class="text-2xl">Erfasste Daten</h2>
				<p>
					Es werden keinerlei personenbezogene Daten erfasst. Es werden keine
					IP-Adressen oder Log-Dateien gesammelt.
				</p>
				<h2 class="text-2xl">Cookies & Tracking</h2>
				<p>
					Unsere Webseite verwendet keine Cookies oder ähnliche
					Tracking-Technologien.
				</p>
				<h2 class="text-2xl">Datenweitergabe</h2>
				<p>Wir geben keinerlei Daten an Dritte weiter.</p>
				<h2 class="text-2xl">Datensicherheit</h2>
				<p>
					Unsere Webseite verwendet HTTPS, um die Sicherheit der Daten während
					der Übertragung zu gewährleisten.
				</p>
				<h2 class="text-2xl">Externe Links</h2>
				<p>
					Unsere Webseite enthält Links zu externen Webseiten. Bitte beachten
					Sie, dass diese Datenschutzerklärung ausschließlich für unsere
					Webseite gilt. Wir haben keinen Einfluss auf die Datenschutzpraktiken
					externer Webseiten und übernehmen keine Verantwortung für deren
					Inhalte oder Handlungen. Bitte lesen Sie die Datenschutzerklärungen
					der externen Webseiten, wenn Sie diese besuchen.
				</p>
				<h2 class="text-2xl">Kontakt</h2>
				<p>
					Wenn Sie Fragen oder Anliegen bezüglich dieser Datenschutzerklärung
					haben, können Sie uns per E-Mail unter webmaster@schindlerfelix.de
					kontaktieren.
				</p>
				<h2 class="text-2xl">Änderungen der Datenschutzerklärung</h2>
				<p>
					Wir behalten uns das Recht vor, diese Datenschutzerklärung zu ändern.
					Aktualisierungen werden auf unserer Webseite veröffentlicht. Bitte
					überprüfen Sie regelmäßig unsere Datenschutzerklärung, um auf dem
					neuesten Stand zu bleiben.
				</p>
				<p>
					Stand: {fmt.fullDate(new Date("2024-01-29T13:00:42.992Z"))}
				</p>

				<h1 class="text-3xl font-bold">Quellenangaben</h1>
				<ul>
					<li>
						Favicon:{" "}
						<Link
							name="China icons created by Freepik - Flaticon"
							href="https://www.flaticon.com/free-icons/china"
						/>
					</li>
				</ul>
			</div>
		</>
	);
}

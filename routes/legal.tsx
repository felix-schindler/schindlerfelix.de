import { ButtonLink, Link } from "@/components/mod.tsx";
import { back_to_home } from "@/core/i18n/mod.ts";
import type { State } from "@/core/types.ts";
import type { PageProps } from "$fresh/server.ts";

const not_avail = {
	en: "Sorry, but this legal page is not available in English.",
	zh: "抱歉，此法律页面不提供中文。",
} as const;

export default function LegalPage(props: PageProps<never, State>) {
	const lang = props.state.language;

	return (
		<>
			<div class="mb-5 flex flex-col gap-2" lang="de">
				<div lang={lang}>
					<p>
						<ButtonLink name={`← ${back_to_home[lang]}`} href="/" />
					</p>
					{lang !== "de" && <em class="mt-1 block">{not_avail[lang]}</em>}
				</div>
				<h1 class="mb-2 text-3xl font-bold tracking-tight">Impressum</h1>
				<h2 class="text-2xl">Verantwortlich für den Inhalt</h2>
				<Link
					href="https://www.schindlerfelix.de"
					name="👨🏻‍💻 Felix Schindler"
					secondary
				/>
				<h2 class="text-xl">Adresse</h2>
				<address>
					Kreuzstraße
					<br />
					73730 Esslingen
					<br />
					Deutschland
				</address>
				<h2 class="text-xl">Kontakt</h2>
				<Link
					href="mailto:webmaster@schindlerfelix.de"
					name="📧 webmaster@schindlerfelix.de"
					secondary
				/>
				<Link
					href="https://signal.me/#eu/N9BzUA8QKxRd4Vq4xd0NDUdqqxZPRm-eqw8YX9uJTfC9MxkvHXFEHJq3lAAqYEKF"
					name="📱 Signal"
					secondary
				/>
			</div>
			<div class="flex flex-col gap-2">
				<h1 class="mb-2 text-3xl font-bold tracking-tight">Datenschutz</h1>
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
						Deno Land Inc.
						<br />
						251 Little Falls Dr
						<br />
						Wilmington DE 19808-1674
						<br />
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
					Diese Webseite verwendet genau einen Cookie. Dieser wird nicht für
					Tracking oder ähnliche Zwecke verwendet, sondern lediglich um die
					gewählte Sprache zu speichern. Dieser wird nur gesetzt, wenn eine
					andere Sprache als die Standardsprache gewählt wird, wodurch die
					Webseite auch ohne Cookies funktioniert.
					<ul class="list-inside list-disc">
						<li>
							<b>lang</b>: Cookie der die gewählte Sprache speichert
						</li>
					</ul>
				</p>
				<p>
					Unsere Webseite verwendet bis auf den gerade genannten keine Cookies
					oder ähnliche Tracking-Technologien.
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
					Stand:{" "}
					{new Date("2024-02-01T13:00:43.494Z").toLocaleDateString(lang, {
						year: "numeric",
						month: "long",
						day: "numeric",
					})}
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

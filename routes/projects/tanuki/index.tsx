import { Link } from "@/components/mod.tsx";

export default function Tanuki() {
	return (
		<div class="flex flex-col gap-5">
			<div>
				<h2 class="text-3xl mb-2 font-bold tracking-tight">TLDR;</h2>
				<p class="mb-1">
					Available for <mark class="font-mono">0.99€</mark> in the App Store
				</p>
				<p class="mb-1">
					It's in early development and therefore bugs and missing features are
					expected. Any feature requests or issues can be reported in the GitLab
					repository.
				</p>
				<p>
					It's open source and licensed under GNU AGPLv3. I will reserve the
					right to make it closed source at any point.
				</p>
			</div>
			<div>
				<h2 class="text-3xl mb-2 font-bold tracking-tight">Links</h2>
				<ol class="list-inside list-disc">
					<li>
						<Link
							name="App Store"
							href="https://apps.apple.com/us/app/tanuki-for-gitlab/id6446419487"
						/>
					</li>
					<li>
						<Link
							name="GitLab Repo"
							href="https://gitlab.com/felix-schindler/gitlab-ios"
						/>
					</li>
					<li>
						<Link
							name="Roadmap for next version"
							href="https://gitlab.com/felix-schindler/gitlab-ios/-/milestones/3#tab-issues"
						/>
					</li>
					<li>
						<Link name="FAQ" href="/projects/tanuki/support#faq" />
					</li>
					<li>
						<Link name="Support" href="/projects/tanuki/support" />
					</li>
					<li>
						<Link name="Privacy Statement" href="/projects/tanuki/privacy" />
					</li>
				</ol>
			</div>
			<div>
				<h2 class="text-3xl mb-2 font-bold tracking-tight">Screenshots</h2>
				<div class="grid grid-cols-default gap-2">
					<img
						src="/img/tanuki/home.avif"
						alt="Home"
						loading="lazy"
						class="rounded-lg"
					/>{" "}
					<img
						src="/img/tanuki/project.avif"
						alt="Project"
						loading="lazy"
						class="rounded-lg"
					/>{" "}
					<img
						src="/img/tanuki/issues.avif"
						alt="Issues"
						loading="lazy"
						class="rounded-lg"
					/>{" "}
					<img
						src="/img/tanuki/branches.avif"
						alt="Branches"
						loading="lazy"
						class="rounded-lg"
					/>{" "}
					<img
						src="/img/tanuki/group.avif"
						alt="Group"
						loading="lazy"
						class="rounded-lg"
					/>
				</div>
			</div>
		</div>
	);
}

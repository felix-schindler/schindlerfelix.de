# ![Tanuki app icon](https://gitlab.com/uploads/-/system/project/avatar/33025310/Tanuki-200kb.png) Tanuki for GitLab

<p class="subtitle">Native GitLab client for iOS and iPadOS, made with SwiftUI.</p>

<label for="tldr">TLDR</label>

<div id="tldr">

Will be available for <mark class="mono">0.99€</mark> in the AppStore

It's in early development and therefore bugs and missing features are expected.
Any feature requests or issues can be reported in the GitLab repository.

It's open source and licensed under GNU AGPLv3. I will reserve the right to make
it closed source at any point.

</div>

<label for="links">Links</label>

<ul id="links">
	<li>
		<a href="https://gitlab.com/felix-schindler/gitlab-ios">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="bi bi-git"
				viewBox="0 0 16 16"
			>
				<path
					d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.031 1.031 0 0 0 0-1.457"
				/>
			</svg>
			GitLab Repo
		</a>
		\
		<a
			href="https://gitlab.com/felix-schindler/gitlab-ios/-/milestones/3#tab-issues"
			>Roadmap for the next version</a
		>
	</li>
	<li>
		<a href="/content/projects/tanuki/support#faq">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="bi bi-question-circle"
				viewBox="0 0 16 16"
			>
				<path
					d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
				/>
				<path
					d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
				/>
			</svg>
			FAQ
		</a>
	</li>
	<li>
		<a href="/content/projects/tanuki/support">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="bi bi-chat"
				viewBox="0 0 16 16"
			>
				<path
					d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
				/>
			</svg>
			Support
		</a>
	</li>
	<li>
		<a href="/content/projects/tanuki/privacy"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="bi bi-shield-shaded"
				viewBox="0 0 16 16"
			>
				<path
					fill-rule="evenodd"
					d="M8 14.933a.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067v13.866zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"
				/>
			</svg>
			Privacy Statement
		</a>
	</li>
</ul>

<label for="screens">Screenshots</label>

<div class="grid" id="screens">
	<img src="/img/tanuki/home.png" alt="Home" loading="lazy" />
	<img src="/img/tanuki/project.png" alt="Project" loading="lazy" />
	<img src="/img/tanuki/issues.png" alt="Issues" loading="lazy" />
	<img src="/img/tanuki/branches.png" alt="Branches" loading="lazy" />
</div>

<style>
	h1 img {
		vertical-align: bottom;
		max-height: 1.25em;
	}

	p.subtitle {
		font-size: larger;
	}

	img {
		border-radius: var(--radius);
	}

	label {
		cursor: text;
	}

	label + *,
	label + div > p {
		margin-block-start: 0;
	}
</style>

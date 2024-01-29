export default function TanukiPrivacy() {
	return (
		<div class="flex flex-col gap-2.5">
			<h2 class="text-3xl mb-2 font-bold tracking-tight">Privacy statement</h2>
			<p>
				<em>
					Last updated: <time datetime="2023-03-18">18th March 2023</time>
				</em>
			</p>
			<p>
				This app does not collect any data for itself. All the data collected is
				managed by the GitLab instance you configured yourself.
			</p>
			<p>
				To read more about the Terms and Privacy Policy you accepted when
				registering, go to the path <code>/-/users/terms</code>{" "}
				on your chosen GitLab instance.
			</p>
			<p>
				When using <code>gitlab.com</code>{" "}
				it would be https://gitlab.com/-/users/terms.
			</p>
		</div>
	);
}

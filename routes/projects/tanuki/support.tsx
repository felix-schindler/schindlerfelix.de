const questions = [
	{
		title: "Why does the app cost anything?",
		answers: [
			"Apple charges money for developer accounts, which you need to be able to deploy apps to the App Store. Also, I shouldn't work for free forever.",
			"I'm not a fan of monthly subscriptions, so that's why there's just the one-time-cost.",
		],
	},
	{
		title: "How to submit a feature request?",
		answers: [
			"Just fill in the form above and send the email, or head over to the repo and open an issue yourself.",
			"You can also just open a merge request if you'd like!",
		],
	},
	{
		title: "When will the app be feature complete?",
		answers: [
			"Feature completeness is a hard thing to achive as GitLab is a pretty big software.",
			"The goal for the beginning is to support the most used features by most users. After that, the focus is on whatever the users suggest. When there are no suggestions the app will receivice incremental updates with no specific focus.",
		],
	},
] as const;

export default function TanukiSupport() {
	return (
		<div class="flex flex-col gap-5">
			<div>
				<h2 class="text-3xl mb-2 font-bold tracking-tight">Support</h2>
				<form
					class="flex flex-col gap-2 items-end"
					action="mailto:contact-project+felix-schindler-gitlab-ios-33025310-issue-@incoming.gitlab.com"
					method="get"
				>
					<input
						type="text"
						name="subject"
						class="block text-base w-full py-1 px-2 rounded-md bg-slate-200 dark:bg-slate-700"
						placeholder="Subject"
					/>
					<textarea
						name="body"
						rows={5}
						class="block text-base w-full py-1 px-2 rounded-md bg-slate-200 dark:bg-slate-700"
						placeholder="Message"
					>
					</textarea>
					<button
						class="py-1 px-2 rounded-md bg-black text-white transition-transform hover:scale-90 dark:bg-white dark:text-black"
						type="submit"
					>
						&rarr; Send
					</button>
				</form>
			</div>
			<div>
				<h2 id="faq" class="text-3xl mb-2 font-bold tracking-tight">FAQ</h2>
				<div class="grid grid-cols-default gap-2">
					{questions.map((question) => (
						<div class="py-1 px-2 rounded-md bg-gray-200 dark:bg-gray-800">
							<h3 class="text-xl font-bold mb-2">{question.title}</h3>
							{question.answers.map((answer) => <p class="mb-1">{answer}</p>)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

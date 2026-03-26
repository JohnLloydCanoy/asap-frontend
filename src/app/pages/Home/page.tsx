import Link from "next/link";

const QUICK_ACTIONS = [
	{ label: "Open Calendar", href: "/calendar" },
	{ label: "View Analytics", href: "/analytics" },
	{ label: "Ask AI", href: "/ask-ai" },
];

const SUMMARY_CARDS = [
	{ title: "Total Campaigns", value: "12", detail: "2 active this week" },
	{ title: "Engagement Rate", value: "7.4%", detail: "+0.9% from last week" },
	{ title: "Scheduled Posts", value: "26", detail: "Across 4 channels" },
	{ title: "AI Suggestions", value: "18", detail: "5 pending review" },
];

const ACTIVITY_ITEMS = [
	"Instagram campaign report generated",
	"3 new content ideas added to backlog",
	"Weekly dashboard exported to PDF",
	"Calendar sync completed successfully",
];

export default function HomePage() {
	return (
		<div className="min-h-screen bg-[#fafafa] p-6 md:p-10">
			<section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
				<p className="text-sm font-medium text-neutral-500">Welcome back</p>
				<h1 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
					Social Analytics Overview
				</h1>
				<p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600 md:text-base">
					This is your generic home dashboard. Use it as the base template for
					KPI tracking, content planning, and AI-assisted recommendations.
				</p>

				<div className="mt-6 flex flex-wrap gap-3">
					{QUICK_ACTIONS.map((action) => (
						<Link
							className="rounded-lg bg-[#2a2a2a] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black"
							href={action.href}
							key={action.label}
						>
							{action.label}
						</Link>
					))}
				</div>
			</section>

			<section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
				{SUMMARY_CARDS.map((card) => (
					<article
						className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm"
						key={card.title}
					>
						<p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
							{card.title}
						</p>
						<p className="mt-3 text-2xl font-bold text-neutral-900">{card.value}</p>
						<p className="mt-1 text-sm text-neutral-600">{card.detail}</p>
					</article>
				))}
			</section>

			<section className="mt-6 grid gap-4 lg:grid-cols-3">
				<article className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm lg:col-span-2">
					<h2 className="text-lg font-semibold text-neutral-900">Recent Activity</h2>
					<ul className="mt-4 space-y-3 text-sm text-neutral-700">
						{ACTIVITY_ITEMS.map((item) => (
							<li className="rounded-md bg-neutral-50 px-3 py-2" key={item}>
								{item}
							</li>
						))}
					</ul>
				</article>

				<article className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
					<h2 className="text-lg font-semibold text-neutral-900">Next Steps</h2>
					<ol className="mt-4 space-y-3 text-sm text-neutral-700">
						<li>1. Review this week&apos;s scheduled content.</li>
						<li>2. Check engagement drops in analytics.</li>
						<li>3. Generate AI caption ideas for tomorrow.</li>
					</ol>
				</article>
			</section>
		</div>
	);
}

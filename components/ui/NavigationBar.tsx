"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
	FaBars,
	FaCalendarAlt,
	FaChartBar,
	FaCog,
	FaHome,
	FaQuestionCircle,
	FaRobot,
	FaSignOutAlt,
	FaTimes,
	FaUserCircle,
} from "react-icons/fa";

type NavigationItem = {
	label: string;
	href: string;
	icon: React.ComponentType<{ className?: string }>;
};

const NAVIGATION_ITEMS: NavigationItem[] = [
	{ label: "Home", href: "/", icon: FaHome },
	{ label: "Calendar", href: "/calendar", icon: FaCalendarAlt },
	{ label: "Analytics", href: "/analytics", icon: FaChartBar },
	{ label: "Ask Ai", href: "/ask-ai", icon: FaRobot },
	{ label: "Settings", href: "/settings", icon: FaCog },
	{ label: "Help", href: "/help", icon: FaQuestionCircle },
	{ label: "Log out", href: "/logout", icon: FaSignOutAlt },
];

type NavigationBarProps = {
	logoText?: string;
	activePath?: string;
};

export default function NavigationBar({
	logoText = "ASAP",
	activePath,
}: NavigationBarProps) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const currentPath = useMemo(() => activePath ?? "/", [activePath]);

	const isActiveItem = (href: string) => currentPath === href;

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<>
			<button
				aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
				aria-expanded={isMobileMenuOpen}
				className="fixed left-4 top-4 z-50 rounded-md border border-neutral-300 bg-white p-2 text-neutral-800 shadow-sm md:hidden"
				onClick={() => setIsMobileMenuOpen((prev) => !prev)}
				type="button"
			>
				{isMobileMenuOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
			</button>

			{isMobileMenuOpen ? (
				<button
					aria-label="Close mobile menu overlay"
					className="fixed inset-0 z-30 bg-black/35 md:hidden"
					onClick={closeMobileMenu}
					type="button"
				/>
			) : null}

			<aside
				className={[
					"fixed left-0 top-0 z-40 flex h-screen w-72 flex-col border-r border-neutral-200 bg-[#f0f0f0] transition-transform duration-300 md:sticky md:translate-x-0",
					isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
				].join(" ")}
			>
				<div className="flex h-full flex-col p-4">
					<div className="mb-6 rounded-lg bg-white px-4 py-3 text-xl font-semibold tracking-wide text-[#2a2a2a] shadow-sm">
						{logoText}
					</div>

					<nav aria-label="Primary navigation" className="flex-1 space-y-2">
						{NAVIGATION_ITEMS.map((item) => {
							const Icon = item.icon;
							const isActive = isActiveItem(item.href);

							return (
								<Link
									className={[
										"flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200",
										isActive
											? "bg-[#2a2a2a] text-white"
											: "bg-white text-[#2a2a2a] hover:bg-neutral-200",
									].join(" ")}
									href={item.href}
									key={item.label}
									onClick={closeMobileMenu}
								>
									<Icon className="h-4 w-4 shrink-0" />
									<span>{item.label}</span>
								</Link>
							);
						})}
					</nav>

					<div className="mt-4 border-t border-neutral-300 pt-4">
						<button
							aria-label="Open profile"
							className="flex w-full items-center justify-center rounded-lg bg-white px-4 py-3 text-[#2a2a2a] shadow-sm transition-colors duration-200 hover:bg-neutral-200"
							type="button"
						>
							<FaUserCircle className="h-8 w-8" />
						</button>
					</div>
				</div>
			</aside>
		</>
	);
}

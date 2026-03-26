"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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
} from "react-icons/fa";

// --- TYPE DEFINITIONS ---
type NavigationItem = {
    label: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    isUtility?: boolean; // Flag to push items to the bottom
};

// --- DATA STRUCTURE (Single Source of Truth) ---
const NAVIGATION_ITEMS: NavigationItem[] = [
    // Main Features
    { label: "Dashboard", href: "/", icon: FaHome },
    { label: "Analytics", href: "/analytics", icon: FaChartBar },
    { label: "Calendar", href: "/calendar", icon: FaCalendarAlt },
    { label: "Ask AI", href: "/ask-ai", icon: FaRobot },
    
    // Utilities (These will render at the bottom)
    { label: "Settings", href: "/settings", icon: FaCog, isUtility: true },
    { label: "Help", href: "/help", icon: FaQuestionCircle, isUtility: true },
];

export default function NavigationBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    // Automatically get the current path from Next.js
    const pathname = usePathname(); 

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    // Split items for layout organization
    const mainLinks = NAVIGATION_ITEMS.filter(item => !item.isUtility);
    const utilityLinks = NAVIGATION_ITEMS.filter(item => item.isUtility);

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                className="fixed left-4 top-4 z-50 rounded-lg border border-gray-200 bg-white p-2 text-gray-600 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                type="button"
            >
                {isMobileMenuOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
            </button>

            {/* Mobile Overlay Backdrop */}
            {isMobileMenuOpen && (
                <div
                    aria-label="Close mobile menu overlay"
                    className="fixed inset-0 z-30 bg-gray-900/50 backdrop-blur-sm transition-opacity md:hidden"
                    onClick={closeMobileMenu}
                    role="button"
                    tabIndex={0}
                />
            )}

            {/* Sidebar Container */}
            <aside
                className={`fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-gray-200 bg-white transition-transform duration-300 ease-in-out md:sticky md:translate-x-0 ${
                    isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex h-full flex-col px-4 py-6">
                    
                    {/* Brand Logo Header */}
                    <div className="mb-8 px-2 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                            A
                        </div>
                        <span className="text-xl font-bold text-gray-900 tracking-tight">
                            ASAP
                        </span>
                    </div>

                    {/* Main Navigation */}
                    <nav aria-label="Primary navigation" className="flex-1 space-y-1">
                        {mainLinks.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;

                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={closeMobileMenu}
                                    className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                                        isActive
                                            ? "bg-blue-50 text-blue-700"
                                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                    }`}
                                >
                                    <Icon className={`h-5 w-5 shrink-0 transition-colors ${isActive ? "text-blue-700" : "text-gray-400 group-hover:text-gray-600"}`} />
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Footer / Utilities Navigation */}
                    <div className="mt-auto space-y-1 pt-6">
                        {/* Utility Links */}
                        {utilityLinks.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;

                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={closeMobileMenu}
                                    className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                                        isActive
                                            ? "bg-blue-50 text-blue-700"
                                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                    }`}
                                >
                                    <Icon className={`h-5 w-5 shrink-0 transition-colors ${isActive ? "text-blue-700" : "text-gray-400 group-hover:text-gray-600"}`} />
                                    {item.label}
                                </Link>
                            );
                        })}

                        {/* Separate Logout Action */}
                        <Link
                            href="/logout"
                            className="group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 transition-all duration-200 hover:bg-red-50"
                        >
                            <FaSignOutAlt className="h-5 w-5 shrink-0 text-red-400 group-hover:text-red-600 transition-colors" />
                            Log out
                        </Link>
                        
                        {/* User Profile Mini-Badge */}
                        <div className="mt-6 flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3">
                            <div className="h-9 w-9 overflow-hidden rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold">
                                {/* Placeholder for user avatar/initials */}
                                JD
                            </div>
                            <div className="flex flex-col overflow-hidden">
                                <span className="truncate text-sm font-semibold text-gray-900">Jane Doe</span>
                                <span className="truncate text-xs text-gray-500">Marketing Lead</span>
                            </div>
                        </div>

                    </div>
                </div>
            </aside>
        </>
    );
}
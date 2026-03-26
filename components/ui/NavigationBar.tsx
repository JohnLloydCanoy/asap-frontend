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
    FaSun,
    FaMoon,
    FaUser // <-- Added the User icon for the Profile tab
} from "react-icons/fa";

// --- TYPE DEFINITIONS ---
type NavigationItem = {
    label: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    isUtility?: boolean; 
};

// --- DATA STRUCTURE---
const NAVIGATION_ITEMS: NavigationItem[] = [
    // Main Features
    { label: "Dashboard", href: "/", icon: FaHome },
    { label: "Analytics", href: "/analytics", icon: FaChartBar },
    { label: "Calendar", href: "/calendar", icon: FaCalendarAlt },
    { label: "Ask AI", href: "/ask-ai", icon: FaRobot },
    { label: "Profile", href: "/profile", icon: FaUser }, // <-- Added Profile Tab
    { label: "Settings", href: "/settings", icon: FaCog },
    
    { label: "Help", href: "/help", icon: FaQuestionCircle, isUtility: true },
];

export default function NavigationBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false); // State for the theme toggle UI
    
    const pathname = usePathname(); 

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

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
                    className="fixed inset-0 z-30 bg-gray-900/40 backdrop-blur-sm transition-opacity md:hidden"
                    onClick={closeMobileMenu}
                    role="button"
                    tabIndex={0}
                />
            )}

            {/* Sidebar Container (Added custom shadow to the right edge) */}
            <aside
                className={`fixed left-0 top-0 z-40 flex h-screen w-72 flex-col border-r border-gray-100/50 bg-[#fbfbfe] shadow-[4px_0_24px_rgba(0,0,0,0.04)] transition-transform duration-300 ease-in-out md:sticky md:translate-x-0 ${
                    isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {/* Scrollable area if screen gets too short */}
                <div className="flex h-full flex-col overflow-y-auto px-5 py-8">
                    
                    {/* Brand Header */}
                    <div className="mb-10 px-2">
                        <h1 className="text-xl font-extrabold text-gray-950 tracking-tight leading-snug">
                            Automated Social<br />
                            Analytics Platform
                        </h1>
                    </div>

                    {/* Main Navigation */}
                    <nav aria-label="Primary navigation" className="flex-1 space-y-2">
                        {mainLinks.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;

                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={closeMobileMenu}
                                    className={`group flex items-center gap-4 rounded-2xl px-5 py-3.5 text-[15px] font-semibold transition-all duration-200 ${
                                        isActive
                                            ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                                            : "text-gray-500 hover:bg-blue-50 hover:text-blue-700"
                                    }`}
                                >
                                    <Icon className={`h-[18px] w-[18px] shrink-0 transition-colors ${isActive ? "text-white" : "text-gray-400 group-hover:text-blue-600"}`} />
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Footer Area: Utilities & Toggles */}
                    <div className="mt-8 flex flex-col space-y-2 pt-6">
                        
                        {utilityLinks.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;

                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={closeMobileMenu}
                                    className={`group flex items-center gap-4 rounded-2xl px-5 py-3.5 text-[15px] font-semibold transition-all duration-200 ${
                                        isActive
                                            ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                                            : "text-gray-500 hover:bg-blue-50 hover:text-blue-700"
                                    }`}
                                >
                                    <Icon className={`h-[18px] w-[18px] shrink-0 transition-colors ${isActive ? "text-white" : "text-gray-400 group-hover:text-blue-600"}`} />
                                    {item.label}
                                </Link>
                            );
                        })}

                        {/* Log out Action */}
                        <Link
                            href="/logout"
                            className="group flex items-center gap-4 rounded-2xl px-5 py-3.5 text-[15px] font-semibold text-gray-500 transition-all duration-200 hover:bg-red-50 hover:text-red-600"
                        >
                            <FaSignOutAlt className="h-[18px] w-[18px] shrink-0 text-gray-400 group-hover:text-red-500 transition-colors" />
                            Log out
                        </Link>
                        
                        {/* Theme Toggle (Sun/Moon Pill) */}
                        <div className="pt-6 px-1">
                            <div className="inline-flex items-center rounded-full border border-gray-200 bg-white p-1 shadow-sm">
                                <button
                                    onClick={() => setIsDarkMode(false)}
                                    className={`flex h-9 w-10 items-center justify-center rounded-full transition-all duration-200 ${
                                        !isDarkMode ? "bg-blue-600 text-white shadow-sm" : "text-gray-400 hover:text-gray-600"
                                    }`}
                                    aria-label="Light mode"
                                >
                                    <FaSun className="h-[15px] w-[15px]" />
                                </button>
                                <button
                                    onClick={() => setIsDarkMode(true)}
                                    className={`flex h-9 w-10 items-center justify-center rounded-full transition-all duration-200 ${
                                        isDarkMode ? "bg-blue-600 text-white shadow-sm" : "text-gray-400 hover:text-gray-600"
                                    }`}
                                    aria-label="Dark mode"
                                >
                                    <FaMoon className="h-[14px] w-[14px]" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </aside>
        </>
    );
}
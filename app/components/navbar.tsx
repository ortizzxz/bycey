"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface NavLink {
    name: string;
    href?: string;
    icon?: string;
    dropdown?: NavLink[];
}

const navLinks: NavLink[] = [
    {
        name: "Services",
        dropdown: [
            { name: "Earthmoving", href: "/services/earthmoving" },
            { name: "Excavations", href: "/services/excavations" },
            { name: "Waterpipes Replacement", href: "/services/waterpipes" },
        ],
    },
    { name: "Customers", href: "customers" },
    { name: "Blog", href: "blog" },
];

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("Features");
    const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>({});
    const navRef = useRef<HTMLDivElement | null>(null);

    const highlightClass = "bg-yellow-400 text-black";
    const hoverClass = "hover:bg-yellow-300";

    // Close dropdowns and mobile menu when clicking outside
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setDropdownOpen({});
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleDropdown = (name: string) => {
        setDropdownOpen((prev) => ({ ...prev, [name]: !prev[name] }));
    };

    return (
        <header>
            <nav
                ref={navRef}
                className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm"
                aria-label="Main navigation"
            >
                {/* Container */}
                <div className="flex justify-between items-center w-full sm:max-w-7xl sm:mx-auto p-4">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Image src="/images/bycey-logo.jpeg" alt="Bycey Excavations Logo" width={40} height={40} />
                        <h1 className="text-xl">Bycey Excavations</h1>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden sm:flex gap-4 items-center">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative">
                                {link.dropdown ? (
                                    <>
                                        <button
                                            onClick={() => toggleDropdown(link.name)}
                                            className={`flex items-center gap-1 px-3 py-2 rounded-md transition ${active === link.name ? highlightClass : hoverClass
                                                }`}
                                        >
                                            {link.name}
                                            <span
                                                className={`ml-1 transform transition-transform duration-300 ${dropdownOpen[link.name] ? "rotate-90" : "rotate-0"
                                                    }`}
                                            >
                                                ›
                                            </span>
                                        </button>
                                        {dropdownOpen[link.name] && (
                                            <ul className="absolute left-0 mt-2 w-60 rounded-md border bg-white shadow-lg p-2">
                                                {link.dropdown.map((item) => (
                                                    <li key={item.name}>
                                                        <a
                                                            href={item.href} // use href so navigation works
                                                            className={`block px-2 py-1 rounded-md transition ${active === item.name ? highlightClass : hoverClass
                                                                }`}
                                                            onClick={() => {
                                                                setActive(item.name);
                                                                setDropdownOpen((prev) => ({ ...prev, [link.name]: false }));
                                                            }}
                                                        >
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>

                                        )}
                                    </>
                                ) : (
                                    <a
                                        href={link.href}
                                        className={`px-3 py-2 rounded-md transition ${active === link.name ? highlightClass : hoverClass
                                            }`}
                                        onClick={() => setActive(link.name)}
                                    >
                                        {link.name}
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right side Contact */}
                    <div className="hidden lg:flex">
                        <a
                            href="contact"
                            className={`px-4 py-2 rounded-lg shadow transition ${active === "Contact"
                                ? highlightClass
                                : "bg-yellow-400 hover:bg-yellow-500 text-black font-medium"
                                }`}
                            onClick={() => setActive("Contact")}
                        >
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className={`sm:hidden p-2 rounded-md border transition ${open ? "bg-yellow-400 text-black" : "hover:bg-gray-100"
                            }`}
                        aria-label="Toggle navigation menu"
                        aria-expanded={open}
                    >
                        <span className="text-sm">Menu</span>
                    </button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="sm:hidden border-t w-full bg-white p-4 space-y-3">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                {link.dropdown ? (
                                    <>
                                        <button
                                            onClick={() => toggleDropdown(link.name)}
                                            className={`flex items-center justify-between w-full px-3 py-2 rounded-md transition ${active === link.name ? highlightClass : hoverClass
                                                }`}
                                        >
                                            {link.name}
                                            <span
                                                className={`ml-1 transform transition-transform duration-300 ${dropdownOpen[link.name] ? "rotate-90" : "rotate-0"
                                                    }`}
                                            >
                                                ›
                                            </span>
                                        </button>
                                        {dropdownOpen[link.name] && (
                                            <ul className="ml-4 mt-2 space-y-2">
                                                {dropdownOpen[link.name] && (
                                                    <ul className="ml-4 mt-2 space-y-2">
                                                        {link.dropdown.map((item) => (
                                                            <li key={item.name}>
                                                                <a
                                                                    href={item.href} // navigate
                                                                    className={`block px-2 py-1 rounded-md cursor-pointer transition ${active === item.name ? highlightClass : hoverClass
                                                                        }`}
                                                                    onClick={() => {
                                                                        setActive(item.name);
                                                                        setDropdownOpen((prev) => ({ ...prev, [link.name]: false }));
                                                                        setOpen(false); // close mobile menu
                                                                    }}
                                                                >
                                                                    {item.name}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}

                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <a
                                        href={link.href}
                                        className={`block px-3 py-2 rounded-md transition ${active === link.name ? highlightClass : hoverClass
                                            }`}
                                        onClick={() => {
                                            setActive(link.name);
                                            setOpen(false); // close mobile menu
                                        }}
                                    >
                                        {link.name}
                                    </a>
                                )}
                            </div>
                        ))}

                        <a
                            href="contact"
                            className={`block px-3 py-2 rounded-md shadow transition text-black font-medium ${active === "Contact" ? "bg-yellow-500 font-semibold" : ""
                                }`}
                            onClick={() => {
                                setActive("Contact");
                                setOpen(false);
                            }}
                        >
                            Contact
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
}

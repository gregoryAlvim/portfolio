"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const links = [
	{ name: "home", path: "/" },
	{ name: "services", path: "/services" },
	{ name: "resume", path: "/resume" },
	{ name: "work", path: "/work" },
	{ name: "contact", path: "/contact" },
] as const;

const Nav = () => {
	const pathname = usePathname();

	return (
		<nav className="flex gap-8">
			{links.map((link) => (
				<Link
					key={link.name}
					href={link.path}
					className={`${link.path === pathname && "border-purple-600 border-b-2 text-purple-600"} font-medium capitalize transition-all hover:text-purple-600`}
				>
					{link.name}
				</Link>
			))}
		</nav>
	);
};

export default Nav;

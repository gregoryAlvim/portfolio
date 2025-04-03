"use client";

import { DialogTitle } from "@radix-ui/react-dialog";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { links } from "./nav";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const MobileNav = () => {
	const pathname = usePathname();

	return (
		<nav>
			<Sheet>
				<SheetTrigger className="flex cursor-pointer items-center justify-center">
					<CiMenuFries className="text-[32px] text-purple-600" />
				</SheetTrigger>

				<SheetContent className="flex flex-col p-8">
					<DialogTitle className="hidden">Mobile Menu</DialogTitle>
					<div className="mt-32 mb-40 text-center text-2xl">
						<Link href="/">
							<h1 className="font-semibold text-4xl">
								Gregs<span className="text-purple-600">.</span>
							</h1>
						</Link>
					</div>

					<nav className="flex flex-col items-center justify-center gap-8">
						{links.map((link) => (
							<Link
								key={link.name}
								href={link.path}
								className={`${link.path === pathname && "border-purple-600 border-b-2 text-purple-600"} text-xl capitalize transition-all hover:text-purple-600`}
							>
								{link.name}
							</Link>
						))}
					</nav>
				</SheetContent>
			</Sheet>
		</nav>
	);
};

export default MobileNav;

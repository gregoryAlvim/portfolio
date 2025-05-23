import Link from "next/link";
import MobileNav from "./mobile-nav";
import Nav from "./nav";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
	return (
		<header className="py-8 xl:py-12">
			<div className="container mx-auto flex items-center justify-between">
				<Link href="/">
					<h1 className="font-semibold text-4xl">
						Gregs<span className="text-purple-600">.</span>
					</h1>
				</Link>

				<div className="hidden items-center gap-8 xl:flex">
					<Nav />
					<Link href="/home">
						<Button>Hire me</Button>
					</Link>
					<ThemeToggle />
				</div>

				<div className="xl:hidden">
					<MobileNav />
				</div>
			</div>
		</header>
	);
};

export default Header;

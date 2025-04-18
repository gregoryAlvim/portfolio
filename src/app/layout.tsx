import Header from "@/components/header";
import PageTransition from "@/components/page-transition";
import StairTransition from "@/components/stair-transition";
import "@/css/globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMon = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains-mono",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
	title: "Gregs",
	description: "Seu SaaS de planejamento financeiro",
};

interface Props {
	children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
	return (
		<html lang="pt-BR">
			<body
				className={`${jetbrainsMon.variable} dark bg-background antialiased`}
			>
				<Header />
				<StairTransition />
				<PageTransition>{children}</PageTransition>
			</body>
		</html>
	);
}

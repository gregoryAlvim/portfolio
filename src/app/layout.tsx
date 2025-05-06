import Header from "@/components/header";
import PageTransition from "@/components/page-transition";
import StairTransition from "@/components/stair-transition";
import { ThemeProvider } from "@/components/theme-provider";
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
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={jetbrainsMon.variable}
    >
      <body>
        <ThemeProvider>
          <>
            <Header />
            <StairTransition />
            <PageTransition>{children}</PageTransition>
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}

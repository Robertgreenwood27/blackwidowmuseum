import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Inter_Tight } from "next/font/google";
import { Masthead } from "@/components/Masthead";
import "./globals.css";

// Fraunces without its optical-size axis: at large sizes opsz thins the
// hairlines until they break up on black. The text-size cut stays sturdy.
const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
});
const text = Inter_Tight({ variable: "--font-text", subsets: ["latin", "latin-ext"] });
const mono = IBM_Plex_Mono({ variable: "--font-mono", subsets: ["latin", "latin-ext"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: { default: "The Black Widow Museum", template: "%s — The Black Widow Museum" },
  description: "A permanent, ever-growing museum devoted entirely to Latrodectus: the black widow spiders.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable} ${mono.variable}`}>
      <body>
        <a className="skip" href="#main">Skip to collection</a>
        <Masthead />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}

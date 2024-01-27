import type { Metadata } from "next";
import { Abel } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Providers from "./providers";
import Footer from "@/components/footer";

const abel = Abel({
  weight: ['400'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Viviane Corrêa",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${abel.className}`}>
        <Providers>
          <Header />
          <section className="bg-neutral-50">
            {children}
          </section>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/common/providers";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prueba Frontend Genios Studios",
  description: "Prueba tecnica para frontend Genios Studios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}

import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextjs Project",
  description: "A Nextjs project with TypeScript and Tailwind CSS.",
};

// This is the layout for the entire app
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav></nav>
        {children}
      </body>
    </html>
  );
}

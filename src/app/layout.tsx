import type { Metadata } from "next";
import { Lexend, Work_Sans, Spline_Sans } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "../lib/auth";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const splineSans = Spline_Sans({
  subsets: ["latin"],
  variable: "--font-spline-sans",
});

export const metadata: Metadata = {
  title: "Hang Khoa Art - Hand Embroidery Courses",
  description: "Learn the art of hand embroidery with expert instruction. Master traditional techniques and create beautiful artwork.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="light">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      </head>
      <body
        className={`${lexend.variable} ${workSans.variable} ${splineSans.variable} bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-display antialiased min-h-screen flex flex-col overflow-x-hidden`}
      >
        <AuthProvider>
          <div className="flex flex-col flex-grow">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}

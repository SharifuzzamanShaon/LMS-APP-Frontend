"use client";
import "../globals.css";
import ThemeProvider from "../utils/theme-provider";
import { Providers } from "../Provider";
import { Toaster } from "react-hot-toast";

import { Outfit, Inter, Geist_Mono } from "next/font/google";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${outfit.variable} ${inter.variable}  antialiased !bg-gray bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300`}
      >
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
          <Toaster position="top-center" reverseOrder={false} />
        </Providers>
      </body>
    </html>
  );
}

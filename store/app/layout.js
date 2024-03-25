import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "./api/auth/NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Store",
  description: "An online store where products can be sold from different regional branches",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
        {children}
        </NextAuthProvider>
        </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import RecoilContextProvider from "@/lib/RecoilContextProvider";
import "./globals.css";
import styles from './styles.module.scss'

const inter = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Quiz App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.container}>
          <p className={styles.title}>Quiz App</p>
          <RecoilContextProvider>{children}</RecoilContextProvider>
        </div>
      </body>
    </html>
  );
}

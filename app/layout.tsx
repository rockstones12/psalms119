import type { Metadata } from "next";
import { Rowdies } from "next/font/google";
import Navbar from './components/Navbar'
import "./globals.css";
import Footer from "./components/Footer";
import localFont from "next/font/local";


const gilroy = localFont({
  src: [
    {
      path: "../public/fonts/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-Heavy.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
   variable: '--font-gilroy'
});

const rowdies = Rowdies({  subsets: ["latin"], weight: ["300", "400", "700"], variable: '--font-rowdies',});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gilroy.variable}  ${rowdies.variable} antialiased`} >
        <Navbar/>
        {children}
        <div>
        <Footer/>
        </div>
      </body>
    </html>
  );
}

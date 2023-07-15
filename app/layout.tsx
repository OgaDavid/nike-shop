import Footer from "@/components/footer";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";


const BRFrima = localFont({
  src: [
    {
      path: "../fonts/BRFirma-font/BRFirma-Light.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/BRFirma-font/BRFirma-Regular.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/BRFirma-font/BRFirma-Medium.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/BRFirma-font/BRFirma-SemiBold.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/BRFirma-font/BRFirma-Bold.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    default: "Nike. Just Do It. Nike.com",
    template: "%s | Nike",
  },
  keywords: [
    "Nike",
    "Air Force 1",
    "Jordans",
    "SB Dunks",
    "Air Max",
    "New arrivals",
    "Dunks and Blazers",
    "athletics",
    "Nike.com",
    "Converse",
  ],
  description:
    "Nike delivers innovative products, experiences and services to inspire athletes.",
  applicationName: "Nike.com",
  authors: [{ name: "Nike" }],
  openGraph: {
    title: "Nike. Just Do It",
    description:
      "Nike delivers innovative products, experiences and services to inspire athletes.",
    url: "https://nike.com",
    siteName: "",
    images: [
      {
        url: "https://c.static-nike.com/a/images/w_1920,c_limit/bzl2wmsfh7kgdkufrrjq/image.jpg",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NIke. Just Do It.",
    description:
      "Nike delivers innovative products, experiences and services to inspire athletes.",
    site: "@nike",
    creator: "@nike",
    images: [
      "https://c.static-nike.com/a/images/w_1920,c_limit/bzl2wmsfh7kgdkufrrjq/image.jpg",
    ],
  },
  category: "e-commerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={BRFrima.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

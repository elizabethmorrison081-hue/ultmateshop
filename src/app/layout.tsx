import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Viewport } from "next";

export const viewport: Viewport = {
  width: 1200,
  initialScale: 0.3,
  minimumScale: 0.1,
  userScalable: true,
};

export const metadata: Metadata = {
  title: {
    default: "UltimateShop - Best Cvv & Dumps Shop",
    template: "%s | UltimateShop",
  },
  description: "Welcome to Ultimateshop, the best Cvv/Dumps shop also known as ultshop.",
  keywords: ["cvv", "dumps", "ultimateshop", "ultshop", "cvv shop", "best dumps shop"],
  authors: [{ name: "UltimateShop Team" }],
  openGraph: {
    title: "UltimateShop - Best Cvv & Dumps Shop",
    description: "Welcome to Ultimateshop, the best Cvv/Dumps shop also known as ultshop.",
    url: "https://ultimateshop.lol",
    siteName: "UltimateShop",
    images: [
      {
        url: "/logo2.png",
        width: 800,
        height: 600,
        alt: "UltimateShop Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UltimateShop - Best Cvv & Dumps Shop",
    description: "Welcome to Ultimateshop, the best Cvv/Dumps shop also known as ultshop.",
    images: ["/logo2.png"],
  },
  icons: {
    icon: "/logo2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://ultimateshop.lol" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "UltimateShop",
              "url": "https://ultimateshop.lol",
              "logo": "https://ultimateshop.lol/logo2.png",
              "description": "Premium CVV and Dumps shop providing secure transactions and high-quality data.",
              "sameAs": [
                "https://twitter.com/ultimateshop",
                "https://t.me/ultimateshop"
              ]
            })
          }}
        />
      </head>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

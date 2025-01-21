import "swiper/css";
import "./globals.css";
import "swiper/css/navigation";
// import GoogleAnalytics from "./GoogleAnalytics";

import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "Flow Chart Example",
  description: "",
  viewport: {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: "Flow Chart Example",
    siteName: "Flow Chart Example",
    description: "",

    // images: ["/images/ogImage.jpg"],
    width: 1200,
    height: 628,
  },
  twitter: {
    title: "Flow Chart Example",
    siteName: "Flow Chart Example",
    description: "",

    // images: ["/images/ogImage.jpg"],
    width: 1200,
    height: 628,
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta
          name="googlebot"
          content="index, follow, max-video-preview:1, max-image-preview:large"
        />
        <meta name="robots" content="index, follow" />

        {/* <meta
          property="og:image"
          content="https://saudibanks.com.sa/images/ogImage.jpg"
        />
        <meta
          property="twitter:image"
          content="https://saudibanks.com.sa/images/ogImage.jpg"
        /> */}

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/images/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        {/* <GoogleAnalytics /> */}

        {children}
        <GoogleAnalytics
          gaId={
            process.env.NEXT_PUBLIC_GOOGLE_ID
              ? process.env.NEXT_PUBLIC_GOOGLE_ID
              : "GTM-KZDW67K8"
          }
        />
      </body>
    </html>
  );
}

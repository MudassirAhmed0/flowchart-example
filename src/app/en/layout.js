export const metadata = {
  title: "  Saudi Banks – Towards a conscious and responsible society",
  description:
    "Our new identity comes as a clear interpretation of our strategic role of the integrating of Saudi banking system and empowering the community with sufficient knowledge of all banking aspect.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: "  Saudi Banks – Towards a conscious and responsible society",
    siteName: "  Saudi Banks – Towards a conscious and responsible society",
    description:
      "Our new identity comes as a clear interpretation of our strategic role of the integrating of Saudi banking system and empowering the community with sufficient knowledge of all banking aspect.",

    // images: ["https://saudi-banks-frontend.vercel.app/images/dark_logo.jpg"],
    width: 1200,
    height: 628,
  },
  twitter: {
    title: "  Saudi Banks – Towards a conscious and responsible society",
    siteName: "  Saudi Banks – Towards a conscious and responsible society",
    description:
      "Our new identity comes as a clear interpretation of our strategic role of the integrating of Saudi banking system and empowering the community with sufficient knowledge of all banking aspect.",

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
    <html lang="en" dir="ltr">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta
          name="googlebot"
          content="index, follow, max-video-preview:1, max-image-preview:large"
        />
        <meta name="robots" content="index, follow" />

        {/* <meta
          property="og:image"
          content="https://saudi-banks-frontend.vercel.app/images/ogImage.jpg"
        />
        <meta
          property="twitter:image"
          content="https://saudi-banks-frontend.vercel.app/images/ogImage.jpg"
        /> */}

        {/* <meta
          itemProp="description"
          content="Our new identity comes as a clear interpretation of our strategic role of the integrating of Saudi banking system and empowering the community with sufficient knowledge of all banking aspect."
        />
        <meta
          itemProp="name"
          content="  Saudi Banks – Towards a conscious and responsible society"
        />
        <meta
          property="schema"
          content="https://saudi-banks-frontend.vercel.app/images/ogImage.jpg"
        /> */}

        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#333333" />
      </head>
      <body>{children}</body>
    </html>
  );
}

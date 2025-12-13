import "./globals.css";

export const metadata = {
  title: "Mom's Milk",
  description: "Mom's Milk helps you track your baby's feeding, sleep, and diaper  routines and connect with trusted milk donors nearby.",
  applicationName: "Mom's Milk",
  icons: {
    icon: "/searchlogo.png",
    apple: "/searchlogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin ="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet"/>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Mom's Milk",
              url: "https://momsmilk.app",
              logo: "https://momsmilk.app/brandlogo.png",
            }),
          }}
        />


      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

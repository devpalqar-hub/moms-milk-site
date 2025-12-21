import "./globals.css";
import Script from "next/script";
import GAListener from "./components/GAListener";

export const metadata = {
  title: "Mom’s Milk – Baby Feeding, Sleep & Breast Milk Donation App",
  description:
    "Mom’s Milk is an all-in-one baby tracker app for new moms. Track breastfeeding, pumping, sleep, diapers and safely connect with local breast milk donors.",
  applicationName: "Mom’s Milk",
  keywords: [
    "baby tracker app",
    "breastfeeding tracker",
    "baby sleep tracker",
    "diaper tracker",
    "breast milk donation",
    "new mom app",
    "postpartum support"
  ],
  alternates: {
    canonical: "https://momsmilk.app"
  },
  icons: {
    icon: "/searchlogo.png",
    apple: "/searchlogo.png",
  }
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XEDZEVL353"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XEDZEVL353');
          `}
        </Script>


      </head>
      <body>
        <GAListener />
        {children}
      </body>
    </html>
  );
}

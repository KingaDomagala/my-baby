import type { Metadata } from "next";
import { Poppins, Playwrite_US_Trad } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

const playwrite = Playwrite_US_Trad({
  variable: "--font-playwrite",
  weight: ["400"],
});

const SITE_URL = "https://my-baby.pl";
const SITE_NAME = "My Baby";
const TITLE = "Wyjątkowy dziennik wspomnień | My Baby";
const DESCRIPTION =
  "Zachowaj najpiękniejsze wspomnienia – zapisuj ważne chwile i dodawaj zdjęcia, by stworzyć wyjątkową pamiątkę na lata.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    locale: "pl_PL",
    images: [
      {
        url: "/og.jpg", 
        width: 1200,
        height: 630,
        alt: "My Baby – dziennik wspomnień",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = `
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "${SITE_NAME}",
  "url": "${SITE_URL}",
  "logo": "${SITE_URL}/logo.svg",
  "description": "${DESCRIPTION}",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "email": "support@my-baby.pl",
    "availableLanguage": ["pl"]
  }
}
`.trim();

  const websiteJsonLd = `
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "${SITE_NAME}",
  "url": "${SITE_URL}",
  "inLanguage": "pl-PL"
}
`.trim();

  return (
    <html lang="pl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: organizationJsonLd }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: websiteJsonLd }}
        />
      </head>

      <body className={`${poppins.variable} ${playwrite.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
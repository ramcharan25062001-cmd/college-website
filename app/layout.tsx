import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import StickyButtons from "./components/StickyButtons";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "JAIN College - Centre for International Studies",
    template: "%s | JAIN College",
  },
  description:
    "JAIN College Centre for International Studies - Start your degree in India, graduate with a global degree. International pathways to partner universities in UK, USA, Canada, Europe & Australia.",
  keywords: [
    "JAIN College",
    "Centre for International Studies",
    "international degree Bangalore",
    "global degree pathway",
    "BBA Global",
    "B.Com Global",
    "BCA Global",
    "M.Com Global",
    "partner universities UK USA Canada",
    "degree abroad India",
    "Bengaluru international college",
  ],
  metadataBase: new URL("https://jaincollege.ac.in"),
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: "JAIN College - Centre for International Studies",
    url: "https://jaincollege.ac.in",
    logo: "https://jaincollege.ac.in/icon.png",
    description:
      "JAIN College Centre for International Studies offers global degree pathways in partnership with universities in UK, USA, Canada, Europe & Australia.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "15, Vasavi Temple Road, V V Puram",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560004",
      addressCountry: "IN",
    },
    telephone: "+919035166090",
    email: "jccisglobal@gmail.com",
    sameAs: [],
    foundingDate: "1999",
    founder: { "@type": "Person", name: "Dr. Chenraj Roychand" },
  };

  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {children}
        <StickyButtons />
      </body>
    </html>
  );
}

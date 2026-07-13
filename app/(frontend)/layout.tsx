import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import { getSiteSettings } from "@/lib/getSiteSettings";

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "MSP Aéromed | Toulouse Saint-Martin-du-Touch",
  description:
    "Maison de Santé Pluriprofessionnelle Aéromed à Toulouse Saint-Martin-du-Touch.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  const settings = await getSiteSettings();

 return (
  <>
    <Header settings={settings} />

    <main className="flex-1">
      {children}
    </main>

    <Footer settings={settings} />
  </>
);
}
import type { Metadata } from "next";
import JoergGlinkaWebsite from "@/components/JoergGlinkaWebsite";

export const metadata: Metadata = {
  title: "Jörg Glinka | KI-Transformation & Digitalisierung",

  description:
    "Ich baue digitale Plattformen, die skalieren. 25 Jahre Transformation, 12 Jahre CEO. 500 Mio. EUR jährlicher Kundenumsatz. Expertise in KI, E-Commerce und organisationalem Wachstum.",

  keywords: [
    "KI-Transformation",
    "Digital Transformation",
    "E-Commerce Plattformen",
    "Plattform-Skalierung",
    "Jörg Glinka",
    "Geschäftsführer",
    "CEO",
  ],

  alternates: {
    canonical: "https://www.glinka.tech",
  },

  openGraph: {
    title: "Jörg Glinka | KI-Transformation & Digitalisierung",

    description:
      "25 Jahre digitale Transformation. Mitgründer und CEO der etailer Solutions GmbH. Expertise in KI-Integration, E-Commerce und Plattform-Skalierung.",

    url: "https://www.glinka.tech/",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

async function getStoryblokData() {
  const url = `https://api.storyblok.com/v2/cdn/stories/home?version=published&token=${process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN}`;

  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  const data = await res.json();

  return data;
}

export default async function Home() {
  const data = await getStoryblokData();

  if (!data.story) {
    return (
      <div style={{ padding: "40px", color: "white", background: "black" }}>
        <h1>Storyblok Fehler</h1>

        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }

  return <JoergGlinkaWebsite blok={data.story.content} />;
}
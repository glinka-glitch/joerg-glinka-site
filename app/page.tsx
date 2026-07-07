import type { Metadata } from "next";
import JoergGlinkaWebsite from "@/components/JoergGlinkaWebsite";

export const metadata: Metadata = {
  title: "Jörg Glinka | KI-Manager & Digitale Transformation",

  description:
    "KI-Manager mit 25 Jahren Erfahrung in digitaler Transformation. Ich verantworte KI-Management end-to-end: Strategie, Prozesse und operative Umsetzung.",

  alternates: {
    canonical: "https://www.glinka.tech/",
  },

  openGraph: {
    title: "Jörg Glinka | KI-Manager & Digitale Transformation",

    description:
      "KI-Manager mit 25 Jahren Erfahrung in digitaler Transformation. Ich verantworte KI-Management end-to-end: Strategie, Prozesse und operative Umsetzung.",

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
import React from "react";
import { useRouter } from "next/router";
import { NextSeo, NextSeoProps } from "next-seo";

enum Locales {
  ms = "ms-MY",
  en = "en-US",
}

type MetaProps = {
  noindex: boolean;
  nofollow: boolean;
};

function Meta({ noindex, nofollow }: MetaProps) {
  const { locale, pathname } = useRouter();

  const seo: NextSeoProps = {
    canonical: ``,
    languageAlternates: [
      { hrefLang: Locales.en, href: `` },
    ],
    openGraph: {
      type: "website",
      site_name: "BOR-KUR",
    },
    twitter: {
      cardType: "summary_large_image",
    },
    additionalMetaTags: [
      {
        name: "author",
        content: "Karol Binkowski",
      },
    ],
    additionalLinkTags: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    ],
    noindex,
    nofollow,
  };

  const seoMs: NextSeoProps = {
    ...seo,
    title: "BOR-KUR | Hodowla drobiu — Wybierz to, co najlepsze!",
    description:
      "Nasze zaangażowanie w chów i hodowlę zapewnia najlepsze warunki rozwoju, a dobrostan i zdrowie stad są dla nas priorytetem.",
    openGraph: {
      locale: Locales.ms,
      url: ``,
    },
    additionalMetaTags: [
      {
        name: "keywords",
        content:
          "chów, hodowla, kury, kurczaki, drób, drob, mięso, farma, ferma, bor, kur, borkur",
      },
    ],
  };

  const seoEn: NextSeoProps = {
    ...seo,
    title: "BOR-KUR | Chicken breeding — Choose the best!",
    description:
      "Our commitment to breeding and rearing ensures the best conditions for growth, and the welfare and health of the herds are our top priority.",
    openGraph: {
      locale: Locales.en,
      url: ``,
    },
    additionalMetaTags: [
      {
        name: "keywords",
        content:
          "farming, breeding, hens, chickens, poultry, poultry, meat, farm, bor, kur, borkur",
      },
    ],
  };

  return locale === Locales.ms ? <NextSeo {...seoMs} /> : <NextSeo {...seoEn} />;
}

export default Meta;

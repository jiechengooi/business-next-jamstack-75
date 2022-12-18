import React from "react";
import { createClient } from "contentful";
import {
  ISectionHero,
  ILayout,
  ISectionOurValues,
  ISectionAbout,
} from "../types/generated/contentful";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import OurValues from "../components/OurValues";
import About from "../components/About";

type HomePageProps = {
  hero: ISectionHero;
  about: ISectionAbout;
  layout: ILayout;
  ourValues: ISectionOurValues;
};

function HomePage({ hero, about, layout, ourValues }: HomePageProps) {
  return (
    <Layout content={layout}>
      <Hero content={hero} />
      <About content={about} />
      <OurValues content={ourValues} />
    </Layout>
  );
}

async function getStaticProps({ locale }: { locale: string }) {
  const space = process.env.CONTENTFUL_SPACE_ID!;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN!;
  const client = createClient({ space, accessToken });

  return {
    props: {
      hero: await client
        .getEntries({ content_type: "sectionHero", locale })
        .then((res) => res.items[0]),
      about: await client
        .getEntries({ content_type: "sectionAbout", locale })
        .then((res) => res.items[0]),
      layout: await client
        .getEntries({ content_type: "layout", locale })
        .then((res) => res.items[0]),
      ourValues: await client
        .getEntries({ content_type: "sectionOurValues", locale })
        .then((res) => res.items[0]),
    },
  };
}

export { getStaticProps };

export default HomePage;

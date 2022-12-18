import React from "react";
import { createClient } from "contentful";
import Layout from "../components/Layout";
import Map from "../components/Map";
import { ILayout, ISectionMap } from "../types/generated/contentful.d.tsxxxxx";

type LocationPageProps = {
  layout: ILayout;
  map: ISectionMap;
};

function LocationPage({ layout, map }: LocationPageProps) {
  return (
    <Layout content={layout}>
      <Map content={map} />
    </Layout>
  );
}

async function getStaticProps({ locale }: { locale: string }) {
  const space = process.env.CONTENTFUL_SPACE_ID!;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN!;
  const client = createClient({ space, accessToken });

  return {
    props: {
      layout: await client
        .getEntries({ content_type: "layout", locale })
        .then((res) => res.items[0]),
      map: await client
        .getEntries({ content_type: "sectionMap", locale })
        .then((res) => res.items[0]),
    },
  };
}

export { getStaticProps };

export default LocationPage;

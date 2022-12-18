import React from "react";
import { createClient } from "contentful";
import { ILayout, ISectionThankYou } from "../types/generated/contentful.d.tsxxxxx";
import Layout from "../components/Layout";
import RedirectSection from "../components/RedirectSection";

import imageThankYou from "../public/illustrations/appreciation.svg";

type ThankYouPageProps = {
  layout: ILayout;
  thankYou: ISectionThankYou;
};

function ThankYouPage({ layout, thankYou }: ThankYouPageProps) {
  return (
    <Layout content={layout} noindex nofollow>
      <RedirectSection content={thankYou} illustration={imageThankYou} />
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
      thankYou: await client
        .getEntries({ content_type: "sectionThankYou", locale })
        .then((res) => res.items[0]),
    },
  };
}

export { getStaticProps };

export default ThankYouPage;

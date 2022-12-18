import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { createClient } from "contentful";
import { ILayout, ISectionNotFound } from "../types/generated/contentful.d.tsxxxxx";
import Layout from "../components/Layout";
import RedirectSection from "../components/RedirectSection";

import imageNotFound from "../public/illustrations/page-not-found.svg";

type NotFoundProps = {
  layout: ILayout;
  notFound: ISectionNotFound;
};

function NotFound({ layout, notFound }: NotFoundProps) {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [router]);

  return (
    <Layout content={layout} noindex nofollow>
      <RedirectSection content={notFound} illustration={imageNotFound} />
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
      notFound: await client
        .getEntries({ content_type: "sectionNotFound", locale })
        .then((res) => res.items[0]),
    },
  };
}

export { getStaticProps };

export default NotFound;

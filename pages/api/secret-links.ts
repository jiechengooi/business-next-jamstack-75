import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "contentful";
import jwt from "jsonwebtoken";
import { ISecretLinks } from "../../types/generated/contentful.d.tsxxxxx";

const KEY = process.env.JWT_KEY!;
const GLOBAL_PASSWORD = process.env.SECRET_LINKS_PASSWORD;

export type ResponseData = {
  token: string;
};

export type RequestBody = {
  slug: string;
  password: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (!req.body) {
    res.statusCode = 404;
    res.end("Error");
    return;
  }

  const space = process.env.CONTENTFUL_SPACE_ID!;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN!;

  const client = createClient({ space, accessToken });

  const entries = await client.getEntries({ content_type: "secretLinks" });
  const content = entries.items as ISecretLinks[];
  const linkFields = content.map((item) => item.fields);

  const { slug, password } = req.body as RequestBody;

  const getUrlBasedOnGivenData = (slug: string, password: string) => {
    let url = "";

    linkFields.forEach((item) => {
      if (
        item.slug === slug &&
        (password === item.password ||
          (!!GLOBAL_PASSWORD && password === GLOBAL_PASSWORD)) &&
        item.url
      ) {
        url = item.url;
      }
    });

    return url;
  };

  const url = getUrlBasedOnGivenData(slug, password);
  const isUrlNotEmpty = url.length > 0;

  if (isUrlNotEmpty) {
    const token = jwt.sign(
      {
        link: url,
      },
      KEY
    );

    res.status(200).json({
      token,
    });
  } else {
    res.statusCode = 404;
    res.end("Error");
  }
}

export default handler;

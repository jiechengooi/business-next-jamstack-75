import React from "react";
import { ISectionAbout } from "../../types/generated/contentful";
import ImageCtaSection from "../ImageCtaSection";

import imageAbout from "../../public/images/about.png";

type AboutProps = { content: ISectionAbout };

function About({ content }: AboutProps) {
  const { title, paragraph, imageAlternativeText } = content.fields;

  return (
    <ImageCtaSection
      id="about"
      title={title}
      paragraph={paragraph}
      image={imageAbout}
      alt={imageAlternativeText}
    />
  );
}

export default About;

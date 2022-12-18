// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface ILayoutFields {
  /** logoAlternativeText */
  logoAlternativeText: string;

  /** navigationLinks */
  navigationLinks: Entry<{ [fieldId: string]: unknown }>[];

  /** themeSwitcherTitle */
  themeSwitcherTitle: string;

  /** localeSwitcherTitle */
  localeSwitcherTitle: string;

  /** address */
  address: ISectionOurLocation;

  /** contact */
  contact: ISectionContact;
}

export interface ILayout extends Entry<ILayoutFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "layout";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface INavigationLinkFields {
  /** title */
  title: string;

  /** destination */
  destination: string;
}

export interface INavigationLink extends Entry<INavigationLinkFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "navigationLink";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IProductFields {
  /** name */
  name?: string | undefined;

  /** rating */
  rating?: number | undefined;

  /** price */
  price?: number | undefined;

  /** slug */
  slug?: string | undefined;

  /** image */
  image?: Asset | undefined;

  /** details */
  details?: Document | undefined;
}

export interface IProduct extends Entry<IProductFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "product";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISecretLinksFields {
  /** slug */
  slug: string;

  /** password */
  password: string;

  /** url */
  url: string;
}

export interface ISecretLinks extends Entry<ISecretLinksFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "secretLinks";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISectionAboutFields {
  /** title */
  title: string;

  /** paragraph */
  paragraph: string;

  /** cta */
  cta: string;

  /** imageAlternativeText */
  imageAlternativeText: string;
}

export interface ISectionAbout extends Entry<ISectionAboutFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "sectionAbout";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISectionContactFields {
  /** title */
  title: string;

  /** fullName */
  fullName: string;

  /** fullNamePlaceholder */
  fullNamePlaceholder: string;

  /** email */
  email: string;

  /** emailPlaceholder */
  emailPlaceholder: string;

  /** phoneNumber */
  phoneNumber: string;

  /** phoneNumberPlaceholder */
  phoneNumberPlaceholder: string;

  /** message */
  message: string;

  /** messagePlaceholder */
  messagePlaceholder: string;

  /** submit */
  submit: string;

  /** emptyFieldMessage */
  emptyFieldMessage: string;
}

export interface ISectionContact extends Entry<ISectionContactFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "sectionContact";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISectionHeroFields {
  /** title */
  title: string;

  /** paragraph */
  paragraph: string;

  /** ctaContact */
  ctaContact: string;

  /** imageAlternativeText */
  imageAlternativeText: string;
}

export interface ISectionHero extends Entry<ISectionHeroFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "sectionHero";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISectionMapFields {
  /** title */
  title: string;

  /** latitude */
  latitude: number;

  /** longitude */
  longitude: number;

  /** markerPopupText */
  markerPopupText: string;
}

export interface ISectionMap extends Entry<ISectionMapFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "sectionMap";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISectionNotFoundFields {
  /** title */
  title: string;

  /** paragraph */
  paragraph: string;

  /** redirectLink */
  redirectLink: string;
}

export interface ISectionNotFound extends Entry<ISectionNotFoundFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "sectionNotFound";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISectionOurLocationFields {
  /** title */
  title: string;

  /** companyName */
  companyName: string;

  /** city */
  city: string;

  /** zipCode */
  zipCode: string;

  /** street */
  street: string;

  /** streetNumber */
  streetNumber: string;

  /** country */
  country: string;

  /** nip */
  nip: string;

  /** regon */
  regon: string;

  /** email */
  email: string;
}

export interface ISectionOurLocation extends Entry<ISectionOurLocationFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "sectionOurLocation";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISectionOurValuesFields {
  /** title */
  title: string;

  /** peopleTitle */
  peopleTitle: string;

  /** peopleParagraph */
  peopleParagraph: string;

  /** peopleImageAlternativeText */
  peopleImageAlternativeText: string;

  /** growthTitle */
  growthTitle: string;

  /** growthParagraph */
  growthParagraph: string;

  /** growthImageAlternativeText */
  growthImageAlternativeText: string;

  /** qualityTitle */
  qualityTitle: string;

  /** qualityParagraph */
  qualityParagraph: string;

  /** qualityImageAlternativeText */
  qualityImageAlternativeText: string;
}

export interface ISectionOurValues extends Entry<ISectionOurValuesFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "sectionOurValues";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISectionSecretLinkFormFields {
  /** title */
  title: string;

  /** password */
  password: string;

  /** passwordPlaceholder */
  passwordPlaceholder: string;

  /** submit */
  submit: string;

  /** emptyFieldMessage */
  emptyFieldMessage: string;

  /** wrongPasswordMessage */
  wrongPasswordMessage: string;
}

export interface ISectionSecretLinkForm
  extends Entry<ISectionSecretLinkFormFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "sectionSecretLinkForm";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISectionThankYouFields {
  /** title */
  title: string;

  /** paragraph */
  paragraph: string;

  /** redirectLink */
  redirectLink: string;
}

export interface ISectionThankYou extends Entry<ISectionThankYouFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "sectionThankYou";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "layout"
  | "navigationLink"
  | "product"
  | "secretLinks"
  | "sectionAbout"
  | "sectionContact"
  | "sectionHero"
  | "sectionMap"
  | "sectionNotFound"
  | "sectionOurLocation"
  | "sectionOurValues"
  | "sectionSecretLinkForm"
  | "sectionThankYou";

export type LOCALE_CODE = "en-US" | "ms-MY";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
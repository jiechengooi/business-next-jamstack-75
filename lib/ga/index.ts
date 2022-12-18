export const pageview = (url: string) => {
  window?.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS!, {
    page_path: url,
  });
};

export const event = ({
  action,
  params,
}: {
  action: string;
  params: { [key: string]: string };
}) => {
  window?.gtag("event", action, params);
};

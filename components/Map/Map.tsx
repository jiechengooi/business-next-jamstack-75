import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { ISectionMap } from "../../types/generated/contentful.d.tsxxxxx";

type MapProps = {
  content: ISectionMap;
};

function Map({ content }: MapProps) {
  const { title, latitude, longitude } = content.fields;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const center = useMemo(
    () => ({ lat: latitude, lng: longitude }),
    [latitude, longitude]
  );

  return (
    <section
      className="z-20 w-full min-h-screen bg-yellow-50 dark:bg-neutral-800 transition-colors"
      id="contact"
    >
      <div className="w-full px-8 py-24 mx-auto max-w-container grid gap-12 place-items-center xl:gap-24">
        <h2 className="text-4xl font-bold tracking-tight text-center text-neutral-900 dark:text-white transition-colors sm:text-6xl xl:text-7xl">
          {title}
        </h2>
        {!isLoaded && (
          <div className="w-full rounded dark:bg-neutral-900 animate-pulse max-w-[100vw-4rem] h-80 md:h-96 lg:h-[30rem] xl:h-[35rem]" />
        )}
        {!!isLoaded && (
          <GoogleMap
            zoom={14}
            center={center}
            mapContainerClassName="w-full rounded max-w-[100vw-4rem] h-80 md:h-96 lg:h-[30rem] xl:h-[35rem]"
          >
            <MarkerF position={center} />
          </GoogleMap>
        )}
      </div>
    </section>
  );
}

export default Map;

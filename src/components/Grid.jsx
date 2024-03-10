import React from "react";
import { Link } from "react-router-dom";

const image1 =
  "https://images2.9c9media.com/image_asset/2013_10_11_048fc1c0-14d0-0131-bf56-34b52f6f1279_jpg_680x1000.jpg";
const image2 =
  "https://images2.9c9media.com/image_asset/2013_10_11_16585610-14d2-0131-4390-10604ba4c9b1_jpg_680x1000.jpg";
const rotator = {
  collectionSchema: {
    __typename: "Rotator",
    id: "contentid/rotator-home-1",
    collectionAlias: "contentid/acol-67",
    rotatorLanguageMeta: [
      {
        displayTitle: "Latest Shows",
        languageCode: "EN",
      },
      {
        displayTitle: "Èmissions populaire",
        languageCode: "FR",
      },
    ],
    rotatorConfig: {
      __typename: "ContainerConfig",
      maxItems: 15,
      style: "posters",
      showCollectionTitle: true,
      showCollectionCount: null,
      hideMediaTitle: null,
      pageSize: null,
      disableBadges: false,
    },
    gridConfig: {
      __typename: "ContainerConfig",
      maxItems: null,
      style: null,
      showCollectionTitle: null,
      showCollectionCount: null,
      hideMediaTitle: null,
      pageSize: null,
      disableBadges: false,
    },
  },
  containerCollection: {
    id: "contentid/acol-2004",
    count: 14,
    title: "EPI Collection",
    __typename: "ContainerCollection",
    items: [
      {
        id: "30345",
        __typename: "SimpleAxisMedia",
        mediaId: 30345,
        mediaType: "series",
        axisMediaLanguageMeta: [
          {
            languageCode: "EN",
            title: "Megaworld",
            image: {
              url: image1,
              type: "poster",
            },
            badge: {
              title: "Coming soon!",
              description: "Coming soon to BMD long description!",
            },
          },
          {
            languageCode: "FR",
            title: "Megaworld",
            image: {
              url: image1,
              type: "poster",
            },
            badge: {
              title: "Check back soon!",
              description: "Coming soon to BMD description!",
            },
          },
        ],
      },
      {
        id: "36561",
        __typename: "SimpleAxisMedia",
        mediaId: 36561,
        mediaType: "series",
        axisMediaLanguageMeta: [
          {
            languageCode: "EN",
            title: "Lives That Changed The World",
            image: {
              url: image1,
              type: "poster",
            },
            badge: null,
          },
          {
            languageCode: "FR",
            title: "Lives That Changed The World",
            image: {
              url: image1,
              type: "poster",
            },
            badge: null,
          },
        ],
      },
      {
        id: "38334",
        __typename: "SimpleAxisMedia",
        mediaId: 38334,
        mediaType: "series",
        axisMediaLanguageMeta: [
          {
            languageCode: "EN",
            title: "Jupiter: Close Encounter",
            image: {
              url: image2,
              type: "poster",
            },
            badge: {
              title: "Coming soon :)",
              description: "",
            },
          },
          {
            languageCode: "FR",
            title: "Jupiter: Close Encounter",
            image: {
              url: image2,
              type: "poster",
            },
            badge: {
              title: "Coming soon :P",
              description: "Coming soon to Bell!",
            },
          },
        ],
      },
      {
        id: "36756",
        __typename: "SimpleAxisMedia",
        mediaId: 36756,
        mediaType: "series",
        axisMediaLanguageMeta: [
          {
            languageCode: "EN",
            title: "Into The Wild",
            image: {
              url: image1,
              type: "poster",
            },
            badge: null,
          },
          {
            languageCode: "FR",
            title: "Into The Wild",
            image: {
              url: image1,
              type: "poster",
            },
            badge: null,
          },
        ],
      },
      {
        id: "42535",
        __typename: "SimpleAxisMedia",
        mediaId: 42535,
        mediaType: "special",
        axisMediaLanguageMeta: [
          {
            languageCode: "EN",
            title: "Factory City",
            image: {
              url: image2,
              type: "poster",
            },
            badge: null,
          },
          {
            languageCode: "FR",
            title: "Factory City",
            image: {
              url: image2,
              type: "poster",
            },
            badge: null,
          },
        ],
      },
      {
        id: "42525",
        __typename: "SimpleAxisMedia",
        mediaId: 42525,
        mediaType: "special",
        axisMediaLanguageMeta: [
          {
            languageCode: "EN",
            title: "Elephant in the City",
            image: {
              url: image2,
              type: "poster",
            },
            badge: {
              title: "Coming soon",
              description: "Coming soon to Bell Media description!",
            },
          },
          {
            languageCode: "FR",
            title: "Elephant in the City",
            image: {
              url: image2,
              type: "poster",
            },
            badge: {
              title: "Coming soon",
              description: "Coming back soon....",
            },
          },
        ],
      },
      {
        id: "42524",
        __typename: "SimpleAxisMedia",
        mediaId: 42524,
        mediaType: "special",
        axisMediaLanguageMeta: [
          {
            languageCode: "EN",
            title: "Elephant Dreams",
            image: {
              url: image1,
              type: "poster",
            },
            badge: null,
          },
          {
            languageCode: "FR",
            title: "Elephant Dreams",
            image: {
              url: image1,
              type: "poster",
            },
            badge: null,
          },
        ],
      },
      {
        id: "42521",
        __typename: "SimpleAxisMedia",
        mediaId: 42521,
        mediaType: "special",
        axisMediaLanguageMeta: [
          {
            languageCode: "EN",
            title: "City Vets",
            image: {
              url: image2,
              type: "poster",
            },
            badge: null,
          },
          {
            languageCode: "FR",
            title: "City Vets",
            image: {
              url: image2,
              type: "poster",
            },
            badge: null,
          },
        ],
      },
      {
        id: "36560",
        __typename: "SimpleAxisMedia",
        mediaId: 36560,
        mediaType: "series",
        axisMediaLanguageMeta: [
          {
            languageCode: "EN",
            title: "Break It Down",
            image: {
              url: image2,
              type: "poster",
            },
            badge: null,
          },
          {
            languageCode: "FR",
            title: "Break It Down",
            image: {
              url: image2,
              type: "poster",
            },
            badge: null,
          },
        ],
      },
      {
        id: "30352",
        __typename: "SimpleAxisMedia",
        mediaId: 30352,
        mediaType: "series",
        axisMediaLanguageMeta: [
          {
            languageCode: "EN",
            title: "Alien Mysteries",
            image: {
              url: image1,
              type: "poster",
            },
            badge: null,
          },
          {
            languageCode: "FR",
            title: "Alien Mysteries",
            image: {
              url: image1,
              type: "poster",
            },
            badge: null,
          },
        ],
      },
      {
        id: "42471",
        __typename: "SimpleAxisMedia",
        mediaId: 42471,
        mediaType: "special",
        axisMediaLanguageMeta: [
          {
            languageCode: "EN",
            title: "100 Something",
            image: {
              url: image2,
              type: "poster",
            },
            badge: null,
          },
          {
            languageCode: "FR",
            title: "100 Something",
            image: {
              url: image2,
              type: "poster",
            },
            badge: null,
          },
        ],
      },
      {
        id: "39024",
        __typename: "SimpleAxisMedia",
        mediaId: 39024,
        mediaType: "series",
        axisMediaLanguageMeta: [
          {
            languageCode: "EN",
            title: "Mighty Trains",
            image: {
              url: image2,
              type: "poster",
            },
            badge: null,
          },
          {
            languageCode: "FR",
            title: "Mighty Trains",
            image: {
              url: image2,
              type: "poster",
            },
            badge: null,
          },
        ],
      },
      {
        id: "32079",
        __typename: "SimpleAxisMedia",
        mediaId: 32079,
        mediaType: "series",
        axisMediaLanguageMeta: [
          {
            languageCode: "EN",
            title: "MegaSpeed",
            image: {
              url: image2,
              type: "poster",
            },
            badge: null,
          },
          {
            languageCode: "FR",
            title: "MegaSpeed",
            image: {
              url: image2,
              type: "poster",
            },
            badge: null,
          },
        ],
      },
      {
        id: "30351",
        __typename: "SimpleAxisMedia",
        mediaId: 30351,
        mediaType: "series",
        axisMediaLanguageMeta: [
          {
            languageCode: "EN",
            title: "Forensic Factor",
            image: {
              url: image1,
              type: "poster",
            },
            badge: null,
          },
          {
            languageCode: "FR",
            title: "Experts en crime",
            image: {
              url: image1,
              type: "poster",
            },
            badge: null,
          },
        ],
      },
    ],
  },
};
export const Grid = () => {
  const { containerCollection, collectionSchema } = rotator;
  const { displayTitle } = collectionSchema.rotatorLanguageMeta[0];
  const { items } = containerCollection;

  return (
    <div style={{ border: "1px solid gold", margin: "2px" }}>
      <h1>Grid App</h1>
      <h2 className="title4 mb-bm-4">{displayTitle}</h2>
      <div
        style={{
          display: "flex",
          border: "1px solid orange",
          margin: "2px",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "space-around",
          gap: "2rem",
        }}
      >
        {items?.map((item, i) => {
          const simpleAxisMedia = item;
          const { id: mediaId, axisMediaLanguageMeta } = simpleAxisMedia;
          const { title, image, badge } = axisMediaLanguageMeta[0];
          return (
            <div>
              <div className="aspect-[2/3] bg-grey-20 bg-[image:var(--fallback-image-url)] bg-cover bg-center">
                <Link
                  to={`/show/${mediaId}`}
                  className="relative block h-[100%] w-[100%] cursor-pointer"
                >
                  {image?.url && (
                    <img
                      src={image?.url}
                      width={200}
                      title={title}
                      alt={`${title}`}
                      className={`aspect-[2/3] before:-m-bm-10 before:block before:content-[${title}]`}
                    />
                  )}
                  <div className="text-6xl title4 absolute inset-0 z-10 flex items-center justify-center bg-royalblue-20 text-white opacity-0 hover:opacity-95">
                    {"View Details"}
                  </div>
                </Link>
              </div>
              <div className="flex h-bm-7 items-center gap-bm-3">
                {badge && (
                  <>
                    <div className="h-bm-3 w-bm-3 flex-shrink-0 rounded-full bg-royalblue-20" />
                    <div className="headline2 ... truncate text-ellipsis">
                      {badge.title}
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

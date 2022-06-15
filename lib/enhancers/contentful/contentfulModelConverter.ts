import { Asset, Entry } from "contentful";

export const contentfulModelConverter = ({ parameter }: any) => {
  const entry = parameter.value;
  if (entry) {
    const content = { ...entry.fields };
    Object.keys(content).map((fieldKey) => {
      // reference field: array of contentful assets
      if (
        Array.isArray(content[fieldKey]) &&
        content[fieldKey].length > 0 &&
        content[fieldKey][0]?.sys?.type === "Asset"
      ) {
        const transformedImages = content[fieldKey].map((asset: Asset) =>
          transformContentfulImage(asset)
        );
        content[fieldKey] = transformedImages;
      }
      // reference field
      else if (Array.isArray(content[fieldKey])) {
        const flattenedFields = content[fieldKey].map((entry: Entry<any>) => {
          return { ...entry.fields };
        });
        content[fieldKey] = flattenedFields;
      }
      // contentful asset field transformation into a uniform model
      else if (content[fieldKey]?.sys?.type === "Asset") {
        content[fieldKey] = transformContentfulImage(content[fieldKey]);
      }
    });
    return content;
  }
  return parameter.value;
};

function transformContentfulImage(imageField: Asset) {
  let imageUrl = imageField?.fields?.file?.url;
  // Contentful image urls typically start with a double whack
  if (imageUrl.startsWith("//")) {
    imageUrl = imageUrl.replace("//", "https://");
  }

  const { image } = imageField?.fields?.file?.details || {};
  if (image.width && image.height) {
    return {
      src: imageUrl,
      alt: imageField?.fields?.title,
      width: image.width,
      height: image.height,
      // sourceData: {
      //   ...imageField?.fields,
      // },
    };
  }

  return {
    src: imageUrl,
    alt: imageField?.fields?.title,
    // sourceData: {
    //   ...imageField?.fields,
    // },
  };
}

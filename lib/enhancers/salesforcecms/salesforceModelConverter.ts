export const salesforceModelConverter = ({ parameter }: any) => {
  const entry = parameter?.value?.contentNodes;
  if (entry) {
    Object.keys(entry).map((fieldKey) => {
      const nodeType = entry[fieldKey]?.nodeType;
      if (nodeType === "Text" || nodeType === "MultilineText") {
        entry[fieldKey] = entry[fieldKey].value;
      }
      // Salesforce image field transformation to a uniform model
      if (nodeType === "Media") {
        entry[fieldKey] = transformSalesforceImage(entry[fieldKey]);
      }
    });
    return entry;
  }
  return parameter.value;
};

function transformSalesforceImage(sourceImage: any) {
  return {
    src: sourceImage?.url || "",
    alt: sourceImage?.altText || "",
    mimeType: sourceImage?.mimeType,
    width: sourceImage?.width || "",
    height: sourceImage?.height || "",
    // sourceData: {
    //   ...sourceImage?.asset,
    // },
  };
}

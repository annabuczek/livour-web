export const formatPhotoCaption = (caption) => {
  const pattern = /(#\w+\s*?){6}/;
  const match = caption.match(pattern);

  if (match === null) {
    return '#theglobewanderer #passionpassport #neverstopexploring #traveltheworld #wanderlustgirl #lifeofadventures';
  } else {
    return match[0];
  }
};

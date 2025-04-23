export const storeLinks = {
  android: (identifier: string) =>
    `https://play.google.com/store/apps/details?id=${identifier}`,
  ios: (identifier: string) => `https://apps.apple.com/app/${identifier}`,
};

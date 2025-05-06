export enum ISTAGE {
  local = "local",
  development = "development",
  production = "production",
}

const STAGE = {
  local: {
    BASE_URL: "http://0.0.0.0:8000",
  },
  development: {
    BASE_URL:
      "https://paucyn3eedgbl4gpto27hmynv40umhap.lambda-url.sa-east-1.on.aws",
  },
  production: {
    BASE_URL:
      "https://uakawfsoqqiljsymwrdqyp7bty0frhmw.lambda-url.sa-east-1.on.aws",
  },
};

const Config = {
  ROUTES: {
    LINK: "link",
    USER: "user",
  },
  STAGE: STAGE.development,
};

export { Config };

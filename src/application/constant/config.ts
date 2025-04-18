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
    BASE_URL: "",
  },
  production: {
    BASE_URL: "",
  },
};

const Config = {
  ROUTES: {
    LINK: "link",
    USER: "user",
  },
  STAGE: STAGE.local,
};

export { Config };

import { Config } from "../constant";

const { STAGE } = Config;

export const postService = async (path, body) => {
  const url = `${STAGE.BASE_URL}/${path}`;
  return await fetch(url, {
    method: "POST",
    body,
  });
};

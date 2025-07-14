import { postService } from "./api";

const basePath = "user";

export const userService = {
  feedBack: async (feedback) => {
    return postService(`/${basePath}/feedback`, {
      email_from: feedback.emailFrom,
      title: feedback.title,
      message: feedback.message,
    });
  },
};

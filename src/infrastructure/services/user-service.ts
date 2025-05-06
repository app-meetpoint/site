import { postService } from "./api";

const basePath = "user";

export const userService = {
  getUser: async (userId: string) => {
    console.log("getUser", userId);
  },
  signIn: async (email: string, password: string) => {
    console.log("signIn", email, password);
  },
  signUp: async (email: string, password: string) => {
    console.log("signUp", email, password);
  },
  signOut: async () => {},
  feedBack: async (feedback: {
    emailFrom: string;
    title: string;
    message: string;
  }) => {
    return postService(`/${basePath}/feedback`, {
      email_from: feedback.emailFrom,
      title: feedback.title,
      message: feedback.message,
    });
  },
};

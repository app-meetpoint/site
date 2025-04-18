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
};

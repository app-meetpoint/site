import * as Pages from "../../views/pages";

export const Routes = {
  ladingPage: "/",
  signIn: "/sign-in",
  deepLinking: "deep-linking",
};

export const RoutesConfig = [
  {
    path: Routes.ladingPage,
    component: Pages.LandingPage,
  },
  {
    path: Routes.signIn,
    component: Pages.SignIn,
  },
  {
    path: Routes.deepLinking,
    component: Pages.DeepLinking,
  },
];

export const routesWithPermission = [Routes.signIn];

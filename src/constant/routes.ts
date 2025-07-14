import * as Pages from "../../../pages";

export const Routes = {
  ladingPage: "/",
  signIn: "/sign-in",
  deepLinking: "deep-linking",
  privacyPolicy: "/privacy-policy",
  termsOfUse: "/terms-of-use",
  csaePolicy: "/csae-policy",
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
  {
    path: Routes.privacyPolicy,
    component: Pages.PrivacyPolicy,
  },
  {
    path: Routes.termsOfUse,
    component: Pages.TermsOfUse,
  },
  {
    path: Routes.csaePolicy,
    component: Pages.CsaePolicy,
  }
];

export const routesWithPermission = [Routes.signIn];

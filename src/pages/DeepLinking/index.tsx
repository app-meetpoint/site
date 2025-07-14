/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

import { storeLinks } from "application/helpers";

import * as Styled from "./styles";
import { identifierStore } from "application/constant";

export const DeepLinking = () => {
  const params = new URLSearchParams(window.location.search);

  const appDeeplink = params.get("urlRedirect");

  useEffect(() => {
    const userAgent =
      navigator.userAgent || navigator.vendor || (window as any).opera;

    const iosAppStoreLink = storeLinks.ios(identifierStore.ios);
    const androidPlayStoreLink = storeLinks.android(identifierStore.android);

    const fallback = () => {
      if (/android/i.test(userAgent)) {
        window.location.href = androidPlayStoreLink;
      } else if (
        /iPad|iPhone|iPod/.test(userAgent) &&
        !(window as any)?.MSStream
      ) {
        window.location.href = iosAppStoreLink;
      } else {
        alert("Abra esse link no seu celular para instalar o app.");
      }
    };

    const timeout = setTimeout(() => {
      fallback();
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (appDeeplink) {
      window.location.href = appDeeplink;
    }
  }, [appDeeplink]);

  return (
    <Styled.Container>
      <Styled.Text>Redirecionando para o aplicativo...</Styled.Text>
    </Styled.Container>
  );
};

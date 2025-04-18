import { useEffect } from "react";

import * as Styled from "./styles";

export const DeepLinking = () => {
  const params = new URLSearchParams(window.location.search);

  const appDeeplink = params.get("urlRedirect");

  useEffect(() => {
    const userAgent =
      navigator.userAgent || navigator.vendor || (window as any).opera;

    const iosAppStoreLink = "https://apps.apple.com/app/idSEU_ID_AQUI";
    const androidPlayStoreLink =
      "https://play.google.com/store/apps/details?id=com.meetpoint";

    const fallback = () => {
      if (/android/i.test(userAgent)) {
        window.location.href = androidPlayStoreLink;
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = iosAppStoreLink;
      } else {
        // Se estiver no desktop, exibe uma mensagem
        alert("Abra esse link no seu celular para instalar o app.");
      }
    };

    // Tenta abrir o app
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

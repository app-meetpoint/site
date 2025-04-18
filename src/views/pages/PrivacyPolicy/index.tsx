import * as Styled from "./styles";

export const PrivacyPolicy = () => {
  const contactEmail = "contato@meetpointapp.com.br";

  return (
    <Styled.Container>
      <Styled.Title>Política de Privacidade</Styled.Title>

      <Styled.Subtitle>Última atualização: 18 de abril de 2025</Styled.Subtitle>

      <Styled.Text>
        Vivemos num tempo em que cada gesto digital carrega rastros. No espaço
        entre o toque e o código, reside uma troca: você compartilha fragmentos
        de si, e nós, responsáveis por este aplicativo, acolhemos essas partes
        com cuidado e intenção.
      </Styled.Text>

      <Styled.Subtitle>O que recebemos</Styled.Subtitle>

      <Styled.Text>
        Ao habitar este espaço de eventos e encontros, algumas informações
        chegam até nós — como seu nome, seu ponto no mapa, e traços das suas
        escolhas dentro do app. Não buscamos conhecer você, mas tornar a
        experiência mais fluida, mais próxima, mais sua.
      </Styled.Text>

      <Styled.Subtitle>O que fazemos com isso</Styled.Subtitle>

      <Styled.Text>
        As informações coletadas não são mercadoria. Elas são bússola: nos
        ajudam a guiar sua navegação, sugerir caminhos, avisar sobre movimentos,
        proteger o espaço de interferências externas. Ajudam-nos a manter viva a
        promessa de um app que conecta o desejo de estar junto com a realidade
        de onde e quando.
      </Styled.Text>

      <Styled.Subtitle>Com quem partilhamos</Styled.Subtitle>

      <Styled.Text>
        O que recebemos de você permanece conosco — salvo quando a lei exige ou
        quando há necessidade de proteger você, nós, ou o próprio espaço. Alguns
        serviços que habitam essa engrenagem (como servidores ou contadores de
        passos digitais) podem ter acesso, mas sempre com discrição e propósito.
      </Styled.Text>

      <Styled.Subtitle>O tempo e o esquecimento</Styled.Subtitle>

      <Styled.Text>
        As informações vivem conosco enquanto forem úteis. Mas você tem o
        direito de lembrar e o direito de ser esquecido. Pode pedir acesso,
        correção ou apagamento. Basta dizer, e escutaremos: [{contactEmail}]
      </Styled.Text>

      <Styled.Subtitle>Palavras finais</Styled.Subtitle>

      <Styled.Text>
        Essa política pode mudar, como tudo muda. Mas se mudar, você saberá.
        Porque transparência não é só regra — é respeito.
      </Styled.Text>
      <Styled.Text>
        Este aplicativo não é um lugar para crianças, e, se por acaso o for, é
        preciso que os responsáveis estejam cientes e em acordo.
      </Styled.Text>
      <Styled.Text>
        Se você leu até aqui, saiba: levamos a sério o invisível. E zelamos por
        ele.
      </Styled.Text>
    </Styled.Container>
  );
};

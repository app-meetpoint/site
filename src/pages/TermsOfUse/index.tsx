import * as Styled from "./styles";

export const TermsOfUse = () => {
  const contactEmail = "contato@meetpointapp.com.br";

  return (
    <Styled.Container>
      <Styled.Title>Termos de Uso</Styled.Title>

      <Styled.Subtitle>Última atualização: 18 de abril de 2025</Styled.Subtitle>

      <Styled.Text>
        Ao tocar este aplicativo, você cruza um limiar. Não apenas aceita uma
        lista de condições — mas entra num acordo silencioso: o de caminhar com
        responsabilidade por esse território digital que criamos para encontros.
      </Styled.Text>

      <Styled.Subtitle>O que oferecemos</Styled.Subtitle>

      <Styled.Text>
        Este app é uma ponte: entre pessoas e possibilidades, entre ideias e
        calendários, entre a vontade de estar presente e o lugar onde isso
        acontece. Ele existe para facilitar o que é essencial — a conexão.
      </Styled.Text>

      <Styled.Subtitle>O que esperamos</Styled.Subtitle>

      <Styled.Text>
        Que você use esse espaço com respeito. Que compreenda que, do outro lado
        da tela, há outros como você — com desejos, limites e histórias. Que não
        use o app para ferir, enganar, ou propagar o caos. Que não manipule o
        sistema nem os encontros.
      </Styled.Text>

      <Styled.Subtitle>Sobre o conteúdo</Styled.Subtitle>

      <Styled.Text>
        Eventos criados, comentários, nomes e imagens carregam a sua marca. Você
        é responsável por aquilo que publica. Nós nos reservamos o direito de
        remover o que comprometer a integridade do espaço — sem precisar
        explicar muito, mas sempre com critério.
      </Styled.Text>

      <Styled.Subtitle>Interrupções e imperfeições</Styled.Subtitle>

      <Styled.Text>
        Apesar do cuidado, podem haver quedas, falhas ou mudanças. O app pode se
        transformar, pausar ou, um dia, encerrar. Não prometemos eternidade, mas
        sim boa intenção enquanto durar.
      </Styled.Text>

      <Styled.Subtitle>Limites</Styled.Subtitle>

      <Styled.Text>
        Não somos responsáveis por encontros que acontecem fora daqui, por
        promessas que não se cumprem, por interações que ganham vida além do
        digital. Facilitamos caminhos, mas não garantimos o trajeto.
      </Styled.Text>

      <Styled.Subtitle>Alterações</Styled.Subtitle>

      <Styled.Text>
        Esses termos podem mudar. Não para enganar, mas porque tudo muda. Se
        mudarem, você será avisado — porque o pacto só vale quando há
        consciência.
      </Styled.Text>

      <Styled.Subtitle>Fale conosco</Styled.Subtitle>

      <Styled.Text>
        Se algo soar estranho, pesado ou simplesmente confuso, fale com a gente:
        [{contactEmail}]
      </Styled.Text>

      <Styled.Text>
        Ao continuar aqui, você aceita mais que termos: aceita o convite de usar
        com cuidado aquilo que criamos com intenção.
      </Styled.Text>
    </Styled.Container>
  );
};

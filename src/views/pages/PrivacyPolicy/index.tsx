import * as Styled from "./styles";

export const PrivacyPolicy = () => {
  const contactEmail = "contato@meetpointapp.com.br";

  return (
    <Styled.Container>
      <Styled.Title>Política de Privacidade — MeetPoint</Styled.Title>

      <Styled.Subtitle>Última atualização: 6 de maio de 2025</Styled.Subtitle>

      <Styled.Text>
        O aplicativo <strong>MeetPoint</strong> respeita sua privacidade e está
        comprometido com a proteção de seus dados pessoais. Esta política
        explica quais informações coletamos, como usamos e compartilhamos, e
        quais são os seus direitos.
      </Styled.Text>

      <Styled.Subtitle>1. Dados Coletados</Styled.Subtitle>
      <Styled.Text>
        Coletamos os seguintes tipos de dados, de acordo com as permissões
        concedidas por você:
        {"\n"}• <strong>Informações de identificação pessoal</strong>: nome,
        e-mail, foto de perfil (caso você use login social como Google ou
        Apple).
        {"\n"}• <strong>Dados de localização aproximada</strong>: usados para
        mostrar eventos próximos.
        {"\n"}• <strong>Dados de uso</strong>: interações no app, tempo de uso e
        preferências.
        {"\n"}• <strong>Identificadores do dispositivo</strong>: como ID do
        dispositivo para melhorar a segurança e desempenho do app.
      </Styled.Text>

      <Styled.Subtitle>2. Finalidade do Uso dos Dados</Styled.Subtitle>
      <Styled.Text>
        Utilizamos os dados coletados para:
        {"\n"}• Exibir eventos próximos da sua localização.
        {"\n"}• Personalizar sua experiência no app.
        {"\n"}• Melhorar o desempenho, segurança e usabilidade da plataforma.
        {"\n"}• Enviar notificações sobre eventos, atualizações ou mudanças no
        serviço.
      </Styled.Text>

      <Styled.Subtitle>
        3. Compartilhamento de Dados com Terceiros
      </Styled.Subtitle>
      <Styled.Text>
        Podemos compartilhar dados com os seguintes serviços de terceiros,
        sempre com o objetivo de melhorar a experiência do usuário:
        {"\n"}• <strong>Mapas (Google Maps)</strong> – exibição de eventos em
        mapas.
        {"\n"}Não vendemos dados dos usuários a terceiros.
      </Styled.Text>

      <Styled.Subtitle>4. Armazenamento e Segurança</Styled.Subtitle>
      <Styled.Text>
        • Os dados são armazenados em servidores seguros e protegidos por
        criptografia.
        {"\n"}• A transmissão de dados é feita por meio de protocolos seguros
        (HTTPS).
        {"\n"}• Aplicamos medidas técnicas e organizacionais para evitar acesso
        não autorizado, alteração, divulgação ou destruição dos dados.
      </Styled.Text>

      <Styled.Subtitle>5. Direitos dos Usuários</Styled.Subtitle>
      <Styled.Text>
        Você pode, a qualquer momento:
        {"\n"}• Acessar seus dados.
        {"\n"}• Corrigir dados incorretos.
        {"\n"}• Solicitar a exclusão de sua conta e dados pessoais.
        {"\n"}• Revogar permissões de localização ou notificações.
        {"\n"}Para isso, entre em contato conosco pelo e-mail: {contactEmail}
      </Styled.Text>

      <Styled.Subtitle>6. Retenção de Dados</Styled.Subtitle>
      <Styled.Text>
        Mantemos seus dados enquanto sua conta estiver ativa. Após a exclusão da
        conta, os dados são apagados de forma segura em até 30 dias, exceto
        quando houver obrigação legal de retenção.
      </Styled.Text>

      <Styled.Subtitle>7. Alterações nesta Política</Styled.Subtitle>
      <Styled.Text>
        Esta política poderá ser atualizada. Em caso de alterações
        significativas, notificaremos você pelo app ou e-mail, se aplicável.
      </Styled.Text>

      <Styled.Subtitle>8. Contato</Styled.Subtitle>
      <Styled.Text>
        Em caso de dúvidas, sugestões ou solicitações relacionadas à sua
        privacidade, entre em contato:
        {"\n"}• <strong>E-mail:</strong> {contactEmail}
        {"\n"}• <strong>Responsável:</strong> Equipe MeetPoint
      </Styled.Text>
    </Styled.Container>
  );
};

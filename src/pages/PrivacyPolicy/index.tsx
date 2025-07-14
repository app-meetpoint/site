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
        quais são os seus direitos. O MeetPoint é uma plataforma social para conectar pessoas com interesses em eventos locais, <strong>sem foco em relacionamentos românticos ou serviços de namoro</strong>, e não oferece serviços médicos, de saúde ou financeiros.
      </Styled.Text>

      <Styled.Subtitle>1. Dados Coletados</Styled.Subtitle>
      <Styled.Text>
        Coletamos os seguintes tipos de dados, de acordo com as permissões
        concedidas por você:
        <br />• <strong>Informações de identificação pessoal</strong>: nome,
        e-mail, foto de perfil (caso você use login social como Google ou
        Apple).
        <br />• <strong>Dados de localização aproximada</strong>: usados exclusivamente para mostrar eventos próximos em sua área. A localização não é compartilhada publicamente com outros usuários.
        <br />• <strong>Dados de uso</strong>: interações no app, tempo de uso e
        preferências.
        <br />• <strong>Identificadores do dispositivo</strong>: como ID do
        dispositivo para melhorar a segurança e desempenho do app.
      </Styled.Text>

      <Styled.Subtitle>2. Finalidade do Uso dos Dados</Styled.Subtitle>
      <Styled.Text>
        Utilizamos os dados coletados para:
        <br />• Exibir eventos próximos da sua localização (sem compartilhar sua posição exata com outros usuários).
        <br />• Personalizar sua experiência no app.
        <br />• Melhorar o desempenho, segurança e usabilidade da plataforma.
        <br />• Enviar notificações sobre eventos, atualizações ou mudanças no
        serviço.
        <br /><br />
        <strong>Não utilizamos dados para:</strong>
        <br />• Serviços de namoro ou relacionamentos românticos
        <br />• Qualquer finalidade médica, de saúde ou financeira
      </Styled.Text>

      <Styled.Subtitle>3. Compartilhamento de Dados com Terceiros</Styled.Subtitle>
      <Styled.Text>
        Podemos compartilhar dados apenas com os seguintes serviços de terceiros,
        sempre com o objetivo de melhorar a experiência do usuário:
        <br />• <strong>Mapas (Google Maps)</strong> – exibição de eventos em
        mapas.
        <br />
        <strong>Não vendemos, alugamos ou compartilhamos dados pessoais</strong> com terceiros para marketing ou outros fins não autorizados.
      </Styled.Text>

      <Styled.Subtitle>4. Armazenamento e Segurança</Styled.Subtitle>
      <Styled.Text>
        • Os dados são armazenados em servidores seguros na região da América do Sul, protegidos por criptografia.
        <br />• A transmissão de dados é feita por meio de protocolos seguros
        (HTTPS).
        <br />• Aplicamos medidas técnicas e organizacionais para evitar acesso
        não autorizado, alteração, divulgação ou destruição dos dados.
      </Styled.Text>

      <Styled.Subtitle>5. Direitos dos Usuários</Styled.Subtitle>
      <Styled.Text>
        Você pode, a qualquer momento:
        <br />• Acessar seus dados.
        <br />• Corrigir dados incorretos.
        <br />• Solicitar a exclusão de sua conta e dados pessoais.
        <br />• Revogar permissões de localização ou notificações.
        <br />
        Para isso, entre em contato conosco pelo e-mail: {contactEmail}
        <br /><br />
        <strong>Observação:</strong> A revogação da permissão de localização pode limitar a funcionalidade de mostrar eventos próximos.
      </Styled.Text>

      <Styled.Subtitle>6. Retenção de Dados</Styled.Subtitle>
      <Styled.Text>
        Mantemos seus dados enquanto sua conta estiver ativa. Após a exclusão da
        conta, os dados são apagados permanentemente dentro de 30 dias, exceto
        quando houver obrigação legal de retenção. Dados anonimizados podem ser mantidos para estatísticas e melhorias no serviço.
      </Styled.Text>

      <Styled.Subtitle>7. Alterações nesta Política</Styled.Subtitle>
      <Styled.Text>
        Esta política poderá ser atualizada. Em caso de alterações
        significativas, notificaremos você pelo app ou e-mail com 30 dias de antecedência. O uso continuado do app após as alterações constitui aceitação da nova política.
      </Styled.Text>

      <Styled.Subtitle>8. Contato</Styled.Subtitle>
      <Styled.Text>
        Em caso de dúvidas, sugestões ou solicitações relacionadas à sua
        privacidade, entre em contato:
        <br />• <strong>E-mail:</strong> {contactEmail}
        <br />• <strong>Responsável:</strong> Equipe MeetPoint
        <br />• <strong>Site:</strong> https://meetpointapp.com.br/privacidade
      </Styled.Text>
    </Styled.Container>
  );
};

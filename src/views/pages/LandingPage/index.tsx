import * as Styled from "./styles";

export const LandingPage = () => {
  const menuItems = [
    { name: "Início" },
    { name: "Como funciona" },
    { name: "Atualizações" },
    { name: "Contatos" },
  ];

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Items>
          {menuItems.map((item, index) => (
            <Styled.Item key={index}>
              <Styled.ItemText>{item.name}</Styled.ItemText>
            </Styled.Item>
          ))}
        </Styled.Items>
      </Styled.Header>
    </Styled.Container>
  );
};

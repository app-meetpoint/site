import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const Item = styled.div`
  display: flex;
  padding: 10px;
  cursor: pointer;
`;

export const ItemText = styled.div`
  font-size: 16px;
  color: #333;
`;

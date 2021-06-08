import styled from "styled-components";

export const CoinDiv = styled.div`
  background-color: ${(props) => props.theme.coinArea};
  margin-top: 100px;
  display: flex;
  width: 860px;
  height: 48px;
  align-items: center;
  border-bottom: 1px solid black;
  justify-content: space-between;
  color: ${(props) => props.theme.coinColor};
  margin-bottom: 50px;

  @media (max-width: 500px) {
    width: 375px;
    position: relative;
    top: 120px;
  }

  @media (min-width: 768px) {
    width: 600px;
    position: relative;
    top: 120px;
    padding: 0;
  }
  @media (min-width: 992px) {
    width: 860px;
    position: static;
  }
`;

export const Price = styled.div`
  color: ${(props) => props.color};
`;

import styled from "styled-components";

export const CoinDiv = styled.div`
  background-color: ${(props) => props.theme.coinArea};
  margin-top: 50px;
  display: flex;
  width: 860px;
  height: 48px;
  align-items: center;
  border-bottom: 1px solid black;
  justify-content: space-between;
  color: ${(props) => props.theme.coinColor};
  margin-bottom: 50px;
  overflow: hidden;

  p {
    font-weight: 500;
  }

  &:hover {
    background-color: ${(props) =>
      props.theme.coinArea === "#fff" ? "#17171a" : "#fff"};
    color: ${(props) =>
      props.theme.coinColor === "black" ? "white" : "black"};
  }

  @media (max-width: 500px) {
    width: 370px;
    position: relative;
    top: 120px;
    margin-top: 75px;
  }

  @media (min-width: 768px) {
    width: 600px;
    position: relative;
    top: 120px;
    padding: 0;
    margin-top: 100px;
  }
  @media (min-width: 992px) {
    width: 860px;
    position: static;
    margin-top: 50px;
  }
`;

export const Price = styled.div`
  color: ${(props) => props.color};
`;

export const Tag = styled.p`
  display: block;

  @media (max-width: 500px) {
    display: none;
  }
`;

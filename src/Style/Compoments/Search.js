import styled from "styled-components";

export const SearchBar = styled.input`
  margin-top: 4rem;
  width: 860px;
  height: 48px;
  background-color: ${(props) => props.theme.searchInput};
  color: ${(props) => props.theme.searchColor};
  outline: none;
  border-radius: 0.5rem;
  padding-left: 10px;

  @media (max-width: 500px) {
    position: absolute;
    left: 20px;
    top: 70px;
    width: 370px;
  }

  @media (min-width: 768px) {
    position: absolute;
    left: 90px;
    top: 70px;
    width: 600px;
  }

  @media (min-width: 992px) {
    width: 860px;
    position: static;
  }
`;

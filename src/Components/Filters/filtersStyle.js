import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-basis: 20%;
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
`;
export const Filtros = styled.input`
  font-size: 12px;
  padding: 0.25rem;
  border-radius: 5px;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Labels = styled.label`
  font-size: 15px;
`;

export const Titulo = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

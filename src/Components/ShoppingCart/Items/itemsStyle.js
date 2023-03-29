import styled from "styled-components";

export const ItemsContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 0.25rem;
  margin: 0.25rem;
`;

export const CarrinhoMapContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  margin-bottom: 0.25rem;
`;

export const CarrinhoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid;
  padding: 0.25rem;
  margin-bottom: 0.5rem;
  border-radius: 10px;
`;

export const CartCardImg = styled.img`
  width: 40px;
  height: 40px;
  border: 1px solid;
  border-radius: 5px;
`;

export const DescCarrinho = styled.div`
  font-size: 10px;
  margin: 0;
  width: 100%;
  padding-left: 0.1rem;
`;

export const Valor = styled.p`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin: 0;
  padding: 0;
`;

export const BotãoLimpar = styled.button`
  display: flex;
  font-size: 12px;
  justify-content: center;
  align-self: center;
  width: 100px;
  padding: 0.25rem;
  border-radius: 3px;
  cursor: pointer;
`;

export const BotãoRemover = styled.button`
  display: flex;
  font-size: 10px;
  justify-content: center;
  width: 80px;
  border-radius: 3px;
  cursor: pointer;
`;

export const BotãoContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
`;

export const ValorTotalContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  font-size: 16px;
  flex-direction: row;
  justify-content: center;
`;
export const DescQuant = styled.div`
  display: flex;
  width: 15%;
  font-size: 10px;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  justify-content: center;
`;

export const UINUmber = styled.p`
  display: flex;
  justify-content: center;
  font-size: 14px;
  margin: 0;
  padding: 0;
`;

export const DescNome = styled.p`
  display: flex;
  align-items: flex-start;
  font-size: 12px;
  margin: 0;
  padding: 0;
  padding-left: 0.25rem;
`;

export const DescPreco = styled.p`
  display: flex;
  align-items: center;
  font-size: 10px;
  margin: 0;
  padding: 0;
  padding-left: 0.25rem;
`;

export const DivPreco = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0.2rem;
`;

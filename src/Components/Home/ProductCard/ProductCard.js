import React, { useState } from "react";
import UINUmber from "../../UINumber";

import {
  CardImg,
  CardsContainer,
  DescProd,
  Botão,
  Quant,
  Preço,
  DivPreco,
} from "./productCardStyle";

const ProductCard = ({ card, cartState, setCartState }) => {
  const [stateQuant, setStateQuant] = useState(1);

  const OCStateQuant = (e) => {
    setStateQuant(e.target.value);
  };

  const addCart = () => {
    let checaId = card.id;
    let temNoCarrinho = false;
    let checaCarrinho = [...cartState];
    let addItem = [];

    if (checaCarrinho.length > 0) {
      for (let itemNoCarrinho of checaCarrinho) {
        if (checaId === itemNoCarrinho.id) {
          temNoCarrinho = true;
          break;
        }

        if (checaId !== itemNoCarrinho.id) {
          temNoCarrinho = false;
        }
      }

      if (temNoCarrinho === false && stateQuant > 0) {
        card.quantity = Number(stateQuant);
        addItem = [...cartState, card];
        setCartState(addItem);
        console.log(addItem);
      } else {
        card.quantity += Number(stateQuant);
        addItem = [...cartState];
        setCartState(addItem);
        console.log(addItem);
      }
    } else if (stateQuant > 0) {
      card.quantity = Number(stateQuant);
      addItem = [...cartState, card];
      console.log(addItem);
      setCartState(addItem);
    }
  };

  return (
    <CardsContainer>
      <CardImg src={card.imageUrl} alt="aaaaa" />

      <DescProd>{card.name}</DescProd>

      <DivPreco>
        R
        <Preço>
          <UINUmber format={"$0,0.00"}>{card.value}</UINUmber>
        </Preço>
      </DivPreco>

      <Quant
        type="number"
        min={1}
        placeholder="Quantidade"
        value={stateQuant}
        onChange={OCStateQuant}
      />

      <Botão onClick={addCart}>Adicionar</Botão>
    </CardsContainer>
  );
};

export default ProductCard;

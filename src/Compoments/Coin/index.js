import React from "react";
import { CoinDiv, Price } from "../../Style/Compoments/CoinItem";
function CoinItem(props) {
  return (
    <>
      <CoinDiv>
        <img src={props.img} style={{ width: "32px" }} alt="coin" />
        <p>{props.name}</p>
        <p>{props.symbol.toUpperCase()}</p>
        {props.pricechange > 0 ? (
          <Price color={"green"}>{props.pricechange.toFixed(2)}</Price>
        ) : (
          <Price color={"red"}>{props.pricechange.toFixed(2)}</Price>
        )}
        <p>{props.market_cap}</p>
      </CoinDiv>
    </>
  );
}

export default CoinItem;

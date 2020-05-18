import React from "react";

export const InputPrice = ({ priceData }) => {
  const { money, setMoney, onChangePrice } = priceData;
  const currency = (moneyValue) => {
    if (moneyValue.length > 0) {
      setMoney(parseFloat(moneyValue).toFixed(2).toString());
    }
  };

  return (
    <section className="box__user--input">
      <input
        type="number"
        id="value-pay"
        placeholder="6.00"
        step=".01"
        onChange={(e) => onChangePrice(e.target.value)}
        value={money}
        onBlur={(e) => currency(e.target.value)}
      />
    </section>
  );
};

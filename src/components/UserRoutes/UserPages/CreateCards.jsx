import React from "react";
import arrowSelect from "../../../static/arrowSelect.svg";
import { ButtonPay } from "../../Buttons";
import { PayClientContext } from "../UserContext";

export const UserCreateCard = () => {
  const { userState, dispatch } = React.useContext(PayClientContext);
  const nameCard = useFormInput("");
  const selectBank = useFormInput("");
  const numberCard = useFormInput("");
  const validCard = useFormInput("");
  const cvvCard = useFormInput("");
  const cepUser = useFormInput("");

  const submitUserCard = e => {
    e.preventDefault();
    const creditCard = {
      flagBank: selectBank.value,
      nameCc: nameCard.value,
      numberCc: numberCard.value,
      validCc: validCard.value,
      cvvCc: cvvCard.value,
      cepUser: cepUser.value,
      statusSelected: false
    };
    dispatch({ type: "ADD_CREDIT_CARD", payload: creditCard });
  };

  React.useEffect(() => {
    if (userState.cards.length >= 1) {
      localStorage.setItem(
        "creditcards-client",
        JSON.stringify(userState.cards)
      );
    }
  }, [userState]);

  return (
    <form className="form__component" onSubmit={submitUserCard}>
      <div class="group">
        <select className="card__flag" {...selectBank}>
          <option disabled selected>
            Selecione a bandeira do cartão
          </option>
          <option value="master-card">Master Card</option>
          <option value="visa">Visa</option>
        </select>
        <img src={arrowSelect} className="group__arrow" />
      </div>
      <div class="group">
        <input type="text" className="input__box" {...nameCard} required />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Nome escrito no cartão</label>
      </div>

      <div class="group">
        <input type="text" className="input__box" {...numberCard} required />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Numero do cartão</label>
      </div>

      <div class="group">
        <input type="text" className="input__box" {...validCard} required />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Validade (MM/AAAA)</label>
      </div>

      <div class="group">
        <input type="text" className="input__box" {...cvvCard} required />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Codigo de segurança</label>
      </div>

      <div class="group">
        <input type="text" className="input__box" {...cepUser} required />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>CEP do endereço da fatura</label>
      </div>

      <ButtonPay>Cadastrar cartão</ButtonPay>
    </form>
  );
};

const useFormInput = initialState => {
  const [value, setInputValue] = React.useState(initialState);
  const onChange = e => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return { onChange, value };
};

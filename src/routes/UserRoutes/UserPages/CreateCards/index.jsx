import React from "react";
import arrowSelect from "static/arrowSelect.svg";
import { ButtonPay } from "components/Buttons";
import { PayClientContext } from "../UserContext";
import { useSaveCard, useFormInput } from "../utilHooks";
import Formset from "components/Formset";

export const UserCreateCard = (props) => {
  const { userState, dispatch } = React.useContext(PayClientContext);
  const saveCardLocal = useSaveCard(userState.cards);
  const nameCard = useFormInput("");
  const selectBank = useFormInput("");
  const numberCard = useFormInput("");
  const validCard = useFormInput("");
  const cvvCard = useFormInput("");
  const cepUser = useFormInput("");

  const submitUserCard = (e) => {
    e.preventDefault();
    const creditCard = {
      flagBank: selectBank.value,
      nameCc: nameCard.value,
      numberCc: numberCard.value,
      validCc: validCard.value,
      cvvCc: cvvCard.value,
      cepUser: cepUser.value,
      statusSelected: false,
    };
    dispatch({ type: "ADD_CREDIT_CARD", payload: creditCard });
  };

  React.useEffect(() => {
    saveCardLocal();
  }, [saveCardLocal]);

  return (
    <form className="form__component">
      <div class="group">
        <select className="card__flag" {...selectBank}>
          <option defaultValue>Selecione a bandeira do cartão</option>
          <option value="master-card">Master Card</option>
          <option value="visa">Visa</option>
        </select>
        <img
          src={arrowSelect}
          className="group__arrow"
          alt="seta de selecionar cartão"
        />
      </div>

      <Formset
        itemData={{ ...numberCard }}
        type={`number`}
        labelForm={`Numero do cartão`}
      />
      <Formset
        itemData={{ ...nameCard }}
        labelForm={`Seu nome escrito no cartão`}
      />
      <Formset itemData={{ ...validCard }} labelForm={`Validade (MM/AAAA)`} />

      <Formset
        itemData={{ ...cvvCard }}
        type={`number`}
        labelForm={`Codigo de segurança`}
      />
      <Formset
        itemData={{ ...cepUser }}
        type={`number`}
        labelForm={`CEP do endereço da fatura`}
      />

      <ButtonPay click={submitUserCard}>Cadastrar cartão</ButtonPay>
    </form>
  );
};

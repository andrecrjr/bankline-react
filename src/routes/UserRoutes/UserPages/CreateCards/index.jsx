import React from "react";
import arrowSelect from "static/arrowSelect.svg";
import { ButtonPay } from "components/Buttons";
import { PayClientContext } from "../UserContext";
import { useSaveCard } from "../utilHooks";
import Formset from "components/Formset";
import { validateInfoCard, validateCep } from "./validator";
import { useForm } from "react-hook-form";

export const UserCreateCard = (props) => {
  const { userState, dispatch } = React.useContext(PayClientContext);
  const { handleSubmit, register, errors } = useForm();

  const saveCardLocal = useSaveCard(userState.cards);
  const selectBank = useForm();

  const submitUserCard = (data) => {
    console.log(data);
    const createdCard = {
      ...data,
      statusSelected: false,
    };

    if (Object.keys(errors).length === 0) {
      dispatch({ type: "ADD_CREDIT_CARD", payload: createdCard });
      alert("Cartão cadastrado com sucesso!");
    }
  };

  React.useEffect(() => {
    console.log(errors);
    saveCardLocal();
  }, [saveCardLocal, errors]);

  return (
    <form className="form__component" onSubmit={handleSubmit(submitUserCard)}>
      <div class="group">
        <select className="card__flag" name="selectBank" ref={register}>
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
        type={`number`}
        nameInput={`numberCard`}
        labelForm={`Numero do cartão`}
        requiredInput={true}
        reference={register({
          validate: (value) =>
            validateInfoCard(value) === true ||
            "O número desse cartão não existe",
        })}
        errors={errors}
      />
      <Formset
        nameInput={`nameCard`}
        labelForm={`Seu nome escrito no cartão`}
        requiredInput={true}
        reference={register}
        errors={errors}
      />
      <Formset
        nameInput={`validCard`}
        labelForm={`Validade (MM/AAAA)`}
        requiredInput={true}
        errors={errors}
        reference={register({
          pattern: {
            value: /\d{2}\/\d{4}/,
            message:
              "A data de validade do cartão está com formato errado (MM/AAAA)",
          },
        })}
      />

      <Formset
        type={`number`}
        nameInput={`cvvCard`}
        labelForm={`Codigo de segurança`}
        requiredInput={true}
        errors={errors}
        reference={register({
          pattern: {
            value: /\d{3}/,
            message: "O CVV tem três digitos.",
          },
        })}
      />
      <Formset
        type={`number`}
        nameInput={`cepUser`}
        labelForm={`CEP do endereço da fatura`}
        requiredInput={true}
        reference={register({
          validate: (value) =>
            validateCep(value) === true || "O número desse CEP não existe",
        })}
        errors={errors}
      />

      <ButtonPay>Cadastrar cartão</ButtonPay>
    </form>
  );
};

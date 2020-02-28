import React from "react";
import arrowSelect from "../../static/arrowSelect.svg";
import { ButtonPay } from "../Buttons";

export const UserCards = () => {
  return (
    <form className="form__component">
      <div class="group">
        <select className="card__flag">
          <option disabled selected>
            Selecione a bandeira do cartão
          </option>
          <option value="master-card">Master Card</option>
          <option value="visa">Visa</option>
        </select>
        <img src={arrowSelect} className="group__arrow" />
      </div>
      <div class="group">
        <input type="text" className="input__box" required />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Nome escrito no cartão</label>
      </div>

      <div class="group">
        <input type="text" className="input__box" required />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Numero do cartão</label>
      </div>

      <div class="group">
        <input type="text" className="input__box" required />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Validade (MM/AAAA)</label>
      </div>

      <div class="group">
        <input type="text" className="input__box" required />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Codigo de segurança</label>
      </div>

      <div class="group">
        <input type="text" className="input__box" required />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>CEP do endereço da fatura</label>
      </div>

      <ButtonPay>Cadastrar cartão</ButtonPay>
    </form>
  );
};

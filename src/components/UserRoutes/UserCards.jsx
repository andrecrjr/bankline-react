import React from "react";

export const UserCards = () => {
  return (
    <form className="form__component">
      <div class="group">
        <select>
          <option>Master Card</option>
          <option value="">Visa</option>
        </select>
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
    </form>
  );
};

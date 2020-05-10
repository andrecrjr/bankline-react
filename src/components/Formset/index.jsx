import React from "react";

export default function Formset({ itemData, labelForm, type = "text" }) {
  return (
    <div class="group">
      <input type={type} className="input__box" {...itemData} required />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{labelForm}</label>
    </div>
  );
}

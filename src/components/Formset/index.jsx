import React from "react";

export default function Formset({ itemData, labelForm }) {
  console.log(itemData);
  return (
    <div class="group">
      <input type="text" className="input__box" {...itemData} required />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{labelForm}</label>
    </div>
  );
}

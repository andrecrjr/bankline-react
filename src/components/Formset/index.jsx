import React from "react";

export default function Formset({
  itemData,
  labelForm,
  type = "text",
  requiredInput = false,
}) {
  return (
    <div class="group">
      <input
        type={type}
        className="input__box"
        {...itemData}
        required={requiredInput}
      />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{labelForm}</label>
    </div>
  );
}

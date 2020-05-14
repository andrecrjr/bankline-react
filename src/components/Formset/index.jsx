import React from "react";

export default function Formset({
  labelForm,
  type = "text",
  requiredInput = false,
  reference,
  nameInput,
  errors,
}) {
  return (
    <div class="group">
      <span class={`input__error ${errors[nameInput] ? `active` : null}`}>
        {errors[nameInput] ? errors[nameInput].message : null}
      </span>
      <input
        type={type}
        className="input__box"
        required={requiredInput}
        ref={reference}
        name={nameInput}
      />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{labelForm}</label>
    </div>
  );
}

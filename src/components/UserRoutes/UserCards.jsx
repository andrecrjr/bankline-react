import React from "react";

export const UserCards = () => {
  return (
    <form>
      <input type="text" placeholder="Selecione a bandeira" />
      <input type="text" placeholder="Nome escrito no cartão" />
      <input type="text" placeholder="Numero do cartão" />
      <input type="text" placeholder="Validade (MM/AA)" />
      <input type="text" placeholder="Codigo de segurança" />
      <input type="text" placeholder="CEP endereço da segurança" />
    </form>
  );
};

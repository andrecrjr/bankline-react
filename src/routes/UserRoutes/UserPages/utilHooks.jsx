import React from "react";

/* Hooks to save card in the local storage */
export const useSaveCard = (initialState = {}) => {
  const callback = React.useCallback(() => {
    if (initialState.length >= 1) {
      localStorage.setItem("creditcards-client", JSON.stringify(initialState));
    }
  }, [initialState]);
  return callback;
};

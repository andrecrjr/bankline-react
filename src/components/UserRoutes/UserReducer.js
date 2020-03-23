export const initialState = {
  cards: JSON.parse(localStorage.getItem("creditcards-client")) || []
};

export const ClientReducer = (initialState, action) => {
  switch (action.type) {
    case "ADD_CREDIT_CARD":
      return {
        ...initialState,
        cards: [...initialState.cards, action.payload]
      };
    case "ACTIVATE_CARD":
      return {
        ...initialState,
        ...initialState.cards.forEach((card, index) => {
          index === action.id
            ? (card.statusSelected = true)
            : (card.statusSelected = false);
        })
      };
    default:
      return initialState;
  }
};

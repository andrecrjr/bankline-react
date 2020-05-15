export const initialState = {
  cards: JSON.parse(localStorage.getItem("creditcards-client")) || [],
  transactions: JSON.parse(localStorage.getItem("transactions-client")) || [],
};

export const ClientReducer = (initialState, action) => {
  switch (action.type) {
    case "ADD_CREDIT_CARD":
      return {
        ...initialState,
        cards: [...initialState.cards, action.payload],
      };
    case "ACTIVATE_CARD":
      return {
        ...initialState,
        ...initialState.cards.forEach((card, index) => {
          index === action.id
            ? (card.statusSelected = true)
            : (card.statusSelected = false);
        }),
      };
    default:
      return initialState;
  }
};

export const TransactionReducer = (initialState, action) => {
  switch (action.type) {
    case "PAY_TRANSACTION":
      return {
        ...initialState,
        transactions: [...initialState.transactions, action.payload],
      };
    default:
      return initialState;
  }
};

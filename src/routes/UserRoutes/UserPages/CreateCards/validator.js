import { isValidCEP } from "@brazilian-utils/brazilian-utils";

export function valid_credit_card(value) {
  // accept only digits, dashes or spaces
  if (/[^0-9-\s]+/.test(value)) return false;

  // The Luhn Algorithm. It's so pretty.
  var nCheck = 0,
    nDigit = 0,
    bEven = false;
  value = value.replace(/\D/g, "");

  for (var n = value.length - 1; n >= 0; n--) {
    var cDigit = value.charAt(n),
      nDigit = parseInt(cDigit, 10);

    if (bEven) {
      if ((nDigit *= 2) > 9) nDigit -= 9;
    }

    nCheck += nDigit;
    bEven = !bEven;
  }

  return nCheck % 10 == 0;
}

export const validateInfoCard = (cardData) => {
  let validation;
  valid_credit_card(cardData) || cardData === "0000000000000000"
    ? (validation = true)
    : (validation = false);

  return validation;
};

export const validateCep = (data) => {
  let cepValidation;
  isValidCEP(data) || data === "00000000"
    ? (cepValidation = true)
    : (cepValidation = false);

  return cepValidation;
};

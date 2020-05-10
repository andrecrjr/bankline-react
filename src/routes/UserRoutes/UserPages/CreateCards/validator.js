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

export const ValidateInfoCard = (cardData) => {
  const validation = {};
  if (cardData.numberCc) {
    valid_credit_card(cardData.numberCc) ||
    cardData.numberCc === parseInt("0000000000000000")
      ? (validation["numberCc"] = true)
      : alert("Numéro de cartão invalido");
  }
  if (cardData.cvvCard) {
    /\d{3}/.test(cardData.cvvCard)
      ? (validation["cvvCard"] = true)
      : alert("CVV para o cartão inválido");
  }

  if (cardData.validCard) {
    verifyData(cardData.validCard)
      ? (validation["cvvCard"] = true)
      : alert("Problema na validade do cartão");
  }

  if (cardData.cepUser) {
    isValidCEP(cardData.cepUser)
      ? (validation["cepUser"] = true)
      : alert("CEP de usuário inválido");
  }
  return validation;
};

function verifyData(validCard) {
  if (/\d{2}\/\d{4}/.test(validCard)) {
    let month = validCard.match(/^\d{2}/)[0];
    let year = validCard.match(/\d{4}$/);

    if (month < 12 && month > 0) {
      return true;
    }
    if (parseInt(year) > new Date().getFullYear()) {
      return true;
    }
  }
  return false;
}

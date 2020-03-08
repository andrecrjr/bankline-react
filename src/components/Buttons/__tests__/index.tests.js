import React from "react";
import { shallow, mount } from "enzyme";
import { ButtonPay, BackButton } from "../index";
import toJson from "enzyme-to-json";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
    location: { pathname: "/pay" }
  })
}));

describe("It should mount buttons", () => {
  it("It button Pay renders", () => {
    const buttonPay = shallow(<ButtonPay link={"/"}>Pagar</ButtonPay>);

    expect(toJson(buttonPay)).toMatchSnapshot();
  });
  it("It renders back button", () => {
    const buttonPay = shallow(<BackButton>Voltar</BackButton>);
    expect(toJson(buttonPay)).toMatchSnapshot();
  });
  it("It button Pay renders with width and margin", () => {
    const clickPush = jest.fn();
    const buttonPay = shallow(
      <ButtonPay width={"100px"} margin={"50px"}>
        Pagar
      </ButtonPay>
    );
    buttonPay.find("button").simulate("click");
    expect(clickPush).to.equal(1);
  });
});

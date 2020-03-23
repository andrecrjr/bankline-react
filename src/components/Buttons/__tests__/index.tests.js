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
  it("It should render button pay to index", () => {
    const buttonPay = shallow(<ButtonPay link={"/"}>Pagar</ButtonPay>);

    expect(toJson(buttonPay)).toMatchSnapshot();
  });
  it("It should render button pay width width and height", () => {
    const buttonPay = shallow(
      <ButtonPay width={"200"} height={"200"}>
        Pagar
      </ButtonPay>
    );

    expect(toJson(buttonPay)).toMatchSnapshot();
  });
  it("It renders back button", () => {
    const buttonPay = shallow(<BackButton />);
    expect(toJson(buttonPay)).toMatchSnapshot();
  });
});

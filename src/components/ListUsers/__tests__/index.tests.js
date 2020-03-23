import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { fetch } from "../../../__mocks__/requests.mock";
import { UserBox } from "../UserBox";

describe("it should list all users", () => {
  it("it calls fetch user list", async () => {
    const user = await fetch("/user");
    expect(user).toStrictEqual({
      id: 1001,
      name: "Eduardo Santos",
      img: "https://randomuser.me/api/portraits/men/9.jpg",
      username: "@eduardo.santos"
    });
  });
  it("It mount userlist box", async () => {
    const users = await fetch("/users");
    const Userbox = shallow(<UserBox />);
    const allUserBoxs = users.map(user => Userbox.setState({ user }));
    expect(allUserBoxs).toMatchSnapshot();
  });
});

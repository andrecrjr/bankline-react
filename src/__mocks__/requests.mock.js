import { userList } from "./userList.mock";
export const fetch = jest.fn(url => {
  if (url === "/user") {
    return Promise.resolve({
      id: 1001,
      name: "Eduardo Santos",
      img: "https://randomuser.me/api/portraits/men/9.jpg",
      username: "@eduardo.santos"
    });
  }
  if (url === "/users") {
    return userList;
  }
  return { status: "Error 404" };
});

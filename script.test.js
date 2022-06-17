const googleSearch = require("./script");

const dbMock = ["dog.com", "cutedogs.com", "fish.com", "monsters.com"];

it("some test", () => {
  expect(googleSearch(dbMock, "test")).toEqual([]);
  expect(googleSearch(dbMock, "dog")).toEqual(["dog.com", "cutedogs.com"]);
});

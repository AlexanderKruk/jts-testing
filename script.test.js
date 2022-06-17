const googleSearch = require("./script");

const dbMock = ["dog.com", "cutedogs.com", "fish.com", "monsters.com"];

describe("Google search", () => {
  it("general", () => {
    expect(googleSearch(dbMock, "test")).toEqual([]);
    expect(googleSearch(dbMock, "dog")).toEqual(["dog.com", "cutedogs.com"]);
  });

  it("test on null and undefinied", () => {
    expect(googleSearch(dbMock, null)).toEqual([]);
    expect(googleSearch(dbMock, undefined)).toEqual([]);
  });

  it("test on null and undefinied", () => {
    expect(googleSearch(dbMock, null)).toEqual([]);
    expect(googleSearch(dbMock, undefined)).toEqual([]);
  });

  it("maximum three items", () => {
    expect(googleSearch(dbMock, "com").length).toEqual(3);
  });
});

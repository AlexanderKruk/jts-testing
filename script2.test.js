const fetch = require("node-fetch");
const swapi = require("./script2");

it("call swapi to get people", () => {
  expect.assertions(1);
  return swapi
    .getPeopleAsync(fetch)
    .then((data) => expect(data.count).toEqual(87));
});

it("call swapi to get people with Promise", () => {
  expect.assertions(2);
  return swapi.getPeoplePromise(fetch).then((data) => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});

it("call mock to get people", () => {
  const swapiMock = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () => Promise.resolve({ count: 87, results: [0, 1, 2, 3, 4, 5] }),
    })
  );

  expect.assertions(4);
  return swapi.getPeoplePromise(swapiMock).then((data) => {
    expect(swapiMock.mock.calls.length).toBe(1);
    expect(swapiMock).toBeCalledWith("http://swapi.py4e.com/api/people");
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});

import { screen, render } from "@testing-library/react";
import { API } from "./Home";

import { rest } from "msw";
import { setupServer } from "msw/node";
import ForecastDays from "./ForecastDays";

const weatherResponse = rest.get(API, (req, res, ctx) => {
  return res(
    ctx.json([
      {
        data: {
          city: {
            country: "GB",
          },
        },
      },
    ])
  );
});

const handlers = [weatherResponse];

const server = new setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("it should have the correct weather description", async () => {
  render(<ForecastDays />);
  const weatherItem = await screen.findByText("Weather forecast for");
  expect(weatherItem).toBeVisible();
});

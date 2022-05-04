import { screen, render } from "@testing-library/react";
import CurrentHome, { ApiTwo } from "./CurrentHome";

import { rest } from "msw";
import { setupServer } from "msw/node";

const weatherResponse = rest.get(ApiTwo, (req, res, ctx) => {
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
  render(<CurrentHome />);
  const weatherItem = await screen.findByText("Weather Description:");
  expect(weatherItem).toBeVisible();
});

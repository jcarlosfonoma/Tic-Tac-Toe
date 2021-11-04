import { render, cleanup, screen } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

it("should take a snapshot", () => {
  const { asFragment } = render(<App />);

  expect(asFragment(<App />)).toMatchSnapshot();
});
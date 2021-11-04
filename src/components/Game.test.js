import { cleanup, render } from "@testing-library/react";
import Game from "./Game";

describe("Game component", () => {
  beforeEach(cleanup);
  const squares = Array(9).fill(null);

  it("Game should take a snapshot", () => {
    const { asFragment } = render(<Game squares={squares} />);
    expect(asFragment(<Game />)).toMatchSnapshot();
  });

  it("Checks if initial status is equal to Go to game start", () => {
    const { getByTestId } = render(
      <Game squares={squares} status="Go to game start" />
    );
    expect(getByTestId("status-div")).toHaveTextContent("Go to game start");
  });
});

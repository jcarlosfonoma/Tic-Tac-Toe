import { cleanup, render } from "@testing-library/react";
import Board from "./Board";

describe("Board component", () => {
  beforeEach(cleanup);

  it("Board should take a snapshot", () => {
    const squares = [null, null, null];
    const { asFragment } = render(<Board squares={squares} />);
    expect(asFragment(<Board />)).toMatchSnapshot();
  });
});

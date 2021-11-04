import { cleanup, render } from "@testing-library/react";
import ScoreBoard from "./ScoreBoard";

describe("Square component", () => {
  afterEach(cleanup);

  it("Square should take a snapshot", () => {
    const { asFragment } = render(<ScoreBoard />);
    expect(asFragment(<ScoreBoard />)).toMatchSnapshot();
  });

  it("Checks if initial X score is equal to X Wins: 0", () => {
    const { getByTestId } = render(<ScoreBoard />);
    expect(getByTestId("x-score-span")).toHaveTextContent("X Wins: 0");
  });

  it("Checks if initial O score is equal to O Wins: 0", () => {
    const { getByTestId } = render(<ScoreBoard />);
    expect(getByTestId("o-score-span")).toHaveTextContent("O Wins: 0");
  });

  it("Checks if initial Draws score is equal to Draws: 0", () => {
    const { getByTestId } = render(<ScoreBoard />);
    expect(getByTestId("draws-span")).toHaveTextContent("Draws: 0");
  });
});

import { cleanup, render, fireEvent } from "@testing-library/react";
import GameContainer from "./GameContainer";
import Game from "./Game";

describe("GameContainer component", () => {
  beforeEach(cleanup);

  it("GameContainer should take a snapshot", () => {
    const { asFragment } = render(<GameContainer />);
    expect(asFragment(<GameContainer />)).toMatchSnapshot();
  });

  //   it("Checks if initial status is equal to Go to game start", () => {
  //     const { getByTestId } = render(<GameContainer />);
  //     expect(getByTestId("status-div")).toHaveTextContent("Go to game start");
  //   });

  it("Checks if onClick event is called", () => {
    const onClick = jest.fn();

    const squares = Array(9).fill(null);

    const { getAllByTestId } = render(<Game squares={squares} onClick={onClick}/>);
    const square = getAllByTestId('square-btn')[0];

    fireEvent.click(square);
    expect(onClick).toHaveBeenCalled();
  });
});

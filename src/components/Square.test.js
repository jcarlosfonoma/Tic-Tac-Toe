
import { cleanup, fireEvent, render } from "@testing-library/react";
import Square from "./Square";

describe("Square component", () => {
  afterEach(cleanup);

  it("Square should take a snapshot", () => {
    const { asFragment } = render(<Square />);
    expect(asFragment(<Square />)).toMatchSnapshot();
  });

  it("Checks if initial value is equal to \"\"", () => {
    const { getByTestId } = render(<Square />);
    expect(getByTestId("square-btn")).toHaveTextContent("");
  });

  it("Checks if onClick event is called", () => {
    const onClick = jest.fn();

    const { getByTestId } = render(<Square onClick={onClick} />);

    fireEvent.click(getByTestId("square-btn"));
    expect(onClick).toHaveBeenCalled();
  });
});
import { createContext, useState } from "react";

const MyContext = createContext({
  xWins: 0,
  oWins: 0,
  draws: 0,
  xIsNext: true,
  nextHandler: () => {},
  winner: (winner) => {},
});

export function MyContextProvider(props) {
  const [xVictories, setXVictories] = useState(0);
  const [oVictories, setOVictories] = useState(0);
  const [ties, setTies] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  function winnerHandler(winner) {
    switch (winner) {
      case "X":
        setXVictories((prev) => {
          return prev + 1;
        });
        break;

      case "O":
        setOVictories((prev) => {
          return prev + 1;
        });
        break;

      default:
        setTies((prev) => {
          return prev + 1;
        });
        break;
    }
  }

  function xIsNextHandler(value) {
    setXIsNext((prev) => {
      return value != null ? value : !prev;
    });
  }

  const context = {
    xWins: xVictories,
    oWins: oVictories,
    draws: ties,
    xIsNext: xIsNext,
    nextHandler: xIsNextHandler,
    winner: winnerHandler,
  };

  return (
    <MyContext.Provider value={context}>{props.children}</MyContext.Provider>
  );
}

export default MyContext;

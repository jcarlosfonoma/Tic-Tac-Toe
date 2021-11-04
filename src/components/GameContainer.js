import React, { useState, useEffect, useContext } from "react";
import Game from "./Game";
import MyContext from "../store/matches-record-context";
import styled from "styled-components";

const GameContainer = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);

  const matchesResultCtx = useContext(MyContext);

  const matchResultHandler = (winner = null) => {
    matchesResultCtx.winner(winner);
  };

  const handleClick = (i) => {
    const auxHistory = history.slice(0, stepNumber + 1);
    const current = auxHistory[auxHistory.length - 1];
    const squares = current.squares.slice();

    if (winner || squares[i]) {
      return;
    }

    squares[i] = matchesResultCtx.xIsNext ? "X" : "O";

    setHistory(auxHistory.concat([{ squares }]));
    setStepNumber(auxHistory.length);

    matchesResultCtx.nextHandler();
  };

  const jumpTo = (move) => {
    setStepNumber(move);
    matchesResultCtx.nextHandler(move % 2 === 0);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  let current = history[stepNumber];
  let winner = calculateWinner(current.squares);

  useEffect(() => {
    if (winner || stepNumber === 9) {
      matchResultHandler(winner);
    }
  }, [winner, stepNumber]);

  let status = winner
    ? `Winner ${winner}`
    : `Next player ${matchesResultCtx.xIsNext ? "X" : "O"}`;

  const moves = history.map((step, move) => {
    const description = move ? `Go to move # ${move}` : "Go to game start";
    return (
      <MoveItem key={move}>
        <MoveBtn onClick={() => jumpTo(move)}>{description}</MoveBtn>
      </MoveItem>
    );
  });

  return (
    <Game
      squares={current.squares}
      onClick={handleClick}
      status={status}
      moves={moves}
    />
  );
};

const MoveItem = styled.li`
  margin: 10px;
  padding: 0;
`;

const MoveBtn = styled.button`
  padding: 4px;
  width: 100%;
  background-color: #3d4250;
  color: white;
  height: 30px;
  border-radius: 5px;
`;

export default GameContainer;

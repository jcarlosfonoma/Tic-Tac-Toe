import Board from "./Board";
import styled from "styled-components";

const GameInfo = styled.div`
  margin-left: 20px;
  background-color: #3d4250;
  border-radius: 12px;
  color: white;
`;

const Status = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
`;

const PLayList = styled.ol`
  list-style: none;
  padding: 0;
`;

const Game = (props) => {
  return (
    <div className="game">
      <div className="game-board">
        <Board data-testid="board-btn" squares={props.squares} onClick={(i) => props.onClick(i)} />
      </div>
      <GameInfo>
        <Status data-testid="status-div">{props.status}</Status>
        <PLayList>{props.moves}</PLayList>
      </GameInfo>
    </div>
  );
};

export default Game;

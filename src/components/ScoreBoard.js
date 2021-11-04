import { useContext } from "react";
import MyContext from "../store/matches-record-context";
import styled from "styled-components";

const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: rgb(61, 66, 80);
  width: 326px;
  margin-right: 4px;
  margin-bottom: 10px;
`;

const Score = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

const ScoreBoard = () => {
  const matchesResultCtx = useContext(MyContext);
  return (
    <ScoreContainer>
      <Score data-testid="x-score-span">{`X Wins: ${matchesResultCtx.xWins}`}</Score>
      <Score data-testid="o-score-span">{`O Wins: ${matchesResultCtx.oWins}`}</Score>
      <Score data-testid="draws-span">{`Draws: ${matchesResultCtx.draws}`}</Score>
    </ScoreContainer>
  );
};

export default ScoreBoard;

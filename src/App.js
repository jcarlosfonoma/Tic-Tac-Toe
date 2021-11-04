import "./App.css";
import GameContainer from "./components/GameContainer";
import ScoreBoard from "./components/ScoreBoard";
import styled from "styled-components";

const Wrapper = styled.div`
  min-width: 500px;
  min-height: 500px;
`;

function App() {
  return (
    <Wrapper>
      <ScoreBoard />
      <GameContainer />
    </Wrapper>
  );
}

export default App;

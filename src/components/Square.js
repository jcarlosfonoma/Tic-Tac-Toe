import styled from "styled-components";

const lightBlue = "rgb(135,206,250)";
const lightYellow = "rgb(254,228,143)";

const StyledButton = styled.button`
  float: left;
  font-size: 70px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  line-height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 100px;
  height: 100px;
  margin: 4px;
  border: none;
  border-radius: 12px;
  background-color: rgb(61, 66, 80);
  color: ${(props) => (props.children === "X" ? lightBlue : lightYellow)};
`;

function Square(props) {
  return <StyledButton data-testid="square-btn" onClick={props.onClick}>{props.value}</StyledButton>;
}

export default Square;

import { useState } from "react";
import styled from "styled-components";

const _StyledButton = styled.button`
  background-color: ${(props) => (props.isClicked ? "blue" : "red")};
  color: ${(props) => (props.isClicked ? "black" : "white")};
  cursor: pointer;
  padding: 10px;
`;

export default function StyledComPrac1() {
  const [isClicked, setIsClicked] = useState(false);

  // 버튼 클릭시 색상 변경
  const onClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <_StyledButton onClick={onClick} isClicked={isClicked}>
        색상 변경
      </_StyledButton>
    </>
  );
}

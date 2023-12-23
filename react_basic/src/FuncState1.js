import { useState } from "react";

export default function FuncState1() {
  const [color, setColor] = useState("black");
  const [text, setText] = useState("검정색");

  const handlechangeRed = () => {
    setColor("red");
    setText("빨간색");
  };

  const handlechangeBlue = () => {
    setColor("blue");
    setText("파란색");
  };

  return (
    <div>
      <h1 style={{ color }}>{text} 글씨</h1>
      <button onClick={handlechangeRed}>빨간색</button>
      <button onClick={handlechangeBlue}>파란색</button>
    </div>
  );
}

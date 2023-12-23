import { useState } from "react";

export default function FuncState2() {
  const [visible, setVisible] = useState(true);

  const handleDisappear = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <h1>{visible ? "안녕하세요" : ""}</h1>
      <button onClick={handleDisappear}>
        {visible ? "사라져라" : "보여라"}
      </button>
    </div>
  );
}

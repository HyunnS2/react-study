import { useState } from "react";
import styled from "styled-components";

const _Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const _Input = styled.input`
  padding: 10px;
  margin-right: 10px;
`;

const _Button = styled.button`
  padding: 10px 15px;
  background-color: skyblue;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
`;

const _List = styled.ul`
  width: 300px;
  height: 200px;
  overflow-y: scroll;
  padding: 0;
`;

const _ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid #dadada;
`;

export default function StylePrac4() {
  const [inputValue, setInputValue] = useState("");

  const [list, setList] = useState([]);

  const onClick = () => {
    if (inputValue !== "") {
      setList([...list, inputValue]);
      setInputValue("");
    }
  };

  return (
    <_Container>
      <div>
        <_Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <_Button onClick={onClick}>Add</_Button>
      </div>
      <_List>
        {/* <li>1</li>
        <li>2</li> */}
        {list.map((value, idx) => {
          return <_ListItem key={idx}>{value}</_ListItem>;
        })}
      </_List>
    </_Container>
  );
}

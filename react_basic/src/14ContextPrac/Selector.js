import { useContext } from "react";
import MyContextPrac from "./store/context";

export default function Selector() {
  const value = useContext(MyContextPrac);

  const style = {
    color: value.theme === "dark" ? "white" : "black", // 테마에 따라 글씨 색상 변경
    backgroundColor: value.theme === "dark" ? "black" : "white", // 테마에 따라 배경색 변경
  };

  return (
    <div>
      <div>
        <h2>현재 선택된 언어 : {value.language}</h2>
        <select
          value={value.language}
          onChange={(e) => value.setLanguage(e.target.value)}
        >
          <option value={"ko"}>한국어</option>
          <option value={"en"}>영어</option>
        </select>
      </div>
      <div>
        <h2 style={style}>현재 선택된 테마 : {value.theme}</h2>
        <select
          value={value.theme}
          onChange={(e) => value.setTheme(e.target.value)}
        >
          <option value={"light"}>light</option>
          <option value={"dark"}>dark</option>
        </select>
      </div>
      {/* <div>
        <p style={style}>테마에 따라 글씨 색상 변경됩니다.</p>
      </div> */}
    </div>
  );
}

import { useState } from "react";
import MyContextPrac from "./store/context";

export default function Provider(props) {
  const [language, setLanguage] = useState("ko");
  const [theme, setTheme] = useState("dark");

  return (
    <MyContextPrac.Provider value={{ language, theme }}>
      {props.children}
    </MyContextPrac.Provider>
  );
}

import { useContext } from "react";
import ThemeContext from "./store/theme-context";

export default function ThemeSelector() {
  const { theme, setTheme } = useContext(ThemeContext);

  const style = {
    color: theme === "dark" ? "white" : "black",
    backgroundColor: theme === "dark" ? "black" : "white",
  };

  return (
    <div>
      <h2 style={style}>현재 테마 : {theme}</h2>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">밝은 테마</option>
        <option value="dark">어두운 테마</option>
      </select>
    </div>
  );
}

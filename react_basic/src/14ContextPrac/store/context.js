import React, { createContext } from "react";

const MyContextPrac = createContext({
  language: "ko",
  setLanguage: () => {},
  theme: "dark",
  setTheme: () => {},
});

export default MyContextPrac;

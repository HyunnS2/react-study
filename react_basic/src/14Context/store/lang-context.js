import React, { createContext } from "react";

// createContext를 객체형태로 import 하지 않고 const MyContext = React.createContext()로 써도 됨

// Context 생성
// Provider와 Consumer 두개의 리액트 컴포넌트를 반환
const MyContext = createContext({
  language: "ko",
  setLanguage: () => {},
});

// LangProvider 파일을 따로 만들지 않고 store에서 아래처럼 바로 쓰는 경우가 더 흔함
// export function LanguageProvider(props) {
//   const [language, setLanguage] = useState("ko");

//   return (
//     <MyContext.Provider value={{ language }}>
//       {props.children}
//     </MyContext.Provider>
//   );
// }

export default MyContext;

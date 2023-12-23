import FuncState3 from "./\bFuncState3";
import SassComponent from "./10style/SassComponent";
import StyledComPrac1 from "./10stylePrac/StyledComPrac1";
import StyledComponent from "./10style/StyledComponent";
import Book from "./Book";
import ClassComponent from "./ClassComponent";
import ClassState4 from "./ClassState4";
import CounterFunc from "./CounterFunc";
import FuncState1 from "./FuncState1";
import FuncState2 from "./FuncState2";
import FuncState4 from "./FuncState4";
import FunctionComponent from "./FunctionComponent";
import Style from "./Style";
// import Larva from "./Larva";
import Test from "./Test";
import Test2 from "./Test2";
import ToggleFunc from "./ToggleFunc";
import StylePrac4 from "./10stylePrac/StylePrac4";
import RouterPrac1 from "./12Router/RouterPrac1";
import Form from "./13Form/Form";
import FormPrac1 from "./13Form/FormPrac1";
import LanguageProvider from "./14Context/LangProvider";
import { useState } from "react";

import MyContext from "./14Context/store/lang-context";
import Provider from "./14ContextPrac/Provider";
import Selector from "./14ContextPrac/Selector";
import { ThemeProvider } from "./14ContextPrac/store/theme-context";
import LanguageSelector from "./14ContextPrac/LangSelector";
import ThemeSelector from "./14ContextPrac/ThemeSelector";

function App() {
  // const [language, setLanguage] = useState("ko");
  return (
    <>
      {/* <h1>컴포넌트</h1> */}
      {/* <ClassComponent></ClassComponent> */}
      {/* <FunctionComponent /> */}
      {/* <ClassComponent /> */}
      {/* <Larva /> */}
      {/* <Test />
      <Test2 /> */}
      {/* <ClassComponent name="hyun"></ClassComponent>
      <ClassComponent /> */}
      {/* <FunctionComponent name="kdt8" age={18}>
        안녕
      </FunctionComponent>
      <FunctionComponent /> */}
      {/* <ClassComponent></ClassComponent> */}
      {/* <FunctionComponent
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,000"
        type="자기계발서"
      /> */}
      {/* <Book
        title={"나의하루는 4시40분에 시작된다"}
        author={"김유진"}
        price={"13,000"}
        type={"자기계발서"}
      /> */}
      {/* <Board /> */}
      {/* <ClassState4 /> */}
      {/* <ToggleFunc /> */}
      {/* <FuncState2 /> */}
      {/* <FuncState3 /> */}
      {/* <FuncState4 /> */}
      {/* <Style /> */}
      {/* <SassComponent /> */}
      {/* <StyledComponent /> */}
      {/* <StyledComPrac1 /> */}
      {/* <StylePrac4 /> */}
      {/* <RouterPrac1 /> */}

      {/* <Form /> */}
      {/* <FormPrac1 /> */}
      {/* <MyContext.Provider value={{ language, setLanguage }}>
        <LanguageSelector />
      </MyContext.Provider> */}
      {/* <LanguageProvider>
        <LanguageSelector />
      </LanguageProvider> */}
      {/* <Provider>
        <Selector />
      </Provider> */}
      <ThemeProvider>
        <LanguageSelector />
        <ThemeSelector />
      </ThemeProvider>
    </>
  );
}

export default App;

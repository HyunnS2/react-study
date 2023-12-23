import { BrowserRouter, Route, Routes } from "react-router-dom";
import Student from "./Student";
import Main from "./Main";

export default function RouterPrac1() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/student/:name" element={<Student />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

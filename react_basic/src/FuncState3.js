import { useState } from "react";

export default function FuncState3() {
  const [inputWriter, setInputWriter] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [comments, setComments] = useState([]);

  const onChange = (e) => {
    // if (e.target.id === "writer") {
    //   setInputWriter(e.target.value);
    // } else if (e.target.id === "title") {
    //   setInputTitle(e.target.value);
    // }

    setInputWriter(e.target.value);
  };

  const addComment = () => {
    const newComment = {
      writer: inputWriter,
      title: inputTitle,
    };

    setComments([...comments, newComment]);
    setInputTitle("");
    setInputWriter("");
  };

  return (
    <>
      <form>
        <label htmlFor="writer">작성자:</label>
        <input
          type="text"
          id="writer"
          value={inputWriter}
          onChange={(e) => onChange(e)}
        />

        <label htmlFor="title">제목:</label>
        <input
          type="text"
          id="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />

        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>
      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((value, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{value.title}</td>
              <td>{value.writer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

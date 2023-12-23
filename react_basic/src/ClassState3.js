import { Component } from "react";

// ClassState 3
class ClassState3 extends Component {
  constructor(props) {
    super(props);

    // state 초기화
    this.state = {
      inputWriter: "", // 작성자
      inputTitle: "", // 제목
      comments: [], // 입력한 내용
    };

    // 바인딩
    // 함수를 만들면 바인딩 해주기
    this.onChange = this.onChange.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  // onChange 함수 실행시키기 -> 값 입력 O
  onChange(e) {
    console.log(e.target);
    this.setState({ inputWriter: e.target.value });
  }

  addComment() {
    const newComment = {
      writer: this.state.inputWriter,
      title: this.state.inputTitle,
    };
    // 추가하기
    // 추가한 후 input을 빈문자로 바꿔줌
    this.setState({
      comments: [...this.state.comments, newComment],
      inputTitle: "",
      inputWriter: "",
    });
    // [{writer:"asdf", title:"aaaa"},{},{}...] -> 이렇게 값이 들어갈 거임!
    // console.log(this.state.inputWriter);
  }

  render() {
    const { inputWriter, inputTitle, comments } = this.state;

    return (
      <>
        <form>
          <label htmlFor="writer">작성자:</label>
          {/* onChange: input, textarea, select 값이 변경될 때 마다 발생하는 이벤트 핸들러 */}
          {/* 1. 함수로 보내는 방법 */}
          <input
            type="text"
            id="writer"
            value={inputWriter}
            onChange={(e) => this.onChange(e)}
          ></input>

          <label htmlFor="title">제목:</label>
          {/* 2. 다이렉트로 보내는 방법 */}
          <input
            type="text"
            id="title"
            value={inputTitle}
            onChange={(e) => this.setState({ inputTitle: e.target.value })}
          />

          <button type="button" onClick={this.addComment}>
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
            {/* [{title,writer},{title,writer},{title,writer}...] 배열 안에  value 객체가 올 예정*/}
            {comments.map((value, index) => {
              return (
                // 부모에게 키값 주기
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{value.title}</td>
                  <td>{value.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default ClassState3;

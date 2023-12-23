import { Component } from "react";

class ClassState4 extends Component {
  constructor(props) {
    super(props);

    // state 초기화
    this.state = {
      inputWriter: "", // 작성자
      inputTitle: "", // 제목
      comments: [], // 입력한 내용
      inputSearch: "", // 검색 내용
      searchType: "title", // 검색 타입 -> title을 기본값으로 지정해둠
      results: [], // 검색 결과
    };

    // 바인딩
    // 함수를 만들면 바인딩 해주기
    this.onChange = this.onChange.bind(this);
    this.addComment = this.addComment.bind(this);
    this.searchComment = this.searchComment.bind(this);
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

  searchComment() {
    const searchResult = this.state.comments.filter((value) => {
      console.log(value[this.state.searchType]);
      console.log(
        value[this.state.searchType].includes(this.state.inputSearch)
      );

      const type = value[this.state.searchType];
      const include = type.includes(this.state.inputSearch);

      if (!include) {
        return false;
      }
      return true;

      // 위 if문을 길게 써보면,
      //   if (value[this.state.searchType].includes(this.state.inputSearch)) {
      //     return true;
      //   } else {
      //     return false;
      //   }
      //   value[this.state.searchType];
    });

    this.setState({ results: searchResult });
  }

  render() {
    const {
      inputWriter,
      inputTitle,
      comments,
      inputSearch,
      searchType,
      results,
    } = this.state;

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
          />

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

        {/* 검색 기능 */}
        <form>
          {/* select에서 가장 먼저 선택 되어있을 값 = value */}
          <select
            value={this.state.searchType}
            onChange={(e) => this.setState({ searchType: e.target.value })}
          >
            <option value="writer">작성자</option>
            <option value="title">제목</option>
          </select>
          <input
            type="text"
            placeholder="검색어"
            value={inputSearch}
            onChange={(e) => this.setState({ inputSearch: e.target.value })}
          />
          <button type="button" onClick={this.searchComment}>
            검색
          </button>
        </form>

        {/* comment 추가 기능 */}
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

        <h4>검색결과</h4>
        <table border={1} cellSpacing={0}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {results.map((value, index) => {
              return (
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

export default ClassState4;

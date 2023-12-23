// function 컴포넌트명, const 컴포넌트명 = ()=> {}
import PropTypes from "prop-types";
import cat from "./cat.JPG";
import "./App.css";

// props 보내고 {props.name}을 하든, {name} 구조분해할당을 하든 같음
function FunctionComponent(props) {
  const myClass = "kdt8";

  return (
    <>
      {/* <div>반갑습니다 {myClass}에 오신 것을 환영합니다.</div>
      <div>{props.name}</div>
      <div>{props.age}</div>
      <div>{props.children}</div> */}

      <div class="content">
        <div class="inner_content">
          <h1 class="title">이번주 베스트셀러</h1>
        </div>
        <img src={cat} alt="이미지" width={200}></img>
        <div>
          <h1>{props.title}</h1>
        </div>
        <div>
          <h4>저자:{props.author}</h4>
          <h4>판매가:{props.price}</h4>
          <h4>구분:{props.type}</h4>
        </div>
      </div>
    </>
  );
}

FunctionComponent.defaultProps = {
  name: "kdt",
  age: 10,
};

FunctionComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default FunctionComponent;

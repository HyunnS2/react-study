import { Component } from "react"; // 1번 방법
// import React from "react"; // 2번 방법
import ProTypes from "prop-types";

// class형 컴포넌트
// class 컴포넌트명 extends Component

//class ClassComponent extends React.Component {} // 2번 방법
class ClassComponent extends Component {
  // 클래스형 컴포넌트에서는 render 함수는 필수
  render() {
    // const name = "홍길동";
    // const { name } = this.props; // 구조분해할당을 통해 {this.props.name}이 아닌 {name}으로 불러올 수 있음
    const style = {
      color: "red",
    };

    return (
      <>
        {/* <h1>Hello {this.props.name}</h1>
        <p>여기는 클래스형 컴포넌트</p> */}
        {/* <h4>{name}</h4> */}

        <h3>
          좋아하는 음식 : <span style={style}> {this.props.food}</span>
        </h3>
      </>
    );
  }
}

ClassComponent.defaultProps = {
  name: "홍길동",
  food: "기본값",
};

ClassComponent.propTypes = {
  name: ProTypes.string.isRequired,
};

export default ClassComponent;

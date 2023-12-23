import { Component } from "react";
import "./Test.css";

// 230919
class Test extends Component {
  render() {
    const name = "홍길동";
    const my_style = {
      backgroundColor: "blue",
      color: "orange",
      fontSize: "40px",
      padding: "12px",
    };
    return (
      <>
        <div style={my_style}>{name}</div>
      </>
    );
  }
}

export default Test;

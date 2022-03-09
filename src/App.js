import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-color: #71f261;
}
`;
const Title = styled.h1`
  font-family: "Times New Roman", Times, serif;
  color: black;
`;

const Tag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: black;
`;

const Principal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 50vh;
`;
const Button = styled.button`
  background-color: #f2f201;
  font-size: 5vw;
  padding: 1vh 4vw;
  color: black;
`;
const NdTitle = styled.h2`
  font-size: 8vw;
`;
const NdButton = styled.button`
  background-color: #f2f201;
  font-size: 5vw;
  padding: 1vh 4vw;
  color: black;
`;
export default class calculator extends Component {
  state = {
    count: 0
  };
  add = () => {
    let { count } = this.state;
    this.setState({
      count: count === 10 ? (count = 10) : count + 1
    });
  };

  remove = () => {
    let { count } = this.state;
    if (count > 0) {
      this.setState({
        count: count - 1
      });
    }
  };
  render() {
    let { count } = this.state;
    let { add, remove } = this;
    return (
      <Tag className="container">
        <GlobalStyle />
        <Title>React Counter App</Title>
        <Principal className="counter">
          <Button onClick={add}> + </Button>
          <NdTitle>{count}</NdTitle>
          <NdButton onClick={remove}> - </NdButton>
        </Principal>
      </Tag>
    );
  }
}

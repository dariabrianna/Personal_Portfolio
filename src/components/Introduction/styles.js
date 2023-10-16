import styled from "styled-components";

export const Introduction = styled.div`
  background-color: black;
  color: white;
  font-family: sans-serif;
  margin-top: -22px;
  max-height: 100%;
  padding-top: 116px;
  padding-bottom: 100px;
  h1 {
    font-size: 100px;
  }
  h2 {
    font-size: 60px;
    padding-left: 500px;
  }
  h2 {
    color: hsl(0, 0%, 28%);
    font-size: 50px;
    font-weight: bold;
    letter-spacing: 7px;
    cursor: pointer;
  }

  h2 {
    transition: 0.5s ease-out;
  }
  h2:hover {
    margin-right: 5px;
  }
  h2:hover :after {
    content: "'";
  }
  h2:hover {
    margin-left: 30px;
  }
  h2:hover {
    color: #fff;
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff;
  }

  @media (max-width: 768px) {
    max-height: unset;
    h1 {
      font-size: 50px;
    }
    h2 {
      display: none;

    }
  }
`;

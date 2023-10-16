import styled from "styled-components";

export const About = styled.div`
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 40px;
  max-height: 400px;
  height: 100%;
  padding-left: 200px;
  padding-right: 200px;
  line-height: 150%;
  font-weight: 700;
  color: white;
  background-color: black;
  font-size: 23px;
  text-align: left;
  padding-top: 60px;
  padding-bottom: 100px;
  flex-direction: row;
  gap: 85px;
  img {
    height: 600px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
    box-sizing: border-box;
    font-size: 12px;
    margin-bottom: 0;
    gap: 60px;
    max-height:unset;
    img {
      height: 400px;
    }
  }
`;

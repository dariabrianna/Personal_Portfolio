import styled from "styled-components";

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  padding: 60px;
  div {
    display: flex;
    flex-direction: column;
    padding: 220px;
    font-size: 23px;
    font-family: sans-serif;
    font-weight: 700;
    text-align: left;
    line-height: 30px;
  }
  img {
    width: 500px;
  }
  @media (max-width: 768px) {
    max-height: unset;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 36px;
    div {
      padding: 0;
    }
    img {
      width: 300px;
    }
    p {
      font-size: 12px;
    }
  }
`;

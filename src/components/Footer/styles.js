import styled from "styled-components";

export const Footer = styled.div`
  color: white;
  font-family: sans-serif;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  .blue {
    width: 100%;
  }
  button {
    display: flex;
    width: 203px;
    height: 50px;
    padding: 5px 26px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 30px;
    border: 1px solid #000;
    background: var(--colors-blue-dark, #0a84ff);
    font-weight: 600;
    color: white;
    font-family: sans-serif;
    margin-top: 24px;
  }
  img {
    width: 80px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 36px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }
`;

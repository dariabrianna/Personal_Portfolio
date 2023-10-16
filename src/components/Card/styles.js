import styled from "styled-components";

export const Card = styled.div`
  max-height: 100%;
  max-width: 300px;
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 12px;
  background-color: white;
  text-align: left;
  background-color: var(--blue-40, #6fa3ff);

  color: white;
  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  h1 {
    margin: 0;
    font-family: Poppins, sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    text-align: left;
    margin-bottom: 22px;
    color: white;
    border-bottom: black;
    margin-top: 12px;
  }
  h2 {
    font-feature-settings: "clig" off, "liga" off;
    font-family: Poppins, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    text-align: left;
    margin-bottom: 12px;
    color: white;
  }
  p {
    font-family: Poppins, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    line-height: 20px;
    text-align: left;
    margin-bottom: 20px;
    color: white;
    letter-spacing: 1px;
  }
  div {
    display: flex;
    gap: 21px;
    align-items: center;
    justify-content: flex-end;
    margin-left: auto;
  }
  a {
    text-decoration: none;
  }
  a {
    font-family: Source Code Pro;
    padding: 10px 20px;
    text-transform: uppercase;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    color: white;
    text-shadow: none;
    background: transparent;
    box-shadow: transparent;
    border: 1px solid var(--blue-30, #a7c7ff);
    transition: 0.5s ease;
    user-select: none;
  }

  a:hover,
  :focus {
    color: #ffffff;
    background: var(--blue-30, #a7c7ff);
    border: 1px solid var(--blue-40, #6fa3ff);
    text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
    box-shadow: 0 0 5px var(--blue-30, #a7c7ff),
      0 0 20px var(--blue-30, #a7c7ff), 0 0 50px var(--blue-30, #a7c7ff),
      0 0 100px var(--blue-30, #a7c7ff);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 24px;
  }
`;

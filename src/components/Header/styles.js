import styled from "styled-components";

export const Header = styled.div`
  max-height: 85px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 80px;
  background-color: black;
  color: white;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  .navbar {
    display: flex;
    flex-direction: row;
    padding: 5px;
    box-sizing: border-box;
    list-style: none;
    padding: 5px;
    margin: 0;
    font-size: 20px;
  }
  li {
    padding: 5px;
    /* margin-right: 75px; */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  li:first-child {
    margin-right: 15px;
  }
  p {
    font-size: 25px;
  }
  .glow-on-hover {
    width: 150px;
    height: 35px;
    border: none;
    outline: none;
    color: #fff;
    background: black;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .glow-on-hover:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  .glow-on-hover:active {
    color: #000;
  }

  .glow-on-hover:active:after {
    background: transparent;
  }

  .glow-on-hover:hover:before {
    opacity: 1;
  }

  .glow-on-hover:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  a {
    text-decoration: none;
    color: white;

    scroll-behavior: smooth;
  }
  @media (max-width: 768px) {
    justify-content: space-between;
    align-items: center;
    padding: 9px 22px;
    background-color: black;
    color: white;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

    p {
      font-size: 12px;
    }
    .glow-on-hover {
      width: 116px;
      height: 25px;
      border: none;
      outline: none;
      color: #fff;
      background: black;
      cursor: pointer;
      position: relative;
      z-index: 0;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }
  }
`;

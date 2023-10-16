import * as S from "./styles";

const Header = () => {
  return (
    <S.Header>
      <p>Reabciuc Daria-Brianna</p>
      <div>
        <ul className="navbar">
          <li className="glow-on-hover">
            <a href="#about">About</a>
          </li>
          <li className="glow-on-hover">
            {" "}
            <a href="#footer"> Contact </a>
          </li>
        </ul>
      </div>
    </S.Header>
  );
};

export default Header;

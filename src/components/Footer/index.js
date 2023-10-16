import * as S from "./styles";

const Footer = () => {
  const facebookLink =
    "https://www.facebook.com/profile.php?id=100004856317002";
  const gitLink = "https://github.com/dariabrianna";
  const instaLink = "https://www.instagram.com/dariabriannaa/";

  return (
    <S.Footer id="footer">
      <button>
        <a href='mailto:daria.brianna.reabciuc@gmail.com'>Contact me</a>
      </button>
      <div>
        <a href={facebookLink}>
          <img src="/images/facebook.png"></img>
        </a>
        <a href={instaLink}>
          <img src="/images/insta.png"></img>
        </a>
        <a href={gitLink}>
          <img src="/images/git.png" href=""></img>
        </a>
      </div>
      <img src="/images/blue.png" className="blue"></img>
    </S.Footer>
  );
};

export default Footer;

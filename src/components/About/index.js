import * as S from "./styles";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <S.About id="about">
      <Fade left>
        <div>
          <p>
            I'm a friendly and communicative junior React developer. I excel in
            HTML, CSS, JavaScript, and working with APIs and various libraries.
          </p>
          <p>
            I have a knack for building engaging web interfaces and take pride
            in writing clean, maintainable code. My responsibility and teamwork
            skills make me a great collaborator. I get along with everyone and
            enjoy contributing to a positive work environment.
          </p>
          <p>
            Explore my portfolio to see my work, and don't hesitate to reach out
            for exciting opportunities. Let's create something amazing together!
          </p>
        </div>
      </Fade>
      <Fade right>
        <img src="/images/illustration.png"></img>
      </Fade>
    </S.About>
  );
};

export default About;

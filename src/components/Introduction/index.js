import * as S from "./styles";
import ReactTyped from "react-typed";

const Introduction = () => {
  return (
    <S.Introduction>
      <h1>
        I{" "}
        <ReactTyped
          strings={[" am Brianna "]}
          typeSpeed={150}
          repeat={1}
          loop
          backSpeed={100}
          cursorChar={">"}
        />
      </h1>
      <h2>Junior FrontEnd Developer</h2>
    </S.Introduction>
  );
};

export default Introduction;

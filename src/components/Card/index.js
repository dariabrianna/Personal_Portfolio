import * as S from "./styles";
import Works from "../Works";

const Card = ({ number, name, desc, gitlink, demo }) => {
  return (
    <S.Card>
      <h1>{name}</h1>
      <p>{desc}</p>
      <div>
        <a href={gitlink}>Git</a>
        <a href={demo}>Demo</a>
      </div>
    </S.Card>
  );
};

export default Card;

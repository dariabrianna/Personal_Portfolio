import * as S from "./styles";
import { Fade } from "react-reveal";

const Profile = () => {
  return (
    <S.Profile>
      <Fade left>
        <img src="/images/removedb.png"></img>
      </Fade>
      <Fade right>
        <div>
          <p>
            I am currently a second-year student at the Software Engineering
            Faculty, Technical University of Moldova. As the leader of my group,
            I have honed my communicative skills through organizing study
            sessions, facilitating group projects, and fostering collaboration
            among my peers, improving my ability to work effectively in teams
            but has also deepened my understanding of software development
            principles and practices.
          </p>
          <p>
            I am passionate about tennis and piano, and I find that they offer a
            great balance to my academic pursuits. Tennis helps me stay active
            and competitive, while playing the piano allows me to express myself
            creatively and unwind. I am excited to continue exploring my
            interests in both technology and my hobbies as I progress through my
            academic journey.
          </p>
        </div>
      </Fade>
    </S.Profile>
  );
};

export default Profile;

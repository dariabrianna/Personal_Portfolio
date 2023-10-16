import * as S from "./styles";
import Card from "../Card";
import Fade from "react-reveal/Fade";

const Works = () => {
  const trelloLink = "https://github.com/dariabrianna/trelloboard";
  const scoreboardLink = "https://github.com/dariabrianna/scoreboard";
  const gifLink = "https://github.com/dariabrianna/gif-finder";
  const gifDemo =
    "https://652932481d133d2cbb59f20b--sunny-flan-aebb86.netlify.app";
  const trelloDemo =
    "https://65293347226bfb32fa5caec1--frabjous-kangaroo-9bbf53.netlify.app";
  const scoreboardDemo =
    "https://65293b07226bfb38e25cb11b--chimerical-custard-8682cd.netlify.app";
  const presentationDemo =
    "https://652aabd4ee71d640cec7d798--monumental-begonia-90d2fb.netlify.app";
  const presentationLink = "https://github.com/dariabrianna/grand-solar-master";

  return (
    <S.Works>
      <Fade bottom>
        <h1 className="title">Projects</h1>
        <div className="order">
          <Card
            name={"Trello Board"}
            desc={
              "Popular project management tool that utilizes a visual board-based system to help teams organize tasks and collaborate effectively."
            }
            gitlink={trelloLink}
            demo={trelloDemo}
          />
          <Card
            name={"Gif Finder"}
            desc={
              "A GIF finder is a search tool or app designed to help users discover and share animated GIFs quickly and easily."
            }
            gitlink={gifLink}
            demo={gifDemo}
          />
          <Card
            name={"Presentation WebSite"}
            desc={
              "A presentation website made in React is a dynamic and interactive web platform that leverages the React JavaScript library to create engaging and responsive user interfaces.  "
            }
            gitlink={presentationLink}
            demo={presentationDemo}
          />
          <Card
            name={"Scoreboard"}
            desc={
              "It allows users to input player names and their respective points, providing a summary of the game or competition, helping to keep the audience and participants informed."
            }
            gitlink={scoreboardLink}
            demo={scoreboardDemo}
          />
        </div>
      </Fade>
    </S.Works>
  );
};

export default Works;

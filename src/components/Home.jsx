import { TextCenter } from "./styled/TextCenter";
import HomePagePic from "./styled/images/warwickCastle.jpg";
import { TextBottom } from "./styled/BottomRightText";
import { Title } from "./styled/Text";
import { HomePic } from "./styled/HomePic.styles";

function Home() {
  return (
    <div style={{ position: "relative" }}>
      <Title>About</Title>
      <HomePic>
        <TextCenter>
          Bringing the art collection from New York to your screen!{" "}
          <a href="https://www.metmuseum.org/" target="_blank" rel="noreferrer">
            The Metropolitan Museum of Art
          </a>{" "}
          presents over 5000 years of art from all around the globe.
          <br />
          On this website you can see available artwork, search for favorite
          artists or explore new ones, add an artwork to your personal favorite
          page
        </TextCenter>
        <TextBottom>
          Background picture:{" "}
          <a
            href="https://www.metmuseum.org/art/collection/search/438106"
            target="_blank"
            rel="noreferrer"
          >
            Warwick Castle{" "}
          </a>
        </TextBottom>
        <img
          src={HomePagePic}
          alt="home-page-pic"
        />
      </HomePic>
    </div>
  );
}

export default Home;

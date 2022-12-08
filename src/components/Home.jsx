import { TextCenter } from "./styled/TextCenter";
import HomePagePic from "../images/warwickCastle.jpg";

function Home() {
  return (
    <div style={{ position: "relative" }}>
      <TextCenter>
        This website allows the access to the collection from
        <a
          href="https://www.metmuseum.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Met
        </a>
      </TextCenter>
      <img
        src={HomePagePic}
        alt="home-page-pic"
        style={{ width: "100%", height: "auto", opacity: "0.3" }}
      />
    </div>
  );
}

export default Home;

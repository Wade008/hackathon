
import { Title, Para } from "./styled/Text";
import { Spinner } from "./styled/Spinner.styles";
import ArtThumbnailList from "./ArtThumbnailList"

function Artwork(props) {
  const { isLoading, data, handleFavourites, filteredArt } = props;

  return (
    <>
      {isLoading ? (
        <div>
          <Para>Loading data...please wait</Para>
          <Spinner />
        </div>
      ) : (
        <div>
          <Title>An assortment of European Paintings</Title>
          <ArtThumbnailList
            artworkList={data}
            handleFavourites={handleFavourites}
            filteredArt={filteredArt}
       
         
          />

        </div>
      )}
    </>
  );
}

export default Artwork;

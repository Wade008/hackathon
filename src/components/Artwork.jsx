// import styled from "styled-components"
import Title from "./styled/Title";
import Spinner from "./Spinner";
import ArtThumbnailList from "./ArtThumbnailList"

function Artwork(props) {
    const { isLoading, data } = props;

    return (
        <>
            {isLoading ? (
                <div>
                    <p>Loading data...please wait</p>
                    <Spinner />
                </div>
            ) : (
                <div>
                    <Title>An assortment of European Paintings</Title>
                    <ArtThumbnailList artworkList={data} />

                </div>
            )}
        </>
    );
}

export default Artwork;

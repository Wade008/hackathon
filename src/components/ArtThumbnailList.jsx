import styled from "styled-components"
import ArtThumbnail from "./ArtThumbnail"
import { ArtworkList } from "./styled/Artwork.styles"

function ArtThumbnailList(props) {
  
    const {artworkList, handleFavourites} = props

    return (
        <>
            <ArtworkList id="artworkList">
                {artworkList.map(artwork => {
                    return (
                        <ArtThumbnail
                            key={artwork.objectID}
                            id={artwork.objectID}
                            title={artwork.title}
                            artist={artwork.artistDisplayName}
                            src={artwork.primaryImageSmall}
                            handleFavourites={handleFavourites}
                        />
                    )
                })}
            </ArtworkList>
        </>
    )
}

export default ArtThumbnailList
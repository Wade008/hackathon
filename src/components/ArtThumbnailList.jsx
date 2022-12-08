import styled from "styled-components"
import ArtThumbnail from "./ArtThumbnail"
import { ArtworkList } from "./styled/Artwork.styles"


function ArtThumbnailList({ artworkList }) {
  

    return (
        <>
            <ArtworkList id="artworkList">
                {artworkList.map(artwork => {
                    return (
                        <ArtThumbnail
                            key={artwork.objectID}
                            title={artwork.title}
                            artist={artwork.artistDisplayName}
                            src={artwork.primaryImageSmall}
                        />
                    )
                })}
            </ArtworkList>
        </>
    )
}

export default ArtThumbnailList
import styled from "styled-components"
import ArtThumbnail from "./ArtThumbnail"

const ArtworkList = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding: 0 2rem 2rem;
`

function ArtThumbnailList({ artworkList }) {
    // Mock list for testing placeholder thumbnails
    let mockArtworkList = [];
    for (let i = 1; i < 50; i++) {
        mockArtworkList.push(
            {
                objectID: `id-${i}`,
                title: `Painting ${i}`,
                artistDisplayName: `Artist ${i}`,
                primaryImageSmall: "/#"
            }
        )
    }

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
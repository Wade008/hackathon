import styled from "styled-components"
import ArtThumbnail from "./ArtThumbnail"

const ArtworkList = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
/* grid-template-columns: repeat(5, 1fr); */
/* column-gap: 2rem;
row-gap: 2rem; */
padding: 0 2rem;
`

function ArtThumbnailList() {
    // const artwork = [
    //     {
    //         id: `id-${n}`,
    //         title: `Painting ${n}`,
    //         artist: `Artist ${n}`,
    //     },
    // ]

    let mockArtworkList = [];
    for (let i = 1; i < 50; i ++ ) {
        mockArtworkList.push(
            {
                id: `id-${i}`,
                title: `Painting ${i}`,
                artist: `Artist ${i}`,
                imageURL: "/#"
            }
        )
    }

    return (
        <>
            <ArtworkList id="artworkList">
                {mockArtworkList.map(artwork => {
                    return (
                        <ArtThumbnail
                            key={artwork.id}
                            title={artwork.title}
                            artist={artwork.artist}
                            image={artwork.imageURL}
                        />
                    )
                })}
            </ArtworkList>
        </>
    )
}

export default ArtThumbnailList
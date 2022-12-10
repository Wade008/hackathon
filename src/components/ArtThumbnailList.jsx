
import ArtThumbnail from "./ArtThumbnail"
import { ArtworkList } from "./styled/Artwork.styles"

function ArtThumbnailList(props) {

    const { artworkList, handleFavourites, filteredArt } = props

    return (
        <>
            {filteredArt ? (
                <ArtworkList id="artworkList">
                    {filteredArt.map((item) => {
                        return (
                            <ArtThumbnail
                                key={item.objectID}
                                id={item.objectID}
                                title={item.title}
                                artist={item.artistDisplayName}
                                src={item.primaryImageSmall}
                                handleFavourites={handleFavourites}
                            />
                        )
                    }
                    )}

                </ArtworkList>
            ) : (
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
            )

            }

        </>
    )
}

export default ArtThumbnailList
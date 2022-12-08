
import { useState } from "react"
import { Wrapper, ThumbnailImage } from "./styled/Artwork.styles"



function ArtThumbnail(props) {

    const handleClick = (e) => {
        e.preventDefault()

        props.handleFavourites(e)
    }


    return (
        <Wrapper> {/* Add onClick handler to navigate to details page */}

            <button
                className="btn-fav"
                alt="Add to favourites"
                title="Add to favourites"
                value={props.id}
                onClick={handleClick}
            >
                &hearts;

            </button>

            <ThumbnailImage src={props.src} alt={props.title}></ThumbnailImage>
            <div className="artwork-snippet">
                <h3 className="artwork-title">{props.title}</h3>
                <div className="artwork-artist">{props.artist}</div>

            </div>
        </Wrapper>
    )
}

export default ArtThumbnail

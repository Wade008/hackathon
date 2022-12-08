

import { Wrapper, ThumbnailImage } from "./styled/Artwork.styles"



function ArtThumbnail(props) {

    const artwork = props

    return (
        <Wrapper> {/* Add onClick handler to navigate to details page */}
            <button
                className="btn-fav"
                alt="Add to favourites"
                title="Add to favourites">
                &hearts;
                {/* Add onClick handler to add to favourites */}
            </button>
            <ThumbnailImage src={artwork.src} alt={artwork.title}></ThumbnailImage>
            <div className="artwork-snippet">
                <h3 className="artwork-title">{artwork.title}</h3>
                <div className="artwork-artist">{artwork.artist}</div>
            </div>
        </Wrapper>
    )
}

export default ArtThumbnail

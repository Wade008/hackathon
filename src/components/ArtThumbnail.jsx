

import { Wrapper, ThumbnailImage } from "./styled/Artwork.styles"



function ArtThumbnail(props) {

    const artwork = props


    const handleClick = (e) => {
        e.preventDefault()

        console.log(e.target.value)
    }


    return (
        <Wrapper> {/* Add onClick handler to navigate to details page */}

            <button
                className="btn-fav"
                alt="Add to favourites"
                title="Add to favourites"
                value={artwork.id}
                onClick={handleClick}
            >
                &hearts;

            </button>

            <ThumbnailImage src={artwork.src} alt={artwork.title}></ThumbnailImage>
            <div className="artwork-snippet">
                <h3 className="artwork-title">{artwork.title}</h3>
                <div className="artwork-artist">{artwork.artist}</div>
                <p>{artwork.id}</p>
            </div>
        </Wrapper>
    )
}

export default ArtThumbnail

import { Wrapper, ThumbnailImage } from "./styled/Artwork.styles"
import { useNavigate } from "react-router-dom"

function ArtThumbnail(props) {
    const artwork = props

    const handleClick = (e) => {
        e.preventDefault()

        console.log(e.target.value)
    }

    const navigate = useNavigate()

    return (
        <Wrapper onClick={() => navigate(
            // Pass the component props to the route
            `/artwork/${artwork.id}`, { state: artwork })}>

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

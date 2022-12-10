import { Wrapper, ThumbnailImage } from "./styled/Artwork.styles"
import { useNavigate } from "react-router-dom"

function ArtThumbnail(props) {
    const artwork = props

    const handleClick = (e) => {
        e.preventDefault()
        e.stopPropagation()       
    
        props.handleFavourites(e)

    }

    const navigate = useNavigate()

    return (
        <Wrapper  opacity={props.favourite} onClick={() => navigate(
            // Pass the artwork props to the route
            `/artwork/${artwork.id}`, { state: JSON.stringify(artwork) })}>

            <button
                className="btnFav"
                alt="Add to favourites"
                title="Add to favourites"
                value={props.id}
                type="submit"

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

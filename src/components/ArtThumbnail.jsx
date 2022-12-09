import { Wrapper, ThumbnailImage } from "./styled/Artwork.styles"
import { useNavigate } from "react-router-dom"

function ArtThumbnail(props) {
    const artwork = props

    const handleClick = (e) => {
        // e.preventDefault()

        props.handleFavourites(e)
    }

    const navigate = useNavigate()

    return (
        <Wrapper opacity={props.favourite} onClick={() => navigate(
            // Pass the component props to the route
            `/artwork/${artwork.id}`, { state: artwork })}>

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

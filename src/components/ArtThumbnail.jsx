
import { useState } from "react"
import { Wrapper, ThumbnailImage } from "./styled/Artwork.styles"



function ArtThumbnail(props) {

    const [favourite, setFavourite] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
       
        //check favourite
        if (favourite){
            setFavourite(false)
        } else {
            setFavourite(true)
        }

        props.handleFavourites(e)

    }

    return (
        <Wrapper > {/* Add onClick handler to navigate to details page */}

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
              {favourite ? <div>In Favourites</div> : <div>Not in Favourites</div> }

            </div>
        </Wrapper>
    )
}

export default ArtThumbnail

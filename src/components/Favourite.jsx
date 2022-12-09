

import { Title } from "./styled/Text"
import ArtThumbnailList from "./ArtThumbnailList"

function Favourite(props) {

    const { data, handleFavourites } = props

    return (
        <div>
            <Title>My Favourite Art</Title>
            <ArtThumbnailList
                artworkList={data}
                handleFavourites={handleFavourites}
           
                
            />

        </div>)
}

export default Favourite
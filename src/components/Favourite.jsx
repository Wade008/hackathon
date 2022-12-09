

import { Title } from "./styled/Text"
import ArtThumbnailList from "./ArtThumbnailList"

function Favourite(props) {

    const {favList, handleFavourites} = props

    return (
        <div>
            <Title>My Favourite Art</Title>
            <ArtThumbnailList 
            artworkList={favList}  
            handleFavourites={handleFavourites} 
            />

        </div>)
}

export default Favourite
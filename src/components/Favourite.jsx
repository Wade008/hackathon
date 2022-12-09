

import { Title } from "./styled/Text"
import ArtThumbnailList from "./ArtThumbnailList"

function Favourite(props) {

    const favList = props.favList

    return (
        <div>
            <Title>My Favourite Art</Title>
            <ArtThumbnailList artworkList={favList} />

        </div>)
}

export default Favourite
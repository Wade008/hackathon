import styled from "styled-components"

const Wrapper = styled.div`
    position: relative;
    margin: 2rem;
    
    h3 {
        margin-top: .5rem;
        margin-bottom: 0;
    }

    :hover {
        transform: scale(1.05);
        cursor: pointer; // Mock hyperlink when hovering over artwork

        .btn-fav {
            opacity: 1;
        }

    }

    transition: all 0.2s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;

    .artwork-snippet {
        width: 200px;
    }

    .btn-fav {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 1.5rem;
        transition: all 0.2s ease-in-out;
        font-family: 'Inter', sans-serif;
        color: #888;
        text-decoration: none;
        border: none;
        opacity: 0;

        :hover {
            color: #7699F0;
            cursor: pointer;
        }
    }
`

const ThumbnailImage = styled.div`
    background-color: #eee;
    width: 200px;
    height: 250px;
`

function ArtThumbnail(props) {
    return (
        <Wrapper> {/* Add onClick handler to navigate to details page */}
            <button
                className="btn-fav"
                alt="Add to favourites"
                title="Add to favourites">
                &hearts;
                {/* Add onClick handler to add to favourites */}
            </button>
            {/* Add handler to set background image of thumbnail when it loads */}
            <ThumbnailImage></ThumbnailImage>
            <div className="artwork-snippet">
                <h3 className="artwork-title">{props.title}</h3>
                <div className="artwork-artist">{props.artist}</div>
            </div>
        </Wrapper>
    )
}

export default ArtThumbnail

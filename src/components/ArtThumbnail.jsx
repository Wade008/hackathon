
const Wrapper = styled.div`
    position: relative;
    margin: 1rem 2rem;
    padding: 0.75rem;
    border-radius: 0.25rem;
    flex-basis: 100%;
    flex-grow: 1;

    @media screen and (min-width: 768px) {
        flex-basis: 30%;
        max-width: 300px;
    }

    h3 {
        margin-top: 0.5rem;
        margin-bottom: 0;
    }


        .btn-fav {
            opacity: 1;
        }

    }

    transition: all 0.2s ease-out;
    display: flex;
    flex-direction: column;
    align-items: center;

    .btn-fav {
        position: absolute;
        top: 0.75rem;
        right: 0.75rem;
        font-size: 1.5rem;
        transition: all 0.2s ease-in-out;
        font-family: 'Inter', sans-serif;
        color: #fff;
        background-color: transparent;
        text-decoration: none;
        border: none;
        opacity: 0;

        :hover {
            color: #7699F0;
            cursor: pointer;
        }
    }

    .artwork-snippet {
        width: 100%;
    }
`

const ThumbnailImage = styled.img`
    background-color: #eee;
    width: 100%;
    transition: width 0.5s ease-out;
`

function ArtThumbnail(artwork) {
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

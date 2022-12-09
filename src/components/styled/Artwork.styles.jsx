import styled from "styled-components"


export const ArtworkList = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding: 0 2rem 2rem;
`

export const Wrapper = styled.div`
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
:hover {
    transform: scale(1.05);
    cursor: pointer; // Mock hyperlink when hovering over artwork
    background-color: #f0f0f0;
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
    top: 1.2rem;
    right: 2.0rem;
    font-size: 1.5rem;
    transition: all 0.2s ease-in-out;
    font-family: 'Inter', sans-serif;
    color: #7699F0;
    background-color: transparent;
    text-decoration: none;
    border: none;
    opacity: ${props => props.opacity === 1 ? 1 : 0} ;
    :hover {
        color: #7699F0;
        cursor: pointer;
    }
}

.artwork-snippet {
    width: 100%;
}
`

export const ThumbnailImage = styled.img`
background-color: #eee;
width: 100%;
transition: width 0.5s ease-out;
`

export const ArtworkDetails = styled.div`
margin: 0 auto;
padding: 2rem;
padding-bottom: calc(2rem + 50px);
max-width: 900px;

h2 {
    margin-top: 0;
}

#artwork-info {
    display: flex;
    width: 100%;

    p {
    padding-right: 1rem;
    }
}

#artwork-info > div {
    flex-basis: 50%;
}
`

export const ArtworkFullImage = styled.img`
max-width: 100%;
margin: 0 auto;
`






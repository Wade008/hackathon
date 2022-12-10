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
    color: #d32626;
    background-color: transparent;
    text-decoration: none;
    border: none;
    opacity: ${props => props.opacity === 1 ? 1 : 0} ;
    :hover {
        color: #d32626;
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
padding-top: 0;
padding-bottom: calc(2rem + 50px);
max-width: 700px;

@media screen and (min-width: 1200px) {
    max-width: 900px;
}

h1 {
    margin-bottom: 0;
}

.sc-hLBbgP {
    margin-top: 0;
    padding-top: 0;
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

h1, .sc-hLBbgP, #artwork-info {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

#loading-highres {
    position: absolute;
    padding: 0.25rem 1rem;
    background-color: #00000055;
    height: 2rem;
    display: flex;
    align-items: center;

    .spinner {
        border-color: transparent;
        border-top-color: #fff;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        border-width: 2.5px;
        margin: 0;
        margin-right: .5rem;
    }

    p {
        color: #fff;
        display: inline-block;
        font-size: 1rem;
    }
}
`

export const ArtworkFullImage = styled.img`
display: block;
width: 100%;
margin: 0 auto;
`
import axios from "axios";
import { useLocation } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { Para } from "./styled/Text";
import Spinner from "./Spinner";

const ArtworkDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 2rem;

  h2 {
    margin-top: 0;
  }

  #artwork-info {
    display: flex;
    flex-basis: 50%;
    width: 700px;
  }

  #artwork-info > * {
    flex-basis: 50%;
  }
`

const ArtworkImage = styled.img`
  max-height: 900px;
  max-width: 100%;
`

const ArtItem = () => {
  // Recieve the props from the thumbnail component via route
  const artwork = useLocation().state
  const [details, setDetails] = useState({ ...artwork })
  const [imgSrc, setImgSrc] = useState(artwork.src)
  const [isLoading, setIsLoading] = useState(true)

  const image = useRef()

  useEffect(() => {
    axios
      .get(`/public/collection/v1/objects/${artwork.id}`)
      .then(result => result.data)
      .then(json => {
        setDetails({ ...json })
        setImgSrc(details.primaryImage)
        setIsLoading(false)
      })
  }, [artwork.id, details.primaryImage])

  return (
    <>
      {
        isLoading ? (
          <div>
            <Para>Loading...</Para>
            <Spinner />
          </div>
        ) : (
          <ArtworkDetails>
            <h1>{artwork.title}, {details.objectDate}</h1>
            <h2>{artwork.artist}</h2>
            <ArtworkImage
              src={imgSrc}
              alt={`${artwork.title} by ${artwork.artist}`}
              ref={image}
            ></ArtworkImage>
            <div id="artwork-info">
              <div id="media">
                <p>
                  {details.medium}<br />
                  Dimensions: {details.dimensions}
                </p>
              </div>
              <div id="details">
                <p>
                  Artist Nationality: {details.artistNationality}<br />
                  Years active: {details.artistBeginDate}–{details.artistEndDate}
                </p>
              </div>
            </div>
          </ArtworkDetails>
        )
      }
    </>
  )
}

export default ArtItem;
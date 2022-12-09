import axios from "axios";
import { useLocation } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { Title, Para } from "./styled/Text";
import { Spinner } from "./styled/Spinner.styles";
import { ArtworkDetails, ArtworkFullImage } from "./styled/Artwork.styles"

const ArtItem = () => {
  // Receive the props from the thumbnail component via route (useLocation)
  const artwork = JSON.parse(useLocation().state)
  const [details, setDetails] = useState(artwork)
  const [imgSrc, setImgSrc] = useState(artwork.src)
  const [isLoading, setIsLoading] = useState(true)

  const image = useRef()

  useEffect(() => {
    axios
      .get(`/public/collection/v1/objects/${artwork.id}`)
      .then(result => result.data)
      .then(json => {
        setDetails({ ...json })
        const highRes = json.primaryImage
        setImgSrc(highRes)
        setIsLoading(false)
      })
  }, [artwork.id])

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
            <Title>{artwork.title}, {details.objectDate}</Title>
            <Para>{artwork.artist}</Para>
            <ArtworkFullImage
              src={imgSrc}
              alt={`${artwork.title} by ${artwork.artist}`}
              ref={image}
            ></ArtworkFullImage>
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
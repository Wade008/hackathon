import axios from "axios";
import { useLocation } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { Para } from "./styled/Text";
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
// import styled from "styled-components"
import Title from "./styled/Title"


function Artwork(props) {

    const {isLoading, data} = props

    return (
        <>
            {isLoading ? (
                <div>
                   
                    <p>Loading data...please wait</p>

                </div>

            ) : (
                <div>
                    <Title>An assortment of European Paintings</Title>
                    {data.map((item) => {
                        return (
                            <div key={item.objectID}>
                                <p>Title: {item.title}</p>
                                <p>Artist: {item.artistDisplayName}</p>
                                <img alt="painting" src={item.primaryImageSmall} />
                            </div>
                        )
                    })}


                </div>
            )}

        </>
    )


}

export default Artwork
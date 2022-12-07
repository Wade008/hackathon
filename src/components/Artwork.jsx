// import styled from "styled-components"
import Spinner from "./Spinner"
import Title from "./styled/Title"


<<<<<<< HEAD:src/components/DataTesting.jsx

    const [isLoading, data] = DataApi("/public/collection/v1/search?hasImages=true&departmentId=11&q=paint")
    // console.log(data)
    const allTitles = []
=======
function Artwork(props) {

    const {isLoading, data} = props
>>>>>>> 16c20b7e8c94a6f33a5d41544bc9f66f755dce9f:src/components/Artwork.jsx

    return (
        <>
            {isLoading ? (
                <div>
<<<<<<< HEAD:src/components/DataTesting.jsx
                    <Title>Data Testing</Title>
                    <Spinner/>
=======
                   
                    <p>Loading data...please wait</p>
>>>>>>> 16c20b7e8c94a6f33a5d41544bc9f66f755dce9f:src/components/Artwork.jsx

                </div>

            ) : (
                <div>
                    <Title>An assortment of European Paintings</Title>
                    {data.map((item) => {
                        return (
                            <div key={item.objectID}>
                                <p>Title: {item.title}</p>
                                <p>Artist: {item.artistDisplayName}</p>
<<<<<<< HEAD:src/components/DataTesting.jsx
                                <img src={item.primaryImageSmall} 
                                alt={item.objectID}/>
=======
                                <img alt="painting" src={item.primaryImageSmall} />
>>>>>>> 16c20b7e8c94a6f33a5d41544bc9f66f755dce9f:src/components/Artwork.jsx
                            </div>
                        )
                    })}


                </div>
            )}

        </>
    )


}

export default Artwork
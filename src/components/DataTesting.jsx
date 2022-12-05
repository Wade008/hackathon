// import styled from "styled-components"
import Title from "./styled/Title"
import DataApi from "./utils/dataApi"

function DataTesting() {


    const [isLoading, data] = DataApi("/public/collection/v1/search?hasImages=true&departmentId=11&q=paint")
    // console.log(data)


    return (
        <>
            {isLoading ? (
                <div>
                    <Title>Data Testing</Title>
                    <p>Loading data...please wait</p>

                </div>

            ) : (
                <div>
                    <Title>Data Testing</Title>
                    {data.map((item) => {
                        return (
                            <div key={item.objectID}>
                                <p>Title: {item.title}</p>
                                <p>Artist: {item.artistDisplayName}</p>
                                <img src={item.primaryImageSmall} 
                                alt={item.objectID}/>
                            </div>
                        )
                    })}


                </div>
            )}

        </>
    )


}

export default DataTesting
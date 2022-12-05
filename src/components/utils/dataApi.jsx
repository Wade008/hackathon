
import { useEffect, useState } from "react"
import axios from "axios"



const DataApi = (url) => {
    const [searchTerm, setSearchTerm] = useState("")
    const [artData, setArtData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        async function getArt() {

            try {
                const resId = await axios.get(url);

                const dataIDs = resId.data["objectIDs"].slice(0, 20);
                const dataArr = [];
                for (const id of dataIDs) {
                    const resData = await axios.get(`/public/collection/v1/objects/${id}`)

                    const artData = resData.data
                    //destructure to only access the relevant fields
                    const subData = (({ objectID, primaryImageSmall, title, artistDisplayName }) => ({ objectID, primaryImageSmall, title, artistDisplayName }))(artData);

                    dataArr.unshift(subData)

                }

                setArtData(dataArr.reverse())
                setIsLoading(false)

            } 

            catch (err) {

                console.log(err)
            }

        }

        getArt();

    }, [url])

    return [isLoading, artData, setSearchTerm]

}

export default DataApi
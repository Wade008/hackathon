
import { useEffect, useState } from "react"
import axios from "axios"


const DataApi = (url) => {

    const [artData, setArtData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        async function getArt() {

            try {
                const resId = await axios.get(url);

                const dataIDs = resId.data["objectIDs"].slice(0, 50);
                const dataArr = [];

                const requests = dataIDs.map(id => {
                    return axios.get(`/public/collection/v1/objects/${id}`)
                })

                const responses = await Promise.all(requests)

                for (const response of responses) {
                    // const resData = axios.get(`/public/collection/v1/objects/${id}`)

                    const artData = response.data

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

    return [isLoading, artData]

}

export default DataApi
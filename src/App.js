
import {
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    Route,
    RouterProvider
} from "react-router-dom"
import { useState } from "react"
import Home from "./components/Home"
import NavBar from "./components/mui/NavBar"
import Artwork from "./components/Artwork"
import Search from "./components/Search"
import Favourite from "./components/Favourite"
import DataApi from "./components/utils/dataApi"
import Footer from "./components/Footer"
import NotFound from "./components/NotFound/NotFound"
import { unstable_batchedUpdates } from "react-dom"

function App() {


    const [isLoading, data] = DataApi("/public/collection/v1/search?hasImages=true&departmentId=11&q=paint")

    // console.log(data)

    const [favourites, setFavourites] = useState([])

    const handleFavourites = (e) => {

        
        const artObject = data.find(item => {
            return item.objectID == e.target.value
        })

        console.log(artObject)

        // const index = favourites.findIndex(favourite => {
        //     return favourite.objectID === artObject.objectID
        // })

        // if (!index) {
        //    setFavourites((prev)=>{
        //     return [...prev, artObject]
        //    })
        // } else {
        //     const update = favourites.splice(index,1)

        //     setFavourites(update)

        // }

        // console.log(favourites)
    }


    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainPage />}>
                <Route path="/" element={<Home />} />
                <Route path="artwork" element={<Artwork
                    isLoading={isLoading}
                    data={data}
                    handleFavourites={handleFavourites}
                />}
                />
                <Route path="search" element={<Search data={data} />} />
                <Route path="favourites" element={<Favourite />} />
            </Route>
        )

    )

    return (
        <div className="App">

            <RouterProvider router={router} />

        </div>
    )
}


function MainPage() {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}






export default App
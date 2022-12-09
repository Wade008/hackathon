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
import NotFound from "./components/NotFound"
import Header from "./components/Header";

function App() {
    const [isLoading, data, setArtData] = DataApi();

    const [favourites, setFavourites] = useState([])

    const handleFavourites = (e) => {

        const artObject = data.find(item => {
            return item.objectID === +e.target.value
        })


        const found = favourites.find(favourite => {
            return favourite.objectID === artObject.objectID
        })

        if (found == null) {
            // set favourite to true
            artObject["favourite"] = 1;

            // update favourites
            setFavourites([artObject, ...favourites]
            )

            // update data state
            setArtData(current => current.map(object => {
                if (object.objectID === artObject.objectID) {
                    return { ...object, favourite: 1 }
                }
                
                return object
            }))

            console.log(data)



        } else {
            // set favourite to true
            artObject["favourite"] = 0;
            const updatedFavourites = favourites.filter((favourite) => {
                return favourite.objectID !== artObject.objectID
            })
            // update favourites
            setFavourites(updatedFavourites)

            // update data state
            setArtData(current => current.map(object => {
                if (object.objectID === artObject.objectID) {
                    return { ...object, favourite: 0 }
                }
                return object
            }))

        }

    }
    // console.log(favourites)

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainPage />} errorElement={<NotFound />}>
                <Route path="/" element={<Home />} />
                <Route path="artwork" element={<Artwork
                    isLoading={isLoading}
                    data={data}
                    handleFavourites={handleFavourites}
                />}
                />
                <Route path="search" element={<Search data={data} />} />
                <Route path="favourites" element={<Favourite
                    data={favourites}
                    handleFavourites={handleFavourites}
                />} />
            </Route>
        )

    )

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

function MainPage() {
    return (
        <>
            <Header />
            <NavBar />
            <Outlet />
            <Footer />
        </>
    );
}

export default App;

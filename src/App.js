
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider
} from "react-router-dom"

import Home from "./components/Home"
import NavBar from "./components/mui/NavBar"
import Artwork from "./components/Artwork"
import Search from "./components/Search"
import DataApi from "./components/utils/dataApi"
import Footer from "./components/Footer"
import NotFound from "./components/NotFound/NotFound"

function App() {


  const [isLoading, data] = DataApi("/public/collection/v1/search?hasImages=true&departmentId=11&q=paint")

  console.log(data)

  const router = createBrowserRouter(
      createRoutesFromElements(
          <Route path="/" element={<MainPage />}>
              <Route path="/" element={<Home />} />
              <Route path="artwork" element={<Artwork
                  isLoading={isLoading}
                  data={data}
              />}
              />
              <Route path="search" element={<Search />} />
              <Route path='/*' element={<NotFound />} />
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
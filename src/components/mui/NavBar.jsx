
import { Link } from "react-router-dom";
import { AppBar, Box, Button, Container, Toolbar, InputBase } from "@mui/material"

function NavBar(props) {


    const { filterArt, userInput } = props

    const handleChange =(e) =>{

        filterArt(e)

    }
  

    const NavItems = [
        {
            title: "Home",
            LinkTo: "/",
        },
        {
            title: "Artwork",
            LinkTo: "artwork",
        },
        {
            title: "Favourites",
            LinkTo: "favourites",
        },
    ]


    return (
        <>
            <AppBar position="static" sx={{ bgcolor: "#8da9c5" }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: "flex" }}>
                            {NavItems.map((item) => {
                                return (
                                    <Link
                                        key={item.title}
                                        style={{ textDecoration: "none" }}
                                        to={item.LinkTo}
                                    >
                                        <Button
                                            sx={{
                                                my: 2,
                                                color: "white",
                                                display: "block",

                                            }}
                                        >
                                            {item.title}
                                        </Button>
                                    </Link>
                                )
                            })}
                        </Box>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/artwork"
                        >
                        
                                <InputBase
                                    style={{backgroundColor: "#d9e2e2"}}
                                    placeholder="Search..."
                                    // inputProps={{ 'aria-label': 'search' }}
                                    onChange={handleChange}
                                    value={userInput}
                                />
                       
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>

        </>
    )


}

export default NavBar

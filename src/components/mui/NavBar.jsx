import { Link } from "react-router-dom";
import { AppBar, Box, Button, Container, Toolbar } from "@mui/material"


function NavBar() {

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
            title: "Search",
            LinkTo: "search",
        },
        {
            title: "Favourites",
            LinkTo: "favourites",
        },
    ]


    return (
        <AppBar position="static" sx={{bgcolor:"#8da9c5"}}>
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
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar

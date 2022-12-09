
import { Link } from "react-router-dom";
import { AppBar, Box, Button, Container, Toolbar, styled, alpha, InputBase } from "@mui/material"



function NavBar(props) {

    

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));
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
                    <Search>
                        <SearchIconWrapper>
            
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>


                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar

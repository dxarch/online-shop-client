import React from 'react';
import {useNavigate} from "react-router-dom";
import {
    AppBar,
    Box, Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography
} from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {SettingsEnum} from "../app/auth/types/settings.enum";
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchBarComp from "./search-bar.comp";
import {PagesEnum} from "../app/auth/types/pages.enum";

const pages = ['products'];

const NavbarComp = () => {
    const navigate = useNavigate();

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    }

    const handleCloseUserMenu = (field: string) => {
        switch (field) {
            case SettingsEnum.account:
                // navigate("/profile");
                break;
            case SettingsEnum.myOrders:
                // navigate("/orders/profile");
                break;
            case SettingsEnum.logout:
                // dispatch(logout());
                window.localStorage.removeItem("token");
                // navigate("/");
                break;
            default:
                break;
        }
        setAnchorElUser(null);
    }

    const handlePageNavigate = (page: string) => {
        switch (page) {
            case PagesEnum.products:
                navigate("/products");
                break;
            case PagesEnum.home:
                navigate("/");
                break;
            default:
                break;
        }
    }

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const token = localStorage.getItem("token");
    let isAuth = false;
    if (token) {
        isAuth = true;
    }

    const enumSettings = Object.values(SettingsEnum).slice(0, 3);

    return (
        <>
            <AppBar position="relative" sx={{mb: 2}}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        SHOP
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        SHOP
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => handlePageNavigate(page)}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <SearchBarComp />

                    <Box sx={{flexGrow: 0, display: 'flex', gap: '15px'}}>
                        <IconButton>
                            <ShoppingCartOutlinedIcon fontSize="medium" sx={{color: "white"}}/>
                        </IconButton>
                        <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                            <AccountCircleOutlinedIcon fontSize="large" sx={{color: "white"}}/>
                        </IconButton>
                        <IconButton>
                            <LogoutIcon fontSize="medium" sx={{color: "white"}}/>
                        </IconButton>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {enumSettings.map((setting) => (
                                <MenuItem key={setting} value={setting} onClick={() => handleCloseUserMenu(setting)}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar></>
    );
};

export default NavbarComp;
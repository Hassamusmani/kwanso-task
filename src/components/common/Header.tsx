import React from 'react';

import { AppBar, Container, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Button } from '@mui/material';

import TaskIcon from '@mui/icons-material/Task';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const pages = [
    { label: 'Task List', href: '/list-tasks' },
    { label: 'Create Task', href: '/create-task' },
    { label: 'Bulk Delete', href: '/bulk-delete' }
];

const StyledTypography = styled(Typography)`
  color: inherit;
  cursor: pointer;
`;

const Header = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (href?: string) => {
        setAnchorElNav(null);
        if (href) navigate(href);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: { xs: 'flex-start', md: "space-between" } }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <TaskIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <StyledTypography
                            variant="h6"
                            noWrap
                            onClick={() => navigate("/")}
                            sx={{
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                            }}
                        >
                            TASK APP
                        </StyledTypography>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
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
                            onClose={() => handleCloseNavMenu()}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map(({ label, href }) => (
                                <MenuItem
                                    key={label}
                                    onClick={() => handleCloseNavMenu(href)}
                                    selected={pathname === href}
                                >
                                    <Typography textAlign="center">{label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <TaskIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <StyledTypography
                            variant="h5"
                            noWrap
                            onClick={() => navigate("/")}
                            sx={{
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                textDecoration: 'none',
                            }}
                        >
                            TASK APP
                        </StyledTypography>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {pages.map(({ label, href }) => (
                            <Button
                                key={label}
                                onClick={() => handleCloseNavMenu(href)}
                                sx={{
                                    my: 2,
                                    color: pathname === href ? 'black' : 'white',
                                    display: 'block',
                                }}
                            >
                                {label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
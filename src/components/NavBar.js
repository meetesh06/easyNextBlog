import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { useRouter } from 'next/router'

import {
    motion
} from 'framer-motion';

import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'

import {
  SITENAME
} from '@/config'

import pagesData from "@/pagesData.json";
import styled from '@emotion/styled';
import { ToggleButton } from '@mui/material';
import { DarkMode, FormatBold, LightMode } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';

import { getMode, toggleMode } from '@/store/darkModeSlice';
import LinkMui from '@mui/material/Link';

const PREFIX = 'NavBar';

const classes = {
  appbar: `${PREFIX}-appbar`,
  navLink: `${PREFIX}-navlink`,
  navlinkSelected: `${PREFIX}-navlinkSelected`,
  toggleButton: `${PREFIX}-toggleButton`,
};

const Root = styled('div')((
  {
    theme
  }
) => ({
    [`& .${classes.appbar}`]: {
      marginBottom: theme.spacing(2),
      padding: theme.spacing(1),
    },
    [`& .${classes.navLink}`]: {
      textDecoration: 'none',
      marginRight: theme.spacing(1),
      color: theme.palette.mode === "light" ? "#d0d0d0" : "gray",
      fontWeight: 'bold'
    },
    [`& .${classes.toggleButton}`]: {
      // marginLeft: theme.spacing(1),
      color: theme.palette.mode === "light" ? "yellow" : "gray",
    },
    [`& .${classes.navlinkSelected}`]: {
      textDecoration: 'none',
      marginRight: theme.spacing(1),
      color: theme.palette.mode === "light" ? '#fff' : "#fff",
      fontWeight: 'bold'
    },

  }
))



function NavBar() {
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const router = useRouter();
  const currMode = useSelector(getMode);

  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const container = {
    visible: {
      transition: {
        staggerChildren: 0.04
      }
    }
  }

  return (
    <Root>
      <AppBar elevation={currMode === "light" ? undefined : 0} className={classes.appbar} position="static" color="primary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            <Box sx={{ display: { xs: 'inline-block', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="open menu"
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
                
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pagesData.pages.map((page) => (
                  <Link
                  key={`nav-${page[1]}`}
                    href={page[1]}
                    >
                    <MenuItem
                      component="a"
                      disabled={page[2]}
                      onClick={handleCloseNavMenu}
                    >
                      <Typography textAlign="center">{page[0]}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>

            <motion.div
              key="header-logo"
              style={{
                  flexGrow: 1
              }}
              className="App"
              initial="hidden"
              animate="visible"
              variants={container}
            >
              <div className="container">
                <AnimatedText type="heading1" text={SITENAME} />
              </div>
            </motion.div>


            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {pagesData.pages.map((page) => {
                const currPath = router.pathname === page[1]
                return <Link
                  key={`nav-${page[1]}`}
                  href={page[1]}
                  >
                    <a
                      className={currPath ? classes.navlinkSelected : classes.navLink}
                    >
                      <Typography
                        disabled={page[2]}
                        className={currPath ? classes.navlinkSelected : classes.navLink}
                      >
                        {page[0]}
                      </Typography>

                    </a>
                </Link>
              })}
            </Box>
            <Box>
              <IconButton
                size="large"
                aria-label="toggle darkmode"
                className={classes.toggleButton}
                onClick={() => { 
                  let toggleTo = currMode === "light" ? "dark" : "light";
                  localStorage.setItem('mode', toggleTo)
                  dispatch(toggleMode(toggleTo));
                }} 
                color="inherit"
              >
                {
                  currMode === "light" ? <LightMode /> : <DarkMode />
                }
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Root>
  );
}
export default NavBar;
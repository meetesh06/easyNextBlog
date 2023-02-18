
import React, { useEffect, useState } from 'react';
import Head from 'next/head'

import DisplayCard from './DisplayCard'
import NavBar from './NavBar'
import { Box, createTheme, CssBaseline, Grid, responsiveFontSizes, ScopedCssBaseline, ThemeProvider } from '@mui/material';
import BlogNavigation from './BlogNavigation';

import { motion } from 'framer-motion';

import {
  leftSide
} from '@/config'

import { Container } from '@mui/system';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getMode, toggleMode } from '@/store/darkModeSlice';

function PageLayout(props) {
  const router = useRouter();
  const isMain = router.pathname === "/"
  const isBlog = router.pathname === "/blog"
  const isPost = router.pathname === "/blog/[pid]"

  const navTrans = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return(
    <React.Fragment>
      <NavBar />
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={isMain ? 6 : 4} md={4} lg={isMain ? 3 : 2}>
            {
              (isBlog || isPost) && 
              <motion.div
                variants={navTrans}
                initial="hidden"
                animate="show"
              >
                <BlogNavigation />
              </motion.div>
            }
            <Box
              sx={{ display: { xs: isMain || isBlog ? 'block' : 'none', md: 'block' } }}
              >
              <DisplayCard
                makeTitleH1={!isPost}
                imageUri={leftSide.image}
                title={leftSide.name} 
                text={isMain ? leftSide.about : leftSide.getInTouchText}
                links={isMain ? undefined : leftSide.contactLinks}
                small={!isMain}
                />
            </Box>
            {
              isMain && 
              <DisplayCard 
                title="Get it touch?" 
                text={leftSide.getInTouchText}
                links={leftSide.contactLinks}
              />
            }
          </Grid>
          <Grid item xs={12} sm={isMain ? 6 : 8} md={8} lg={isMain ? 9 : 10}>
            {props.children}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
      
  );
}

function Layout(props) {
  const currMode = useSelector(getMode);

  const light = createTheme({
    palette: {
      mode: 'light',
      background: {
        paper: '#e1e5f2',
        // default: '#6a00f4'
      },
      primary: {
        main: "#2274a5"
      },
      // secondary: {
      //   main: indigo[600]
      // },
      text: {
        primary: '#010334',
        // disabled: '#f0f0f0',
        secondary: '#000'
      }
    } 
  });

  const dark = createTheme({
    palette: {
      mode: 'dark',
    } 
  });
  const dispatch = useDispatch();

  useEffect(() => {
    let localTheme = localStorage.getItem('mode')
    if (currMode !== localTheme) 
      dispatch(toggleMode(localTheme));
  }, [])
  let theme = currMode === "light" ? light : dark

  theme = responsiveFontSizes(theme);

  return(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
            <ScopedCssBaseline enableColorScheme>
              <Box sx={{ height: "100vh", overflow: "scroll"  }}>
                <PageLayout>
                  {props.children}
                </PageLayout>
              </Box>
            </ScopedCssBaseline>
        </React.Fragment>
      </ThemeProvider>

      </main>
    </>
  );
}

export default Layout;

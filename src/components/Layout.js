
import React from 'react';
import Head from 'next/head'

import DisplayCard from './DisplayCard'
import NavBar from './NavBar'
import { Box, createTheme, CssBaseline, Grid, responsiveFontSizes, ScopedCssBaseline } from '@mui/material';
import RightSidebar from './RightSidebar';

import {
  leftSide
} from '@/config'

import { Container } from '@mui/system';
import { useRouter } from 'next/router';

function PageLayout(props) {
  const router = useRouter();
  const isMain = router.pathname === "/"
  const isBlog = router.pathname === "/blog"

  return(
    <React.Fragment>
      <NavBar />
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={isMain ? 6 : 4} md={4} lg={isMain ? 3 : 2}>

            {
              !isMain && 
              <RightSidebar />
            }
            <Box
              sx={{ display: { xs: isMain || isBlog ? 'block' : 'none', md: 'block' } }}
              >
              <DisplayCard
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
  const themeDark = createTheme({
    palette: {
      mode: 'dark'
    } 
  });

  let theme = themeDark;

  theme = responsiveFontSizes(theme);

  return(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ScopedCssBaseline enableColorScheme>
          <React.Fragment>
            <CssBaseline />
              <Box sx={{ height: "100vh", overflow: "scroll"  }}>
                <PageLayout>
                  {props.children}
                </PageLayout>
              </Box>
          </React.Fragment>
        </ScopedCssBaseline>
      </main>
    </>
  );
}

export default Layout;

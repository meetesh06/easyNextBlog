import '@/styles/globals.css'
import { Provider, useSelector } from 'react-redux';

import { wrapper } from "../store/store";
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from "@mui/material";

import Layout from "../components/Layout"
import { indigo, red } from '@mui/material/colors';
import { getMode } from '@/store/darkModeSlice';
import { useEffect, useState } from 'react';

const clientSideEmotionCache = createEmotionCache();


function ThemeWrapper (props){
  const currMode = useSelector(getMode);

  const [mode, setMode] = useState("dark")

  useEffect(() => {
    console.log("currMode: ", currMode)
    setMode(currMode)
  }, [currMode])

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
  

  return (
    <ThemeProvider theme={mode === "light" ? light : dark}>
        <CssBaseline />
          <Layout>
            {props.children}
          </Layout>
      </ThemeProvider>
  )
}


function App({ Component, emotionCache = clientSideEmotionCache, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  


  return (
    <CacheProvider value={emotionCache}>
      <Provider store={store}>
        <ThemeWrapper>
          <Component {...pageProps} />
        </ThemeWrapper>
      </Provider>
    </CacheProvider>
  );
}

export default App;


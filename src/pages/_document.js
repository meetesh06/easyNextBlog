import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "../utils/createEmotionCache";
import Script from "next/script";
import { GTAG_ADDR, GTAG_SCRIPT } from "@/config";

export default class MyDocument extends Document {
 render() {
   return (
     <Html lang="en">
       <Head>
        {
          GTAG_ADDR && <script async src={GTAG_ADDR}></script>
        }

        {
          GTAG_SCRIPT &&
          <script>
            {GTAG_SCRIPT}
          </script>
        }
        

        {this.props.emotionStyleTags}
       </Head>
       <body>
         <Main />
         <NextScript />
       </body>
     </Html>
   );
 }
}

MyDocument.getInitialProps = async (ctx) => {
 const originalRenderPage = ctx.renderPage;

 const cache = createEmotionCache();
 const { extractCriticalToChunks } = createEmotionServer(cache);

 ctx.renderPage = () =>
   originalRenderPage({
     enhanceApp: (App) =>
       function EnhanceApp(props) {
         return <App emotionCache={cache} {...props} />;
       },
   });

 const initialProps = await Document.getInitialProps(ctx);

 const emotionStyles = extractCriticalToChunks(initialProps.html);
 const emotionStyleTags = emotionStyles.styles.map((style) => (
   <style
     data-emotion={`${style.key} ${style.ids.join(" ")}`}
     key={style.key}
     dangerouslySetInnerHTML={{ __html: style.css }}
   />
 ));

 return {
   ...initialProps,
   emotionStyleTags,
 };
};

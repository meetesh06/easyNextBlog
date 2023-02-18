
import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {JSONPath} from 'jsonpath-plus';
import ReactMarkdown from 'react-markdown';
import Divider from '@mui/material/Divider';

import { Skeleton } from '@mui/material';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import xonokai from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";
import Chip from '@mui/material/Chip';

import Tooltip from '@mui/material/Tooltip';

import LinearProgress from '@mui/material/LinearProgress';
import IconButton from '@mui/material/IconButton';

import blogPostsData from "@/blogPostsData.json";

import {
  motion
} from 'framer-motion';

import { updateCurrentPost } from '@/store/currentPostSlice'

import { Close } from '@mui/icons-material';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { getMode } from '@/store/darkModeSlice';

const PREFIX = 'PostPage';

const classes = {
  actionBar: `${PREFIX}-actionBar`,
  paper: `${PREFIX}-paper`,
  heading: `${PREFIX}-heading`,
  divider: `${PREFIX}-divider`,
  categoryName: `${PREFIX}-categoryName`,
  dateHolder: `${PREFIX}-dateHolder`,
  markdownImage: `${PREFIX}-markdownImage`,
  markdownContainer: `${PREFIX}-markdownContainer`,
  md_p: `${PREFIX}-md_p`,
  md_h1: `${PREFIX}-md_h1`,
  md_h2: `${PREFIX}-md_h2`,
  md_h3: `${PREFIX}-md_h3`,
  md_h4: `${PREFIX}-md_h4`,
  md_h5: `${PREFIX}-md_h5`,
  md_h6: `${PREFIX}-md_h6`,

};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`& .${classes.actionBar}`]: {
    marginLeft: theme.spacing(2),
  },

  [`& .${classes.paper}`]: {
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(6),
    minHeight: '50vh',
    fontFamily: 'Roboto',
    "& a": {
      textDecoration: "none",
    },
    [theme.breakpoints.down('lg')]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(1),
      padding: theme.spacing(2),
    },
  },

  [`& .${classes.heading}`]: {
    fontSize: theme.typography.pxToRem(40),
    fontWeight: theme.typography.fontWeightBold
  },

  [`& .${classes.divider}`]: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },

  [`& .${classes.categoryName}`]: {
    marginRight: theme.spacing(1),
  },

  [`& .${classes.dateHolder}`]: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(2)
  },

  [`& .${classes.markdownImage}`]: {
    maxWidth: '100%'
  },

  [`& .${classes.markdownContainer}`]: {
    padding: theme.spacing(1)
  },

  [`& .${classes.md_p}`]: {
    fontSize: theme.typography.pxToRem(20),
    color: theme.palette.text.secondary,
    lineHeight: 1.7
  },

  [`& .${classes.md_h1}`]: {
    color: theme.palette.text.secondary,
    lineHeight: 1.7
  },

  [`& .${classes.md_h2}`]: {
    color: theme.palette.text.secondary,
    lineHeight: 1.7
  },

  [`& .${classes.md_h3}`]: {
    color: theme.palette.text.secondary,
    lineHeight: 1.7
  },

  [`& .${classes.md_h4}`]: {
    color: theme.palette.text.secondary,
    lineHeight: 1.7
  },

  [`& .${classes.md_h5}`]: {
    color: theme.palette.text.secondary,
    lineHeight: 1.7
  },

  [`& .${classes.md_h6}`]: {
    color: theme.palette.text.secondary,
    lineHeight: 1.7
  },

}));


function PostContainer({ title, category, created, postText, description, lineage }) {
  function ImageRenderer(props) {
    return <img {...props} className={classes.markdownImage} />
  }
  const pageVariants = {
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: "10vh"
    },
    FadeIn: {
      opacity: 1
    },
    FadeOut: {
      opacity: 0
    }
  }
  const currMode = useSelector(getMode);

  const pageTransitions = {
    duration: .2,
    type: "backInOut",
  }
  return(
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransitions}>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description}/>
          <meta name="keywords" content={category + ", " + lineage}/>
        </Head>
        <Root>
          <div className={classes.actionBar}>
            <Tooltip title="Close" aria-label="close" arrow>
                <Link href="/blog">
                  <IconButton color="primary" aria-label="close" size="large">
                    <Close />
                  </IconButton>
                </Link>
            </Tooltip>
          </div>
          <Paper
            component={motion.div}
            initial="FadeOut"
            animate="FadeIn"
            exit="FadeOut"
            
            variants={pageVariants}
            transition={pageTransitions}
            className={classes.paper} elevation={currMode === "light" ? 5 : 3}>
            <div>
              <Typography
                variant="h2"
                component="h1">
                {title}
              </Typography>
              <span className={classes.dateHolder}>
                <Chip className={classes.categoryName} label={category} />
                <Typography variant="body2" >
                  created on {created}
                </Typography>
              </span>
              <Divider className={classes.divider} variant="middle" />
              <div className={classes.markdownContainer}>

                <ReactMarkdown
                  className={classes.md_p}
                  components={{
                    img: ImageRenderer,
                    code({node, inline, className, children, ...props}) {
                      const match = /language-(\w+)/.exec(className || '')
                      return (
                        <SyntaxHighlighter
                          wrapLines
                          wrapLongLines
                          children={String(children).replace(/\n$/, '')}
                          style={xonokai}
                          language={match ? match[1] : undefined}
                          PreTag="div"
                          {...props}
                        />
                      )
                    },
                    h1: ({children}) => {
                      return <Typography variant='h3' className={classes.md_h1}>
                        {String(children)}
                      </Typography>
                    },
                    h2: ({children}) => {
                      return <Typography variant='h4' className={classes.md_h2}>
                        {String(children)}
                      </Typography>
                    },
                    h3: ({children}) => {
                      return <Typography variant='h5' className={classes.md_h3}>
                        {String(children)}
                      </Typography>
                    },
                    h4: ({children}) => {
                      return <Typography variant='h6' className={classes.md_h4}>
                        {String(children)}
                      </Typography>
                    },
                    h5: ({children}) => {
                      return <Typography variant='h6' className={classes.md_h5}>
                        {String(children)}
                      </Typography>
                    },
                    h6: ({children}) => {
                      return <Typography variant='h6' className={classes.md_h6}>
                        {String(children)}
                      </Typography>
                    },
                    
                  }}            
                  // remarkPlugins={[remarkMath]}
                  // rehypePlugins={[rehypeKatex]}
                  >
                  {postText}
                </ReactMarkdown>
              </div>
            </div>
          </Paper>
        </Root>
    </motion.div>
  );
}

function PostPage(props) {
  // Hooks
  const router = useRouter()
  const { pid } = router.query;
  const { posts } = blogPostsData

  const dispatch = useDispatch();

  useEffect(() => {
    if (pid) {
      let post = JSONPath({path: `$.[?(@.id === "${pid}")]`, json: posts})
      if (post.length > 0) {
        post = post[0]
        dispatch(updateCurrentPost({pid: post.id, refId: post.refId, lineage: post.lineage}));
      }
    }
  }, [pid])
  
  let id = undefined;
  
  if (pid) {
    id = pid.split('-')[0];
  }

  const renderSkeleton = (msg) => (
    <div>
      <Typography gutterBottom variant="h6" component="h2">
        {msg}
      </Typography>
      <Skeleton className={classes.paper} variant="rectangular" width={"100%"} height={"60vh"} />
    </div>
  )

  if (!pid) {
    return <LinearProgress color="secondary" />
  } else {
    const { posts } = blogPostsData
    let post = JSONPath({path: `$.[?(@.id === "${pid}")]`, json: posts})
    
    if (post.length == 0) {
      return renderSkeleton("Post not found, please drop me an email so I can have a look, Thank you 👻")
    }
    return <PostContainer {...post[0]} />
  }
}

export default PostPage;

export async function getStaticPaths() {
  const paths = []
  blogPostsData.posts.forEach((post) => {
    paths.push({ params: { pid: post.id.toString() } });
  });

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  return {
    props: { },
  }
}
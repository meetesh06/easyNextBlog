import React, { useEffect } from 'react';

import { Divider, Hidden, Typography } from '@mui/material';

import { useSelector } from 'react-redux';
import { selectCurrentPost } from '../../store/currentPostSlice';
// import { getPostsJson } from '../../store/allPostsSlice';
import { Masonry } from '@mui/lab';

import { parsePostUrl, sortPosts } from "../../helper"

import {motion} from 'framer-motion';
import DisplayCard from '@/components/DisplayCard';

import blogPostsData from "@/blogPostsData.json";

import { DESCRIPTION_BLOG, TITLE_BLOG } from "@/config";
import Head from 'next/head';
import moment from 'moment';

const sortedPosts = blogPostsData.posts.sort(sortPosts);  
const years = []
let last = ""
sortedPosts.forEach((p) => {
  let curr = moment(p.created, 'DD-MM-YYYY').toDate().getFullYear().toString();
  if (last !== curr) years.push(curr)
  last = curr;
})

const { posts } = blogPostsData;

const getByYear = (year) => {
  let res = []
  posts.forEach((p) => {
    if (moment(p.created, 'DD-MM-YYYY').toDate().getFullYear().toString() == year) {
      res.push(p)
    }
  })
  return res
}


function Blog(props) {
  const staticContentVariants = {
    hidden: {opacity: 0, scale: 0.90 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    },
    out: {
      opacity: 0,
      scale: 0.90,
      transition: {
        duration: 0.3
      }
    }
  }

  // Hooks
  let post = useSelector(selectCurrentPost);
  useEffect(() => {
    if (post) {
      const element = document.getElementById(`post-${post.refId}`);
      if (element) element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }
  }, [post]);

  

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      exit="out"
      variants={staticContentVariants}
    >
      <Head>
        
        <title>{ TITLE_BLOG  }</title>
        <meta name="description" content={DESCRIPTION_BLOG}/>
      </Head>
    <Hidden mdUp>
      <Divider sx={(theme) => { return { marginBottom: theme.spacing(1), marginTop: theme.spacing(1) } }}/>
    </Hidden>

    {
      years.map((year) => {
        return <div>
          <Typography variant='caption'>
            {year}
          </Typography>
          <Masonry 
            columns={{ xs: 1, sm: 2, md: 3, lg: 3 }}
            spacing={0}
            >
              {
                getByYear(year).map((post, index) => (
                  <DisplayCard 
                    key={`post-${index}`} 
                    id={`post-${post.refId}`}
                    title={post.title} 
                    text={post.description} 
                    created={post.created}
                    href={parsePostUrl(post.id, post.title)}
                    />
                ))
              }
            </Masonry>
          </div>
      })
    }
    
      </motion.div>
    );
}

export default Blog;


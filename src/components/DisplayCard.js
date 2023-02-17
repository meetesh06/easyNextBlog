import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, CardMedia, Divider } from '@mui/material';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { getMode } from '@/store/darkModeSlice';

import blogPic from '../../public/blog-pic.webp'

import Image from 'next/image'

const PREFIX = 'DisplayCard';

const classes = {
  card: `${PREFIX}-card`,
  newsItem: `${PREFIX}-newsItem`,
  cardTitle: `${PREFIX}-title`,
  cardDate: `${PREFIX}-date`,
  cardText: `${PREFIX}-text`,
  cardButton: `${PREFIX}-button`,
  newsItemText: `${PREFIX}-newsItemText`,
  cardDivider: `${PREFIX}-cardDivider`,
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`&.${classes.card}`]: {
    // width: 325,
    padding: theme.spacing(1)
  },

  [`& .${classes.newsItem}`]: { 
    marginRight: theme.spacing(1),
    fontWeight: 'bold', 
    color: theme.palette.mode === "light" ? theme.palette.primary.main : theme.palette.primary.dark
  },

  [`& .${classes.cardTitle}`]: { 
    color: theme.palette.mode === "light" ? theme.palette.primary.main : undefined
  },

  [`& .${classes.cardDate}`]: { 
    color: theme.palette.primary.dark
  },

  [`& .${classes.cardText}`]: { 
    color: theme.palette.text.secondary,
    marginBottom: 0
  },

  [`& .${classes.cardButton}`]: { 
    color: theme.palette.primary.dark,
    fontWeight: "bold"
  },

  [`& .${classes.newsItemText}`]: { 
    color: theme.palette.text.secondary
  },

  [`& .${classes.cardDivider}`]: { 
    marginBottom: theme.spacing(2)
  },
}));

const StaticCardContent = (props) => {
  const { title, text, textList, created } = props;

  const ref = useRef(null)
  const isInView = useInView(ref)

  const controls = useAnimation();
  const listContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [isInView]);

  return(
    <CardContent>
      {
        created && 
        <Typography variant="caption" className={classes.cardDate}>
          {created}
        </Typography>
      }
      {
        title && 
        <Typography gutterBottom variant="h5" component="h5" className={classes.cardTitle}>
          {title}
        </Typography>
      }

      {
        text &&
        <Typography paragraph variant='body1' className={classes.cardText}>
          {text}
        </Typography>
      }
      {
        textList && 
        <Typography 
          ref={ref}
          component={motion.ul}
          variants={listContainer}
          initial="hidden"
          animate={controls}
          // animate="show"
          variant="body1"
          
          style={{
            padding: 0
          }}
          >
          {
            textList.map((data,index) => 
              <motion.li key={`${data[0]}-${index}`} style={{listStyle: 'none'}} variants={listItem}>
                <div className={classes.newsItem}>
                  {data[0]}
                </div>
                <div className={classes.newsItemText}>
                  {data[1]}
                </div>
              </motion.li>
            )
          }
        </Typography>
      }
      
    </CardContent>
  );

}

export default function DisplayCard(props) {

  const { title, links, index, imageUri,  href, id } = props
  const [hovered, setHovered] = useState(false);

  const currMode = useSelector(getMode);

  
  return (
    <Root className={classes.card} >

      <Card
        variant={currMode === 'light' ? "outlined" : "elevation" }
        key={index}
        layout 
        component={motion.div}
        whileHover="hover"
        variants={{
          hover: {
            scale: 1.02,
          }
        }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        // raised={hovered}
        
        >
        {
          imageUri &&
            <Image
              // component={Image}
              src={blogPic}
              alt={title}
              placeholder="blur"
            />
        }
        {
          href ? (
            <div id={id ? id : undefined}>
              <Link href={href}>
                <CardActionArea >
                  <StaticCardContent {...props} />
                </CardActionArea>
              </Link>
            </div>
          ) : <StaticCardContent {...props} />
        }
        
        {
          links && links.length > 0 && (
            <CardActions>
              {
                links.map((link, index) => {
                  return <Button className={classes.cardButton} key={`${link[1]}-${index}`} href={link[0]} target="_blank" size="small">{link[1]}</Button>
                })
              }
            </CardActions>
          )
        }
      </Card>
    </Root>
  );
}
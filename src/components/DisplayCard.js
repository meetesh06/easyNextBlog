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

// import blogPic from '../../public/blog-pic.webp'

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
  cardAction: `${PREFIX}-cardAction`,
  cardImagePositioner: `${PREFIX}-cardImagePositioner`,
  cardImgHolder: `${PREFIX}-cardImgHolder`,
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

  [`& .${classes.cardAction}`]: { 
    // opacity: 0.2
  },

  [`& .${classes.cardTitle}`]: { 
    color: theme.palette.mode === "light" ? theme.palette.primary.main : undefined,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    fontSize: "1.3rem",
  },

  [`& .${classes.cardDate}`]: { 
    color: theme.palette.primary.dark,
  },

  [`& .${classes.cardText}`]: { 
    color: theme.palette.text.secondary,
    marginBottom: 0,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    fontSize: "0.85rem",
    backgroundColor: theme.palette.mode === "light" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)",
    padding: 10,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
    
  },

  [`& .${classes.cardImagePositioner}`]: { 
    display: 'flex', 
    justifyContent: 'center', 
    position: 'absolute', 
    top: -95, 
    right: 0, 
    left: 0, 
    marginLeft: "auto", 
    marginRight: "auto", 
    textAlign: 'center', 
    padding: 15 
  },

  [`& .${classes.cardImgHolder}`]: {
    border: "solid",
    borderWidth: 5,
    color: theme.palette.mode === "light" ? theme.palette.primary.main : "black", 
    width: 150, 
    height: 150, 
    borderRadius: 150, 
    boxShadow: theme.palette.mode === "light" ? "1px 1px 15px 1px lightgray" : undefined 
  },

  [`& .${classes.cardButton}`]: { 
    color: theme.palette.primary.dark,
    fontWeight: "bold"
  },

  [`& .${classes.newsItemText}`]: { 
    color: theme.palette.text.secondary
  },

  [`& .${classes.cardDivider}`]: { 
    // marginBottom: theme.spacing(2)
  },
}));

const StaticCardContent = (props) => {
  const { title, text, textList, created, makeTitleH1 } = props;

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
        title && 
        <Typography gutterBottom variant="h5" component={makeTitleH1 ? "h1" : "h5"} className={classes.cardTitle}>
          {title}
        </Typography>
      }
      {
        created && 
        <Typography variant="caption" className={classes.cardDate}>
          {created}
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
        {
          imageUri && <div style={{ height: 100, width: 100 }}>
          </div>
        }

      <Card
        variant={currMode === 'light' ? "outlined" : "elevation" }
        key={index}
        layout 
        component={motion.div}
        style={{ 
          position: !imageUri ? undefined : "relative",
          overflow: 'visible'
         }}
        
        >
        {
          imageUri && <div style={{ height: 60, width: 100 }}>
          </div>
        }
        {
          imageUri &&
            <div className={classes.cardImagePositioner}>
              <div className={classes.cardImgHolder}>
                <Image
                  style={{ borderRadius: 150  }}
                  src={imageUri}
                  alt={title}
                  width="150"
                  height="150"
                />
              </div>
            </div>
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
        <Divider />
        
        {
          links && links.length > 0 && (
            <CardActions className={classes.cardAction}>
              {
                links.map((link, index) => {
                  return <Button variant='outlined' className={classes.cardButton} key={`${link[1]}-${index}`} href={link[0]} target="_blank" size="small">{link[1]}</Button>
                })
              }
            </CardActions>
          )
        }
      </Card>
    </Root>
  );
}
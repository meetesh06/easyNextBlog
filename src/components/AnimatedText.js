import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';

// Word wrapper
const Wrapper = (props) => {
  // We'll do this to prevent wrapping of words using CSS
  return <span className="word-wrapper">{props.children}</span>;
};

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedCharacters = (props) => {
  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      y: "200%",
    },
    visible: {
      y: 0,
    }
  };

  const cursor = {
    hidden: {
      opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    visible: {
      opacity: 1,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
    }
  }

  //  Split each word of props.text into an array
  const splitWords = props.text.split(" ");

  // Create storage array
  const words = [];

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word, index) => {
    if (words.length - 1 != index)
    return word.push("\u00A0");
  });

  return (
    <Typography variant="h4" component="h4" sx={{ textAlign: { xs: 'center', md: 'left', overflow: 'hidden' } }}>
      {words.map((word, index) => {
        return (
          <div
            key={`word-${index}`}
            style={{
              display: 'inline-block'
            }}
          >
            {words[index].flat().map((element, index) => {
              return (
                <span
                  key={`navbar-word-${index}`}
                >
                  <motion.span
                    style={{ display: "inline-block", fontWeight: 'bold' }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </div>
        );
      })}

      <div
        key={`word-end`}
        style={{
          display: 'inline-block',
        }}
      >
        <motion.div
          animate={{ 
            backgroundColor: ["#a9b6c4", "#c3ddf7", "#fff"] 
          }}
          transition={{ 
            easings: ["easeIn", "easeOut"],
            repeat: Infinity, 
            repeatType: 'reverse',
            duration: 3, 
          }}
     
          style={{ 
            marginLeft: 3,
            opacity: 1,
            width: 7, 
            height: 7,
            borderRadius: 7,
            backgroundColor: 'white',
            display: 'inline-block'
          }} 
        />
      </div>
    </Typography>
  );
};

export default AnimatedCharacters;

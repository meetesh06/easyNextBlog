export const SITENAME = "Hello World";

export const lightTheme = {
  palette: {
    mode: 'light',
    background: {
      paper: '#e1e5f2',
    },
    primary: {
      main: "#2274a5"
    },
    text: {
      primary: '#010334',
      secondary: '#000'
    }
  } 
};

export const darkTheme = {
  palette: {
    mode: 'dark',
  } 
};

export const leftSide = {
  image: "/blog-pic.webp",
  name: "Meetesh Kalpesh Mehta",
  about: "Hello there! I am a research scholar at IIT Mandi, specializing in the field of compilers. Currently, my research focuses on addressing challenge of warmup times and deoptimization overheads on a JIT compiler for the R Programming Language. In addition to my research, I am passionate about coding in React and have utilized it in creating websites, such as this one. Beyond my computer science pursuits, I enjoy tinkering with Raspberry Pi's and Arduinos during my free time.",
  getInTouchText: "Always looking forward to new emails :)",
  contactLinks: [
    ["mailto:meeteshmehta4@gmail.com","Email"],
    ["https://www.linkedin.com/in/meetesh06/","LinkedIn"],
  ]
}

export const TITLE_BLOG = "Meetesh Mehta's Blog"

export const DESCRIPTION_BLOG = "Welcome to my personal blog, where I document my various interests and activities! As a graduate student at IIT Mandi, I am constantly engaged in research and academic pursuits, particularly in the field of compilers. I am always excited to share my latest findings and insights with fellow enthusiasts in this area. In addition to my academic pursuits, I also enjoy exploring the world of computer programming, with a particular focus on the React library. As an avid coder, I enjoy using this platform to create engaging and dynamic websites that showcase my skills and abilities."

export const GTAG_ADDR = "https://www.googletagmanager.com/gtag/js?id=G-6Z2X65E38W"
export const GTAG_SCRIPT = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-6Z2X65E38W');
`
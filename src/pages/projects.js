import GridPage from "@/components/GridPage"

export const config = {
  disable: false
}
const gridInfo = { xs: 1, sm: 1, md: 3, lg: 3 }


const TITLE = "Interesting Projects 🏴‍☠️ 🏴‍☠️ 🏴‍☠️"
const DESCRIPTION = "Hey there! I'm a research scholar @IIT Mandi working in the area of compilers."


const content = [
  {
    title: "This Site Generator",
    links: [
      ["https://github.com/meetesh06/easyNextBlog", "easyNextBlog"]
    ], 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: "I was fed up with encountering slow, uninspiring websites and blogs, so I took it upon myself to create a website that is both visually appealing and lightning-fast. This site generator produces ready to deploy sites that are near perfect in LCP, FID and CLS.",
    textList: [
      ["React", ""],
      ["NextJS", ""]
    ],
    created: undefined
  },
  {
    title: "The XOPE Programming Language",
    links: [
      ["https://github.com/meetesh06/xope_4.2", "xope"]
    ], 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: "For my final year B.Tech project, I created a user-friendly programming language aimed at making programming accessible to beginners. Using C, I built the parser and code generator from scratch, ensuring full compatibility with the x86_64 architecture.",
    textList: [
      ["C", ""],
      ["X86_64 Assemble", ""],
      ["NASM", ""],
    ],
    created: undefined
  },
  {
    title: "MoodleMan",
    links: [
      ["https://github.com/meetesh06/MoodleMan", "MoodleMan"]
    ], 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: "During my time as a Teaching Assistant for the CS 502 (Compiler Design) course at IIT Mandi, we recognized a need for a streamlined solution to manage moodle submissions. To address this we created a bunch of utilities and a frontend to make evaluations faster.",
    textList: [
      ["Python", ""],
    ],
    created: undefined
  },
  {
    title: "Vasco points to debugger",
    links: undefined, 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: "For my mini project in the CS 611 (Program Analysis) course, I created a debugger for the vasco framework. This tool allows developers to visualize the points-to graph generation process in Java programs, providing valuable insights into program behavior.  Although the link is currently private, I am happy to share it upon request.",
    textList: [
      ["Java, Jimple", ""],
      ["React", ""]
    ],
    created: undefined
  },
  {
    title: "React Native projects",
    links: [
      ["https://github.com/meetesh06/Ecommerce-React-Native-Sample-Application", "ecommerce"],
      ["https://github.com/meetesh06/CampusStory", "CampusStory"],
    ], 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: "I have extensive experience in developing React Native apps, and one notable project is Campus Story. This app was designed to improve communication between students and institutions by providing a streamlined platform for sharing information and updates.",
    textList: [
      ["React Native", ""],
      ["ffmpeg", ""]
    ],
    created: undefined
  },
  {
    title: "LLVM offline analysis framework",
    links: undefined, 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: "This is part of my research tenure at IIT Mandi, I should update it and make it open source after all the formalities are completed. This is a framework that allows for offline analysis and processing of contextually specialized JIT binaries. This is all that can be put here currently ;)",
    textList: [
      ["C++", ""],
      ["LLVM", ""]
    ],
    created: undefined
  },
  {
    title: "Hackintosh",
    links: [
      ["https://github.com/meetesh06/Avita-Liber-v14-EFI", "avita"]
    ], 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: "I love the idea of hacking software to run in places where its not supposed to :) I dabble in hackintosh from time to time and have some EFI configs for some laptops that I have handy.",
    textList: [
      ["ACPI (iASL)", ""]
    ],
    created: undefined
  },
  {
    title: "ElasticSearch",
    links: [
      ["https://github.com/meetesh06/starter_project_es_node_react_mongodb", "starter"]
    ], 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: "I was a intern for a short time for JPTokyo during my B Tech and made this starter template for a elastic search based project.",
    textList: [
      ["Elasticsearch", ""],
      ["node", ""],
      ["mongodb", ""],
      ["React", ""],
      
    ],
    created: undefined
  },
  {
    title: "A Lot more",
    links: undefined, 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: "I usually do a lot more things, especially in electronics that I don't put here. I am not really a electronics engineer but I like to get to the hardware whenever I get a chance.",
    textList: undefined,
    created: undefined
  },
]


export default () => <GridPage title={TITLE} description={DESCRIPTION} gridInfo={gridInfo} content={content} />

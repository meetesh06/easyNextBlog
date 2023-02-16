import GridPage from "@/components/GridPage"

const gridInfo = { xs: 1, sm: 1, md: 3, lg: 3 }
export const config = {
  disable: false
}

const TITLE = "Meetesh's Homepage 🏴‍☠️ 🏴‍☠️ 🏴‍☠️"
const DESCRIPTION = "Hey there! I'm a research scholar @IIT Mandi working in the area of compilers."

const content = [
  {
    title: "News",
    links: undefined, 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: undefined,
    textList: [
      ["3rd Feb 2023", "Presented Synopsis Seminar"],
      ["29th Nov 2022", "Presented Open Seminar"],
      ["29th Oct 2022", "Submitted to OOPSLA 2023"],
    ],
    created: undefined
  },
  {
    title: "Research Interests",
    links: undefined, 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: "Compilers, JITs, Programming Languages, Security",
    textList: undefined,
    created: undefined
  },
  {
    title: "Looking For",
    links: undefined, 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: "Internship opportunities as a Researcher",
    textList: undefined,
    created: undefined
  },
  {
    title: "Something About Me",
    links: undefined, 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: "I absolutely love everything about computers and love to dive deeper into what makes them tick. I find myself comfortable in very high level abstractions like DSLs or React and also in low level things like code generation, assembly, C++.",
    textList: undefined,
    created: undefined
  },
  {
    title: "Skills",
    links: undefined, 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: "I find myself comfortable in",
    textList: [
      ["C, C++, Java", "Experience in large real world projects"],
      ["React/Native, JS, R", "A lot of fun projects like this site. Worked on a JIT compiler for R called Rsh."],
      ["Scripting", "Routinely use scripting languages like python, bash, JS, etc."],
      ["Databases", "Am comfortable in mongo, SQL, etc."],
      ["Teaching Assistant", "CS502 Compiler Design, C302 Paradigms of Programming"],
    ],
    created: undefined
  },
  {
    title: "Quote",
    links: undefined, 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: "Logic processed infinitely is emotion.",
    textList: undefined,
    created: undefined
  },
  {
    title: "Interests",
    links: undefined, 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: "I love to go out on long walks and hikes. You will find me listening to music or reading books/articles in my free time. I randomly start new personal projects like making a light controllers using arduino, setting up solar panels around the terrace and so on. If something piques my interest I will give it a shot.",
    textList: undefined,
    created: undefined
  },
  {
    title: "Education",
    links: undefined, 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: undefined,
    textList: [
      ["2020-2023: M.S (by Research) CSE", "IIT Mandi School of Computing and Electrical Engineering"],
      ["2020: GATE CSE", "Cleared GATE examination."],
      ["2016-2020: B.Tech CSE", "MRIIRS, NCR-Faridabad"],
      ["2014-2016: High School", "Sri Gayatri Junior College, Hyderabad"],
      ["2004-2014: Primary School", "Bharatiya Vidya Bhavans Public School, Hyderabad"],
    ],
    created: undefined
  },
  {
    title: "Highlights",
    links: [
      ["https://www.cse.iitb.ac.in/~manas/","Dr. Manas Thakur"],
      ["https://compl.iitmandi.ac.in/","CompL"],
    ], 
    index: undefined,
    imageUri: undefined,
    href: undefined,
    id: undefined,
    text: "Working with Dr. Manas Thakur and the CompL group has been the most rewarding and fulfilling part of my life :) I am proud of.",
    textList: undefined,
    created: undefined
  }
]


export default () => <GridPage title={TITLE} description={DESCRIPTION} gridInfo={gridInfo} content={content} />

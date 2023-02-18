import GridPage from "@/components/GridPage"

const gridInfo = { xs: 1, sm: 1, md: 3, lg: 3 }
export const config = {
  disable: false
}

const TITLE = "Meetesh Mehta 🏴‍☠️ 🏴‍☠️ 🏴‍☠️"
const DESCRIPTION = "Hello! My name is Meetesh Mehta, and I am a research scholar at IIT Mandi specializing in the field of compilers. Specifically, I am interested in JIT Compilers, and my recent research has focused on reduction on warmup and deoptimization times. Compilers are a critical component of modern computing systems, and my work seeks to increase the level of specialization performed at runtime while keeping overheads to a minimum. I'm excited to share my findings with you and discuss this fascinating field further."

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
    text: "Computers fascinate me, and I am constantly drawn to exploring the intricacies of their inner workings. From high-level abstractions like DSLs and React to low-level aspects such as code generation, assembly, and C++, I find myself equally comfortable navigating different levels of abstraction. I am passionate about staying up-to-date with the latest technological advancements and enjoy delving deeper into the field of computer science.",
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
    text: undefined,
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
    text: "I am an avid explorer and love to embark on long walks and hikes, often accompanied by my favorite tunes or a good book or article. In my free time, I enjoy taking on new personal projects, such as designing and building light controllers using Arduino, setting up solar panels on my terrace, and more. I am always on the lookout for interesting ideas and challenges, and enjoy learning new skills and techniques to bring them to fruition.",
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

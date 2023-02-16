import Head from "next/head"

import { Masonry } from "@mui/lab";
import DisplayCard from "@/components/DisplayCard";
import { motion } from 'framer-motion';


export default function(props) {
  const { title, description, gridInfo, content } = props;
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
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
        name="description"
        content={description}
        />
      </Head>
      <Masonry 
        component={motion.div}
        initial="hidden"
        animate="show"
        exit="out"
        variants={staticContentVariants}
        columns={gridInfo}
        spacing={0}
        >
          {
            content.map((ele, index) => 
              <DisplayCard 
                key={`home-${index}`}
                title={ele.title}
                links={ele.links} 
                index={ele.index}
                imageUri={ele.imageUri}
                href={ele.href}
                id={ele.id}
                text={ele.text}
                textList={ele.textList}
                created={ele.created}
                />
            )
          }

      </Masonry>
    </div>
  )
}


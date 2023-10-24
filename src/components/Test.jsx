import {useState} from 'react';
import {motion} from 'framer-motion';

const Test = () => {

    const [open, setOpen] = useState(false);

    const variants = {
        hidden: {opacity: 0},
        visible: {opacity: 1,transition: {staggerChildren: 0.2}}
    }

    const items = ["item 1", "item 2", "item 3", "item 4", "item 5"];

  return (
    <div className='course'>
      {/* <motion.div 
        className="box"
        // initial={{backgroundColor: "#ff0000",opacity: 1, scale: 1}}
        // initial={{opacity: 0, scale: 0.5}}
        // animate={{opacity: 1, scale: 1, x:200}}    
        // transition={{duration: 1}}
        // whileTap={{scale: 0.95}}
        // whileInView={{backgroundColor: "#7fffd4"}}
        // drag
        variants={variants}
        // initial="hidden"
        // animate="visible"
        animate={open ? "visible" : "hidden"}
            
    ></motion.div> */}

    <motion.ul
        variants={variants}
        initial="hidden"
        animate={open ? "visible" : "hidden"}
    >
        {items.map((item, index) => (
            <motion.li key={index} variants={variants}>{item}</motion.li>
        ))}
    </motion.ul>

    <motion.button
        className='btn'
        onClick={() => setOpen((prev) => !prev)}
        whileTap={{scale: 0.95}}
    >
        {open ? "close" : "open"}
    </motion.button>
    </div>
  )
}

export default Test

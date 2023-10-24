import "./hero.scss";
import { hero, scroll } from "../../asserts";
import { motion } from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: { duration: 1, staggerChildren: 0.1 }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: { duration: 2, repeat: Infinity, repeatType: "reverse" },
    }
}

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: { duration: 20, repeat: Infinity, repeatType: "mirror" }
    }
}

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>DELMAC DEV</motion.h2>
                <motion.h1 variants={textVariants}>Web Developer and UI Designer</motion.h1>
                <motion.div className="buttons" variants={textVariants}>
                    <motion.button variants={textVariants}>See my Latest Works</motion.button>
                    <motion.button variants={textVariants}>Contact Me</motion.button>
                </motion.div>
                <motion.img src={scroll} alt="scroll" variants={textVariants} animate="scrollButton" />
            </motion.div>
        </div>
        <div className="sliderWrapper">
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Writer Content Creator Influencer
            </motion.div>
        </div>
        <div className="imageContainer">
            <img src={hero} alt="" />
        </div>
    </div>
  )
}

export default Hero

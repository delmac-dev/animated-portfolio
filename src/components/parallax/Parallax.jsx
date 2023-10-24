import "./parallax.scss";
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {mountains, planets, stars } from "../../asserts"

const Parallax = ({type}) => {

    const ref = useRef()

    const {  scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div className="parallax" style={{
        background: type === "services" ? "linear-gradient(180deg, #111132, #0c0c1d)" : "linear-gradient(180deg, #111132, #505064)",
    }}>
      <motion.h1 style={{y: yBg}}>
        {type==="services" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <motion.img src={mountains} alt="mountains" className="parallaxImage" />
      <motion.img src={planets} alt="planets" className="parallaxImage" />
      <motion.img src={stars} alt="stars" className="parallaxImage" />
    </div>
  )
}

export default Parallax

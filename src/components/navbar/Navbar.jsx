import { motion } from "framer-motion";
import "./navbar.scss";
import { dribbble, facebook, youtube, instagram } from "../../asserts";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const titleVariants = {
    hidden: {opacity: 0, scale: 0.5},
    visible: {opacity: 1, scale: 1}
  }

  return (
    <div className="navbar">
        <Sidebar />
        <div className="wrapper">
            <motion.span variants={titleVariants} initial="hidden" animate="visible" transition={{duration: .5}}>Delmac Dev</motion.span>
            <div className="social">
                <a href="#"><img src={facebook} alt="facebook" /></a>
                <a href="#"><img src={instagram} alt="instagram" /></a>
                <a href="#"><img src={youtube} alt="youtube" /></a>
                <a href="#"><img src={dribbble} alt="dribbble" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar

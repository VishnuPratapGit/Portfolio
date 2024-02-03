import "./navbar.scss"
import { motion } from "framer-motion"
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Portfolio
                </motion.span>
                <div className="social">
                    <a href="#"><img src="/facebook.png" alt="facebook" /></a>
                    <a href="#"><img src="/instagram.png" alt="facebook" /></a>
                    <a href="#"><img src="/youtube.png" alt="facebook" /></a>
                    <a href="#"><img src="/dribbble.png" alt="facebook" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
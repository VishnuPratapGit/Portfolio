import "./hero.scss"
import { motion } from "framer-motion"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-100%",
        transition: {
            duration: 80,
            repeat: Infinity,
            repeatType: "mirror",
        }
    }
}

const Hero = () => {
    return (
        <div className="hero">
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Developer Programmer Backend Frontend
            </motion.div>
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>VISHNU PRATAP SINGH</motion.h2>
                    <motion.h1 variants={textVariants}>Web Developer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>See the Latest Works</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
                </motion.div>
            </div>
            <div className="imageContainer">
                <img src="/hero.png" alt="heroImg" />
            </div>
        </div>
    )
}

export default Hero
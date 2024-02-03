import { motion } from "framer-motion"
import { useState } from "react"

const Test = () => {

    const [open, setOpen] = useState(false)

    const varients = {
        visible: {
            opacity: 1,
            x: 200,
            transition: { staggerChildren: 0.2 }
        },
        hidden: {
            opacity: 0
        }

    }

    const items = ["item1", "item2", "item3", "item4", "item5"];

    return (
        <div className="course">
            <motion.ul animate="visible" variants={varients}>
                {items.map((item) => (
                    <motion.li key={item} variants={varients}>{item}</motion.li>
                ))}
            </motion.ul>
        </div>
    )
}

export default Test
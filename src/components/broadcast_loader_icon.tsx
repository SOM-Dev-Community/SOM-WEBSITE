import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { light_glassmorphism } from "./layout/Header";


const variants: Variants = {
    initial: {
        scaleY: 0.5,
        opacity: 0,
    },
    animate: {
        scaleY: 1,
        opacity: 1,
        transition: {
            repeat: Infinity,
            repeatType: "mirror" as const,
            duration: 1,
            ease: "circIn",
        },
    },
};


export default function BroadcastLoaderIcon() {
    return (
        <motion.div
            slot="icon"
            transition={{
                staggerChildren: 0.25,
            }}
            initial="initial"
            animate="animate"
            className="flex gap-1"
        >
            <motion.div variants={variants} className={cn("h-12 w-2 ", light_glassmorphism)} />
            <motion.div variants={variants} className={cn("h-12 w-2 ", light_glassmorphism)} />
            <motion.div variants={variants} className={cn("h-12 w-2 ", light_glassmorphism)} />
            <motion.div variants={variants} className={cn("h-12 w-2 ", light_glassmorphism)} />
            <motion.div variants={variants} className={cn("h-12 w-2 ", light_glassmorphism)} />
        </motion.div>
    );
};

import { Skills_ICON } from "../constants";
import { animate, motion, transform } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
});

const Skills = () => {
    return (
        <div className="border-neutral-800 pb-24">
            <h1 className="my-24 font-bold text-center text-4xl">
                Skill
                <span className="text-neutral-500">s</span>
            </h1>

            <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                {Skills_ICON.map(({ component: Icon, color, animateDuration, name, shadow }, index) => (
                    <motion.div
                        variants={iconVariants(animateDuration)}
                        initial="initial"
                        animate="animate"
                        key={index}
                        className={`relative group flex flex-col items-center justify-center p-4 rounded-2xl border-4 border-neutral-800 transition-transform duration-300 hover:shadow-lg hover:scale-110 ${shadow}`}
                    >
                        <Icon className={`text-3xl ${color}`} />
                        {/* Tooltip */}
                        <span className={`absolute bottom-14 left-1/2 -translate-x-1/2 rounded bg-neutral-700 px-1 py-1 text-sm ${color} opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100`}>
                            {name}
                        </span>
                    </motion.div>
                ))}
            </motion.div>


        </div>

    )
}

export default Skills;
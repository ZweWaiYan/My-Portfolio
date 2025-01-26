import linkWhite from "../assets/linkWhite.png";
import linkBlack from "../assets/linkBlack.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";

const AboutMe = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div className="border-neutral-900 mt-32 pb-4">
            <h1 className="my-10 font-bold text-center text-4xl">
                About
                <span className="text-neutral-500"> Me</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 h-auto">
                <div className="flex flex-col justify-between ml-10">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className="mt-10 relative">
                        <div className="absolute inset-0 w-[60%] h-[60%] bg-gray-800 z-0 rounded-lg"></div>
                        <div className="relative z-10 m-7">
                            <h1 className="border-b">Introductions</h1>
                            <p className="pl-10 mt-5 overflow-hidden line-clamp-6">
                                <span className="font-bold text-2xl">I</span> am a dedicated and versatile developer passionate about creating efficient, user-friendly web and mobile applications. I thrive in collaborative environments, enjoy solving complex problems, and am always eager to learn and adapt to new challenges.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className="mt-10 relative">
                        <div className="absolute inset-0 w-[60%] h-[60%] bg-gray-800 z-0 rounded-lg"></div>
                        <div className="relative z-10 m-7">
                            <h1 className="border-b">What Next</h1>
                            <p className="pl-10 mt-5">
                                <span className="font-bold text-2xl">B</span>eyond coding, I stay active, explore the latest technologies, and contribute to open-source projects.
                            </p>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col justify-center ml-10">
                    <div className="mt-10 relative">
                        <div className="absolute inset-0 w-[60%] h-[60%] bg-gray-800 z-0 rounded-lg"></div>
                        <div className="relative z-10 m-7">
                            <h1 className="border-b">My Journey</h1>
                            <p className={`pl-10 mt-5 ${isExpanded ? "line-clamp-none" : "line-clamp-5"}`}>
                                <span className="font-bold text-2xl">M</span>y journey began with a deep curiosity about how things work, which led me to explore various technologies through self-study and hands-on experience. Over the past year, I have gained experience working with HTML, CSS, JavaScript, React.js, Node.js, MySQL, MSSQL, and MongoDB. Additionally, I am a self-study in Java and have gained project experience in Kotlin and Flutter through comprehensive training.
                            </p>
                            <button
                                onClick={toggleExpand}
                                className="mt-2 text-purple-500 hover:text-purple-700 underline">
                                {isExpanded ? "See Less" : "See More"}
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutMe;

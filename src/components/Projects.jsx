import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

import { PROJECTS } from "../constants";
import blankImg from "../assets/projects/blank.png";

const Projects = (blank) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing after it's visible
                }
            },
            { threshold: 1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="border-neutral-900 pb-32" ref={containerRef}>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center font-bold text-4xl"
            >
                Project<span className="text-neutral-500">s</span>
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
                {isVisible &&
                    PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            className="relative w-6/7 h-6/7 overflow-hidden bg-gray-100 rounded-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1,
                                delay: index * 0.1, // Incremental delay for each card
                            }}
                        >
                            <div className="w-full h-full cursor-pointer">
                                <img
                                    className="w-full h-full object-cover rounded-lg"
                                    src={project.image}
                                    alt={`Project ${index + 1}`}
                                />
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center rounded-lg"
                            >
                                <p className="text-lg font-bold mb-3 text-purple-600">
                                    {project.title}
                                </p>
                                <div className="mb-5">
                                    {project.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-bold text-purple-600"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center space-x-2">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-neutral-400 hover:text-neutral-200 text-2xl pr-3"
                                        aria-label="GitHub"
                                    >
                                        <FaGithub />
                                    </a>
                                    <a
                                        href={project.liveWeb}
                                        className="text-neutral-400 hover:text-neutral-200 text-2xl"
                                        aria-label="Share"
                                    >
                                        <IoIosLogOut />
                                    </a>
                                </div>
                            </motion.div>

                        </motion.div>                    
                    ))}

                {isVisible && (
                    <div className="relative w-6/7 h-6/7 overflow-hidden bg-gray-100 rounded-lg">
                        <img
                            className="w-full h-full object-cover rounded-lg"
                            src={blankImg}
                            alt=""
                        />
                        <p className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                            Explore all my projects on{" "}
                            <a
                                href="https://github.com/ZweWaiYan"
                                className="ml-1 font-bold text-purple-600"
                            >
                                Github
                            </a>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;

import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import linkWhite from "../assets/linkWhite.png";
import linkBlack from "../assets/linkBlack.png";

const Experiences = () => {
    return (
        <div className="border-neutral-900 pb-4">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center font-bold text-4xl">Experience
                <span className="text-neutral-500">s</span>
            </motion.h1>
            <div>
                {EXPERIENCES.map((experiences, index) => (
                    <div key={index} className="mb-14 flex flex-wrap justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <div className="flex">
                                <p className="mb-2 mr-3 text-sm text-purple-400">{experiences.company}</p>
                                <a href={experiences.companyLink}>
                                    <img className="w-5" src={linkWhite} alt="" />
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">
                                {experiences.role} - {" "}
                                <span className="text-sm text-neutral-100">
                                    {experiences.year}
                                </span>
                            </h6>
                            <ul className="ml-10 mb-5 space-y-2">
                                {Array.isArray(experiences.description) ? (
                                    experiences.description.map((desc, index) => (
                                        <li key={index}>{desc}</li>
                                    ))
                                ) : (
                                    <li>No description available.</li>
                                )}
                            </ul>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {experiences.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experiences;
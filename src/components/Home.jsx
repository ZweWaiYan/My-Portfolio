import profileImg from "../assets/profileImg.png";
import { HERO_CONTENT } from "../constants";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const AnimatationContainer = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: delay,
        }
    }
});

const Home = () => {
    return (
        <div className='border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap justify-between'>
                {/* Text Section */}
                <div className='w-full lg:w-1/2 lg:pl-36'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <h1
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0 }}
                            className='pb-5 lg:pb-12 text-4xl font-thin tracking-tight lg:mt-10 lg:text-4xl'>

                            <TypeAnimation
                                sequence={[
                                    "Hello, I'm Zwe Wai Yan",
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                repeat={Infinity}
                            />
                        </h1>
                        <motion.span
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text font-bold text-3xl lg:text-3xl tracking-tight text-transparent">
                            Front-end Dev
                        </motion.span>
                        <motion.p
                            variants={AnimatationContainer(2)}
                            initial="hidden"
                            animate="visible"
                            className='my-2 max-w-xl py-6 font-light tracking-tighter lg:text-start sm:text-center'>
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.span
                            variants={AnimatationContainer(2.5)}
                            initial="hidden"
                            animate="visible"
                            className="flex justify-between"
                        >
                            <div onClick={() => { document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }} className="mb-10 border mr-5 border-white px-6 py-4 rounded-lg hover:bg-white/20 duration-[400ms] ease-in-out  select-none">
                                Contact Me
                            </div>
                            <a
                                href="https://drive.google.com/uc?export=download&id=1zy2PNPtNE2RRwm95iL9uOCYNXejR0yus"
                                download="Zwe Wai Yan.pdf"
                                className="mb-10 border border-white px-6 py-4 rounded-lg hover:bg-white/20 duration-[400ms] ease-in-out  select-none"
                            >
                                Download CV
                            </a>

                        </motion.span>
                    </div>
                </div>

                {/* Image Section */}
                <div
                    className="w-full lg:w-1/2 lg:pr-36 flex justify-center lg:justify-end relative bg-cover bg-center"
                >
                    {/* Main Image */}
                    <motion.img
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0 }}
                        src={profileImg}
                        alt="Zwe Wai Yan"
                        className="object-contain"
                    />
                </div>

            </div>
        </div>

    )
}

export default Home;

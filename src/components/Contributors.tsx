import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const team = [
    {
        linkedIn: "https://www.linkedin.com/in/kimsteven1/",
        github: "https://github.com/stekim4",
        name: "Steven Kim",
        src: "/steven.jpeg",
    },
    {
        linkedIn: "https://www.linkedin.com/in/michaeljway/",
        github: "https://github.com/mjsway",
        name: "Michael Way",
        src: "/michael.jpg",
    },
    {
        linkedIn: "https://www.linkedin.com/in/upasananatarajan/",
        github: "https://github.com/unatarajan",
        name: "Upasana Natarajan",
        src: "/upasana.jpg",
    },
    {
        linkedIn: "https://www.linkedin.com/in/kareemhs",
        github: "https://github.com/kareemhs",
        name: "Kareem Saleh",
        src: "/kareem.png",
    },
];

// Container animation properties for stagger effect
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

// Individual item animation properties
const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Contributors = () => {
    return (
        <motion.div 
            className="flex justify-center align-content-center flex-wrap gap-4" 
            variants={container} 
            initial="hidden" 
            animate="show"
        >
            {team.map(({ name, src, linkedIn, github }, i) => (
                // Individual contributor's card
                <motion.div
                    className="p-4 rounded flex flex-col items-center gap-2 bg-blue-100 w-full sm:w-[192px] h-[240px]"
                    whileHover={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)", translateY: -10 }}
                    transition={{ duration: ".3" }}
                    variants={item}
                    key={i}
                >
                    {/* Contributor's image */}
                    <Image
                        className="rounded-full overflow-hidden"
                        src={src}
                        width={100}
                        height={100}
                        alt={"image of " + name}
                    />
                    
                    {/* Contributor's name */}
                    <div className="mt-1 text-l font-bold">{name}</div>
                    
                    {/* Contributor's title */}
                    <div className="text-base">Software Engineer</div>

                    {/* Icons linked to contributor's GitHub and LinkedIn */}
                    <div className="mt-1 flex justify-center gap-2">
                        {/* GitHub icon */}
                        <motion.a
                            href={github}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-2xl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                        </motion.a>

                        {/* LinkedIn icon */}
                        <motion.a
                            href={linkedIn}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-2xl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin fill='#0072b1' />
                        </motion.a>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Contributors;
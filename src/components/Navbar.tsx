import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaNewspaper, FaBars } from "react-icons/fa";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

// Animation properties for container and individual items
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

interface GitHubRepoData {
    stargazers_count: number;
}

interface NavbarItemsProps {
    starCount: number | null;
    isMobile?: boolean;
}

// Navbar items component
const NavbarItems: React.FC<NavbarItemsProps> = ({ starCount, isMobile }) => (
    <>
        {!isMobile && (
            <>
                {/* Links for Features and Team sections */}
                <motion.div className="mr-5" whileHover={{ scale: 1.05 }} variants={item} style={{ cursor: "pointer" }}>
                    <ScrollLink to="features" smooth={true} duration={500}>
                        Features
                    </ScrollLink>
                </motion.div>
                <motion.div className="mr-5" whileHover={{ scale: 1.05 }} variants={item} style={{ cursor: "pointer" }}>
                    <ScrollLink to="team" smooth={true} duration={500}>
                        Team
                    </ScrollLink>
                </motion.div>
            </>
        )}

        {/* Icons linked to GitHub, LinkedIn, and Medium */}
        <div className="flex space-x-5 sm:mt-0">
            {/* GitHub icon with star count */}
            <motion.a
                href="https://github.com/oslabs-beta/Kafka-Sonar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center whitespace-nowrap text-gray-800"
                title="GitHub"
                whileHover={{ scale: 1.1, translateY: -2 }}
                whileTap={{ scale: 0.9 }}
                variants={item}
            >
                <FaGithub size={24} />
                {starCount !== null && (
                    <span className="ml-1">☆ {starCount}</span>
                )}
            </motion.a>

            {/* LinkedIn icon */}
            <motion.a
                href="https://www.linkedin.com/company/kafka-sonar/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800"
                title="LinkedIn"
                whileHover={{ scale: 1.1, translateY: -2 }}
                whileTap={{ scale: 0.9 }}
                variants={item}
            >
                <FaLinkedin size={24} />
            </motion.a>

            {/* Medium icon */}
            <motion.a
                href="https://medium.com/@upnata/making-waves-with-kafka-sonar-leveraging-docker-to-streamline-kafka-cluster-monitoring-and-19613a4463b2#8db0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800"
                title="Medium"
                whileHover={{ scale: 1.1, translateY: -2 }}
                whileTap={{ scale: 0.9 }}
                variants={item}
            >
                <FaNewspaper size={24} />
            </motion.a>
        </div>
    </>
);

// Main Navbar component
const Navbar: React.FC = () => {
    const [starCount, setStarCount] = useState<number | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Fetch star count from GitHub repository on component mount
    useEffect(() => {
        const fetchStarCount = async () => {
            try {
                const response = await fetch("https://api.github.com/repos/oslabs-beta/Kafka-Sonar");
                if (!response.ok) {
                    throw new Error("Failed to fetch star count");
                }
                const data = await response.json() as GitHubRepoData;
                setStarCount(data.stargazers_count);
            } catch (error) {
                console.error("Error fetching star count:", error);
            }
        };

        fetchStarCount().catch((error) => {
            console.error("Error fetching star count:", error);
        });
    }, []);

    return (
        <motion.div className="top-0 left-0 w-full sm:w-1400 z-50 flex flex-row justify-between items-center pt-4 pb-12 sm:pt-4 sm:pb-12 bg-blueGray-50 text-gray-800 font-bold" variants={container} initial="hidden" animate="show">
            <Image src="/kafka-sonar-black-logo.png" alt="Product Logo" width={150} height={30} className="logo"/>

            {/* Desktop Navbar Items */}
            <div className="hidden sm:flex">
                <NavbarItems starCount={starCount} />
            </div>

            {/* Mobile Navbar Items */}
            <div className="flex space-x-2 sm:hidden">
                <NavbarItems starCount={starCount} isMobile={true} />
            </div>
        </motion.div>
    );
}

export default Navbar;
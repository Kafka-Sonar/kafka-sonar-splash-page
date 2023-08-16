import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Navbar from '../components/Navbar';
import Contributors from '../components/Contributors';
import Features from '../components/Features';

type MotionTitleProps = {
  children: React.ReactNode;
}

type AnimatedLinkProps = {
  className: string;
  href: string;
  src: string;
  alt: string;
};

// Component to animate titles
function MotionTitle({ children }: MotionTitleProps) {
  return (
    <motion.div
      className="max-w-500 m-auto text-left text-4xl leading-tight my-0"
      initial={{ x: -600 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

// Component to create animated links with images
function AnimatedLink({ href, src, alt }: AnimatedLinkProps) {
  return (
    <Link href={href}>
      <motion.div
        className="shadow-md flex rounded-md cursor-pointer transition-shadow duration-200 w-full md:w-3/4 mx-auto md:mx-0 md:h-auto md:ml-auto"
        initial={{ x: 600 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
      >
        <Image
          src={src}
          alt={alt}
          width={1550}
          height={1162}
          layout="responsive"
        />
      </motion.div>
    </Link>
  );
}

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 bg-blueGray-50">
      <div className="max-w-[1400px]">
        <Navbar />
      </div>

      {/* Landing Page Section */}
      <section id="landing" className="flex flex-wrap items-center justify-center py-12 md:py-24 bg-blueGray-50 text-gray-800">
        {/* Content */}
        <div className="w-full md:w-3/5 flex flex-col items-start justify-center text-left">
        <MotionTitle>
          {/* Main Headings */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-2">KAFKA CLUSTER MONITORING</h2>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">ON DOCKER DESKTOP</h2>
          {/* Description */}
          <h5 className="text-xl md:text-2xl text-gray-500">Kafka Sonar is a first-of-its-kind Docker Desktop extension aimed at enhancing the Kafka developer experience.</h5>
        </MotionTitle>
          {/* Action Buttons */}
          <div className="mt-8 space-y-4 md:space-y-0 md:space-x-4 self-start max-w-500 flex flex-col md:flex-row">
            <a href="https://github.com/oslabs-beta/Kafka-Sonar" target="_blank" rel="noopener noreferrer">
              <motion.button 
                className="px-6 py-3 bg-orange-500 text-white border border-orange-500 rounded-lg hover:bg-orange-600 transition-colors duration-300"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.7, type: "spring", stiffness: 100, damping: 10 }}
                whileHover={{ translateY: -5, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)" }}
              >
                Read the Docs
              </motion.button>
            </a>
            <a href="https://hub.docker.com/extensions/kafkasonar/kafkasonar" target="_blank" rel="noopener noreferrer">
              <motion.button 
                className="px-6 py-3 bg-blue-500 text-white border border-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.7, type: "spring", stiffness: 100, damping: 10 }}
                whileHover={{ translateY: -5, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" }}
              >
                Download the Extension
              </motion.button>
            </a>
          </div>
        </div>

        {/* Placeholder for screenshot carousel */}
        <div className="flex w-full justify-center mt-3 md:w-2/5 md:justify-end rounded-md m-auto items-center">
          {/* <AnimatedLink
            className="w-full"
            href="https://github.com/oslabs-beta/Kafka-Sonar"
            src="/placeholder.png"
            alt="Kafka Sonar Screenshot"
          /> */}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="flex flex-col items-center justify-center py-12 md:py-24 bg-blueGray-50 text-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">Features</h2>
        <Features />
      </section>

      {/* Team Section */}
      <section id="team" className="flex flex-col items-center justify-center py-12 md:py-24 bg-blueGray-50 text-gray-800">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet the Kafka Sonar team
        </motion.h2>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Contributors />
        </motion.div>
      </section>

      {/* Copyright Section */}
      <section id="copyright" className="py-4 bg-blueGray-50 text-gray-800">
        <div className="text-center">
          <p className="text-sm">
            &copy; Kafka Sonar 2023 | MIT License
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
import React, { useState } from "react";
// import Image from "next/image";
import { motion } from "framer-motion";

interface SectionType {
  title: string;
  description: string;
  gif: string;
}

// Sample sections data
const sections: SectionType[] = [
  {
    title: "Effortless Connection Setup",
    description: "Input your Kafka cluster details into our intuitive interface to set up connection. Once configured, Sonar remembers the connection details and automatically generates the necessary Prometheus and Grafana configuration files in the background.",
    gif: "/add-connection.gif",
  },
  {
    title: "Real-time Metrics at Your Fingertips",
    description: "Unlock the power of monitoring with a single click. Dive into a holistic view of your Kafka cluster by tracking 20 essential metrics. From comprehensive Cluster Overviews to granular Partition Insights and Resource Utilization, get real-time data as things unfold.",
    gif: "/conn-dis.gif",
  },
  {
    title: "Download and Explore on Demand",
    description: "Easily download your metrics in a handy .csv format whenever you need. Behind the scenes, metrics are scraped every 60 seconds, ensuring you're always updated. Rest easy knowing they're stored securely in a local, containerized database.",
    gif: "/download.gif",
  },
];

const Features: React.FC = () => {
  // State to manage current section and its last clicked timestamp
  const [section, setSection] = useState<number>(0);
  const [lastClicked, setLastClicked] = useState<number>(Date.now());

  // Handle section click by setting the current section and updating timestamp
  const handleSectionClick = (i: number) => {
    setSection(i);
    setLastClicked(Date.now());
  };

  // Create section components for titles and descriptions
  const sectionComponents = sections.map(({ title, description }, i) => (
    <motion.div
      key={i}
      onClick={() => handleSectionClick(i)}
      className={`border border-blue-50 rounded-md p-2.5 cursor-pointer w-full md:max-w-[450px] ${
        section === i ? "bg-blue-50" : "bg-blueGray-50"
      } hover:bg-blue-50 transition-colors duration-300`}
      initial={{ backgroundColor: "#ffffff" }}
      animate={{
        backgroundColor: section === i ? "#dbeafe" : "#ffffff",
      }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
    >
      <h3 className="m-0 font-bold">{title}</h3>
      <p className={`m-0 mt-1.5 text-gray-500 hidden md:block`}>{description}</p>
    </motion.div>
  ));

  // Create image components for GIFs
  const imageComponents = sections.map(({ gif }, i) => (
    <motion.div
      key={i}
      className="rounded-md m-auto"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: section === i ? 1 : 0, x: section === i ? 0 : 200 }}
      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
    >
      {section === i && (
        <img
          className="rounded-md"
          src={`${gif}?t=${lastClicked}`} // Add timestamp to refresh image
          width="1400"
          height="1000"
          alt='Feature GIF'
        />
      )}
    </motion.div>
  ));

  // Render the sections and images
  return (
    <div className="flex flex-col space-y-6 items-center justify-center-auto">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between w-full max-w-[1400px] mx-auto">
        {sectionComponents}
      </div>
      <div>
        {imageComponents}
      </div>
    </div>
  );  
};

export default Features;
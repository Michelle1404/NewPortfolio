import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>EINFÜHRUNG</p>
        <h2 className={styles.sectionHeadText}><span className='text-[#39cccc]'>Überblick.</span></h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Ich bin Michelle, 23 Jahre alt, eine angehende Junior Webentwicklerin im MERN-Stack-Bereich. Meine Leidenschaft ist es, kreative und benutzerfreundliche Webseiten zu gestalten. Ich befinde mich derzeit in einem einjährigen Webentwickler-Kurs, der endet im Juli 2023. Während dieses Kurses habe ich die Möglichkeit, die neuesten Technologien und Methoden der Webentwicklung zu erlernen und meine Fähigkeiten durch praktische Projekte zu verbessern. Ich bin begeistert von der Möglichkeit, meine Karriere als Webentwicklerin zu starten und meine Fähigkeiten in diesem ständig wachsenden Bereich zu erweitern.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
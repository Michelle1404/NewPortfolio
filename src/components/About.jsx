import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";


const About = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>EINFÜHRUNG</p>
        <h2 className={styles.sectionHeadText}><span className='text-[#39cccc]'>Überblick.</span></h2>
      </div>

      <p className='mt-4 text-grey text-[17px] max-w-3xl leading-[30px]'
      >
        Ich bin Michelle, 23 Jahre alt, eine angehende Junior Webentwicklerin im MERN-Stack-Bereich, die sich für eine Karriere im IT-Bereich begeistert und leidenschaftlich daran arbeitet, innovative und benutzerfreundliche Lösungen zu entwickeln. Ich befinde mich derzeit in einem einjährigen Webentwickler-Kurs, der im Juli 2023 endet. Während dieses Kurses habe ich die Möglichkeit, die neuesten Technologien und Methoden der Webentwicklung zu erlernen und meine Fähigkeiten durch praktische Projekte zu verbessern. Ich bin begeistert von den vielen Möglichkeiten, die die IT-Branche bietet und freue mich darauf, meinen Beitrag zu leisten und weiter zu wachsen.
      </p>
    </>
  );
};

export default SectionWrapper(About, "about");
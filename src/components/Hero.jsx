import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen`}>
      <div
        className={`absolute inset-0 top-[-180px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-4'>
          <div className='w-5 h-5 rounded-full bg-[#39cccc]' />
          <div className='w-1 sm:h-80 h-20 blue-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>
            Hi, Ich bin <span className='text-[#ff4057]'>Michelle</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-white-100`}>
            Junior Web Developer <br className='sm:block hidden' />
            MERN-Stack
          </p>
        </div>
      </div>
        <ComputersCanvas /> 
      <div className='absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[30px] h-[50px] rounded-3xl border-4 border-[#39cccc] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[#ff4057] mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
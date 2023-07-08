import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"



const Hero = () => {
  return (
    <section className="relative w-full h-screen m-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[180px] mx-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className="flex flex-col justify-center items-center mt-5">
                <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
                <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div>
                <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">HenisH</span></h1>
                <p className={`mt-2 text-white-100 text-[16px] sm:text-[18px]`}> Skilled React developer with <br className="hidden sm:block"/> expertise in building modern web applications. </p>
          </div>
      </div>
      <ComputersCanvas/>

      <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center">
           <a href="#about">
              <div className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
                     <motion.div animate={{y:[0,24,0]}} transition={{duration:1.5,repeat:Infinity,repeatType:'loop'}} className="w-[8px] h-[8px] rounded-full bg-secondary mb-1" />
              </div>
           </a>
      </div>

    </section>
  )
}

export default Hero
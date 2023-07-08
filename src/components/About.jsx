import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn} from '../utils/motion'
import {SectionWrapper} from '../hoc'


const ServiceCard = ({index,title,icon}) =>{
     return(
       <Tilt className="xs:w-[250px] w-full">
          <motion.div variants={fadeIn('right','spring',0.5*index,0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card' >
              <div options={{max:45,scale:1,speed:450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
                  <img src={icon} alt={title} className='w-16 h-16 object-contain' />
                  <h3 className='text-white text-[20px] text-center font-medium'>{title}</h3>
              </div>
          </motion.div>
       </Tilt>
     )
}


const About = () => {
  return (
    <>
      <motion.div>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn('','',0.1,1)} className='mt-4 text-secondary text-[16px] max-w-3xl leading-[30px]'> 
        I am a passionate and skilled React developer with experience in building web applications. I have a strong understanding of core web development concepts and am eager to learn new technologies and techniques. I am seeking an opportunity to gain real-world experience in a dynamic and challenging work environment.
      </motion.p>

      <div className='flex flex-wrap mt-20 gap-10'>
          {services.map((e,i)=>(
              <ServiceCard key={e.title} {...e} index={i}/>
          ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,'about')
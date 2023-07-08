import { motion } from "framer-motion"
import { useState,useRef } from "react"
import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"



const Contact = () => {

  const formRef = useRef()
  const [form,setForm] = useState({
    name:'',
    email:'',
    message:'',
  })
  const [loading,setLoading] = useState(false)

  const handleSubmit = (e) =>{
     return(
      e.preventDefault
     )
  }
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
         <motion.div variants={slideIn('left','tween',0.2,1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
            <p className={`${styles.sectionSubText}`}>Get in touch</p>
            <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
                <label className="flex flex-col">
                  <span className="text-white form-medium mb-4">Your Name</span>
                  <input type="text" name="name" value={form.name} onChange={(e)=>{e.target.value}} placeholder="What's your name?" className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-none font-medium "/>
                </label>
                <label className="flex flex-col">
                  <span className="text-white form-medium mb-4">Your Email</span>
                  <input type="text" name="email" value={form.email} onChange={(e)=>{e.target.value}} placeholder="What's your email?" className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-none font-medium "/>
                </label>
                <label className="flex flex-col">
                  <span className="text-white form-medium mb-4">Your message</span>
                  <textarea rows='7' name="message" value={form.message} onChange={(e)=>{e.target.value}} placeholder="What do you what to say?" className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-none font-medium "/>
                </label>
                <button onClick={()=>{}} type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-blod shadow-md shadow-primary rounded-xl">
                     {loading ? 'Sending...' : 'Send'}
                </button>
            </form>
         </motion.div>

         <motion.div variants={slideIn('right','tween',0.2,1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
              <EarthCanvas/>
         </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,'contact') 
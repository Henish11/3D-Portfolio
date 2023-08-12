import { motion } from "framer-motion"
import { useState,useRef } from "react"
import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
import emailjs from '@emailjs/browser';




const Contact = () => {

  const formRef = useRef()
  const [formValue,setFormValue] = useState({
    name:'',
    email:'',
    message:'',
  })
  const[formErrors,setFormErrors] = useState({})
  const [isSubmit,setIsSubmit] = useState(false)


  const handleChange= (e) =>{
    setFormValue({...formValue,[e.target.name]:e.target.value})
  }


  const handleSubmit = (e) =>{
    e.preventDefault()
    setFormErrors(validate(formValue))
    setIsSubmit(true)
    emailjs.sendForm(
      'service_ervhpie',
      'template_udakeuv',
      formRef.current,
      'xmoY8lg_-JGFgNUQN'
      )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  console.log(formValue);

  const validate = (value)=>{
    const errors = {}
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    
    if(!value.name){
      errors.name = "Name Can't be Empty!"
    }else if(value.name.length < 2){
      errors.name = 'Name Atleast have 2 Character'
    }
    if(!value.email){
      errors.email = 'Email Can Not be Empty!'
    }else if(!regex.test(value.email)){
      errors.email = 'Email Format is not Valid'
    }
    if(!value.message){
      errors.message = "Message Can't be Empty!"
    }else if(!regex.test(value.email)){
      errors.email = 'Email Format is not Valid'
    }
    return errors
  }


  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
         <motion.div variants={slideIn('left','tween',0.2,1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
            <p className={`${styles.sectionSubText}`}>Get in touch</p>  
            <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
            {Object.keys(formErrors).length === 0 && isSubmit ? <p className="text-lime-300">Your Message Sent Succesfully</p> : null }
            <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
                <label className="flex flex-col">
                  <span className="text-white form-medium mb-4">Your Name</span>
                  <input type="text" name="name" value={formValue.name} onChange={handleChange} placeholder="What's your name?" className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-none font-medium "/>
                  { formErrors.name && <p className="text-red-400 mt-2">{formErrors.name}</p>}
                </label>
                <label className="flex flex-col">
                  <span className="text-white form-medium mb-4">Your Email</span>
                  <input type="text" name="email" value={formValue.email} onChange={handleChange} placeholder="What's your email?" className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-none font-medium "/>
                  {formErrors.email && <p className="text-red-400 mt-2">{formErrors.email}</p>}
                </label>
                <label className="flex flex-col">
                  <span className="text-white form-medium mb-4">Your message</span>
                  <textarea rows='5' name="message" value={formValue.message} onChange={handleChange} placeholder="What do you what to say?" className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-none font-medium "/>
                  {formErrors.message && <p className="text-red-400 mt-2">{formErrors.message}</p>}
                </label>
                <button onClick={()=>{}} type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-blod shadow-md shadow-primary rounded-xl">
                   Send
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
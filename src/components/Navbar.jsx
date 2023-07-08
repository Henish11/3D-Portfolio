import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import {styles} from '../styles'
import {navLinks} from '../constants/'
import { logo,menu,close } from '../assets'

const Navbar = () => {

  const [active,setActive] = useState('')
  const [toggle,setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <nav className={`${styles.paddingX} ${scrolled ? "bg-primary" : "bg-transparent"} w-full flex items-center py-5 fixed top-0 z-20`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
            <Link to="/" className='flex items-center gap-2' 
              onClick={()=>{
                 setActive('')
                 window.scroll(0,0)
            }}>
              <img src={logo} alt='logo' className='w-20 h-20 object-contain mr-2' />
              <p className='text-white text-[16px] font-medium cursor-pointer flex'>
                HenisH&nbsp;<span className='sm:block hidden'>| React Developer</span>
              </p>
              </Link>
              <ul className='hidden sm:flex flex-row gap-10'>
                 {navLinks.map((link)=>{
                   return (<li key={link.id} className={`${ active === link.title ? 'text-white' : 'text-secondary' } hover:text-white text-[16px]
                   font-medium cursor-pointer`} onClick={()=>{setActive(link.title)}}>
                                <a href={`#${link.id}`}>{link.title}</a>
                          </li>)
                 }) 
                 }
              </ul>

              <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img src={toggle ? close : menu} alt="menu" className='w-[28] h-[28] object-contain cursor-pointer' onClick={()=>{setToggle(!toggle)}} />
              </div>
              <div className={`${toggle ? "flex" : "hidden"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                <ul className='flex justify-end flex-col item-start list-none  gap-4'>
                  {navLinks.map((link)=>{
                    return (<li key={link.id} className={`${ active === link.title ? 'text-white' : 'text-secondary' } text-[15px]
                    font-medium cursor-pointer`} onClick={()=>{
                        setActive(link.title)
                        setToggle(!toggle)
                        }}>
                                  <a href={`#${link.id}`}>{link.title}</a>
                            </li>)
                  }) 
                  }
                </ul>
              </div>
      </div>
    </nav>
  )
}

export default Navbar
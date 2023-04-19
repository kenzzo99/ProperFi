import React,{useState} from 'react'
import {close, menu} from '../assets'
import {navLinks} from '../constants'

const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  return (
      <nav className='w-full flex relative py-6 justify-start items-center navbar'>
      
        <ul className='list-none sm:flex hidden justify-end items-center z-[10]'>
          {
            navLinks.map((el, index)=>{
              return(
                <li key={el.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-0':'mr-10'} text-white`}>
                  <a href={`#${el.id}`}>
                    {el.title}
                  </a>
                </li>
              )
            })
          }
          
        </ul>
        {/* <img className="absolute h-[20px] m-auto left-0 right-0 z-[3] py-6" src='/images/properfilogo1.png'  /> */}

        {/* <div className="absolute m-auto left-0 right-0 text-white text-center font-serif text-xl z-[3] py-6">ProperFi</div> */}
        <div className='sm:hidden flex justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain z-[10] absolute right-0"  onClick={()=>setToggle((prev)=>!prev)}/>
          
          <div className={`${ toggle ? 'flex': 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[10]`}>
            <ul className='list-none flex flex-col justify-end items-center flex-1 z-[10]'>
              {
                navLinks.map((el, index)=>{
                  return(
                    <li key={el.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-0':'mb-4'} text-white`}>
                      <a href={`#${el.id}`}>
                        {el.title}
                      </a>
                    </li>
                  )
                })
              }
              
            </ul>
            
          </div>
        </div>
        
      </nav>
  )
}

export default NavBar
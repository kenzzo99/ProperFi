import React from 'react'
import styles from '../style'
import {robot} from '../assets'
const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 flex justify-start items-start flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Redefining  <br className="sm:block hidden"/> {" "}
            <span className="text-gradient">Ownership.</span> {" "} 
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Invest as little as $50 in historically the most stable and profitable asset class - luxury real estate. 
          <br></br>
          Earn yields, get free stays, and make an impact.
        </p>
      </div>

      <div className={`flex ${styles.flexCenter} relative`}>
        <img src={robot} className="w-200 h-400 relative z-[1] rounded-xl" alt="" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"/>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>


    </section>
  )
}

export default Hero
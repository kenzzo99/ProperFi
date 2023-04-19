import React from 'react'
import styles from '../style'
import { robot } from '../assets'
import { addToWaitlist } from '../../firebase'
const Hero = () => {
  const inputRef = React.useRef();
  const handleClick = () => {
    //"inputRef.current.value" is input value
    console.log(typeof (inputRef.current.value))
    addToWaitlist(String(inputRef.current.value));
  };

  return (
    <section id="home" className={`flex md:flex-row justify-between flex-col sm:py-8 py-6`}>
      <div className={`flex-1 flex justify-start items-start flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Redefining <br className="sm:block hidden" /> {" "}
            <span className="text-gradient">Ownership.</span> {" "}
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Invest as little as $50 in historically the most stable and profitable asset class - luxury real estate.
          <br></br>
          Earn yields, get free stays, and make an impact.
        </p>

        <br></br>
        <br></br>
        <div className="mt-10 sm:mt-12">
          <form className="sm:mx-auto sm:max-w-xl lg:mx-0">
            <div className="sm:flex">
              <input type="hidden" name="subject" value="New Waitlist" />
              <div className="min-w-0 flex-1"><label className="sr-only">Email address</label>
                <input ref={inputRef} id="email" type="email" placeholder="Enter your email" className="block w-full rounded-md border-0 bg-gray-200 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400" />
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3"><button type="submit" className="block w-full rounded-md bg-cyan-800 py-3 px-4 font-medium text-white shadow hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900" onClick={handleClick}>Join Waitlist</button>
              </div>
            </div>
          </form>
        </div>
      </div>



      <div className={`flex justify-stretch`} style={{ width: "100%", height: "100%" }}>
        <img src={robot} className="w-[90%] h-[100%] relative z-[1] rounded-xl" alt="" style={{ transform: "translateZ(0)" }} />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" style={{ transform: "translateZ(0)" }} />
        <div className="absolute z-[0] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" style={{ transform: "translateZ(0)" }} />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" style={{ transform: "translateZ(0)" }} />
      </div>

      {/* <div className={`flex ${styles.flexCenter} relative`} style={{width: "100%", height: "100%"}}>
      <img src={robot} className="w-70vw h-90vh z-[1] rounded-xl" alt="" />
      <div className="absolute z-[0] w-40% h-35% top-0 pink__gradient"/>
      <div className="absolute z-[1] w-80% h-80% rounded-full bottom-20vw white__gradient"/>
      <div className="absolute z-[0] w-50% h-50% right-5vw bottom-5vh blue__gradient"/>
    </div>

    <div className={`flex ${styles.flexCenter} relative`}>
        <img src={robot} className="w-200 h-400 z-[1] rounded-xl" alt="" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"/>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div> */}
    </section>
  )
}

export default Hero
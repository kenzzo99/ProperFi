
import styles from "../style";
// import {villaAmelia, VillaCallista, VillaSpain, location} from "/assets"
import Buttonz from "./Button2";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Listings = () => (
  <Router>
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          Properties from around the world at your fingertips
        </h2>
      </div>

      <div className="flex flex-row">
        {/* Listing 1*/}
        <div className="flex border border-gray-200 justify-between dark:bg-gray-800 dark:border-gray-700 flex-col rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">

          <img src={'/images/villaAmelia.png'} alt={"Villa"} className="w-full h-auto rounded-t-[20px]" />

          <div className="p-6 rounded-b-[20px]">
            <div className="flex items-center mb-4">
              <img src='/images/location.svg' />
              <p className="font-poppins font-normal text-base text-white">&nbsp; Dubrovnik, Croatia</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-poppins font-normal text-sm leading-[24px] text-white mb-4">
                12.2% YoY
              </p>
              <p className="font-poppins font-normal text-sm leading-[24px] text-white mb-4">
                12 guests
              </p>
              <p className="font-poppins font-normal text-sm leading-[24px] text-white mb-4">
                $5,200,000
              </p>
            </div>

            <div className="flex items-center justify-between">
              <Buttonz className="bg-[#01f6ff] text-black font-poppins font-medium py-2 px-4 rounded-lg" to="https://properfi-mint.vercel.app/" location={location}/>
              <h4 className="font-poppins font-semibold text-base text-white">$542/TKN</h4>
            </div>

          </div>
        </div>
        {/* Listing 2*/}
        <div className="flex border border-gray-200 justify-between dark:bg-gray-800 dark:border-gray-700 flex-col rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">

          <img src={'/images/VillaSpain.png'} alt={"Villa"} className="w-full h-auto rounded-t-[20px]" />

          <div className="p-6 rounded-b-[20px]">
            <div className="flex items-center mb-4">
              <img src='/images/location.svg' />
              <p className="font-poppins font-normal text-base text-white">&nbsp; Marabella, Spain</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-poppins font-normal text-sm leading-[24px] text-white mb-4">
                9.4% YoY
              </p>
              <p className="font-poppins font-normal text-sm leading-[24px] text-white mb-4">
                10 guests
              </p>
              <p className="font-poppins font-normal text-sm leading-[24px] text-white mb-4">
                $3,200,000
              </p>
            </div>

            <div className="flex items-center justify-between">
            <Buttonz className="bg-[#01f6ff] text-black font-poppins font-medium py-2 px-4 rounded-lg" to="https://goprincetontigers.com/sports/mens-water-polo" location={location}/>
              <h4 className="font-poppins font-semibold text-base text-white">$312/TKN</h4>
            </div>

          </div>
        </div>

        {/* Listing 2*/}
        <div className="flex border border-gray-200 justify-between dark:bg-gray-800 dark:border-gray-700 flex-col rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">

          <img src={'/images/VillaCallista.jpg'} alt={"Villa"} className="w-full h-auto rounded-t-[20px]" />

          <div className="p-6 rounded-b-[20px]">
            <div className="flex items-center mb-4">
              <img src='/images/location.svg' />
              <p className="font-poppins font-normal text-base text-white">&nbsp; Dubrovnik, Croatia</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-poppins font-normal text-sm leading-[24px] text-white mb-4">
                10.4% YoY
              </p>
              <p className="font-poppins font-normal text-sm leading-[24px] text-white mb-4">
                4+2 guests
              </p>
              <p className="font-poppins font-normal text-sm leading-[24px] text-white mb-4">
                $550,000
              </p>
            </div>

            <div className="flex items-center justify-between">
            <Buttonz className="bg-[#01f6ff] text-black font-poppins font-medium py-2 px-4 rounded-lg" to="https://goprincetontigers.com/sports/mens-water-polo" location={location}/>
              <h4 className="font-poppins font-semibold text-base text-white">$62/TKN</h4>
            </div>

          </div>
        </div>
      </div>
    </section>
  </Router>
);


export default Listings;
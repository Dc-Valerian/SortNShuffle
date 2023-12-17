import { useState, useEffect } from "react";
import { IoShuffleSharp } from "react-icons/io5";
import { AiOutlineSortAscending } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";
import Switcher from "../DarkMode/Switcher/Switcher";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  const [buttonWrapGradient, setButtonWrapGradient] = useState<string>(""); 
  console.log(setButtonWrapGradient)

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor1 = `#${Math.floor(Math.random() * 16777215).toString(
        16
      )}`;
      const randomColor2 = `#${Math.floor(Math.random() * 16777215).toString(
        16
      )}`;
      const gradient = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;

      setButtonWrapGradient(gradient);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full h-full flex flex-col items-center justify-center gap-[35px] text-white dark:bg-gray-900">
        <div className="w-[90px] m-[10px] h-[45px] rounded-md text-[20px] text-[white] bg-[#12C5E4]  border border-[#12C5E4] flex items-center justify-center dark:text-[white] md:h-[40px] md:w-[50px]">
          <Switcher />
        </div>
        <Fade delay={1000} cascade damping={0.1}>
          <h2 className="text-3xl text-[black] dark:text-[white]">
            <Typewriter
              words={["SortNShuffle", "Your", "Names"]}
              loop
              cursor
              typeSpeed={500}
              delaySpeed={150}
            />
          </h2>
        </Fade>
        <p className="w-[90%] text-center text-opacity-60 text-sm md:w-[40%] md:text-[20px] leading-[28px] text-[black] dark:text-[white]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsa
          aut sunt sapiente. Accusamus repudiandae dolorum reiciendis doloribus
          obcaecati vel.
        </p>
        <div
          className="flex justify-center items-center bg-cover bg-center bg-no-repeat shadow-lg p-4 md:px-5 md:py-3 rounded-full text-xl md:text-sm transition-transform duration-500 hover:scale-90"
          style={{
            backgroundImage: buttonWrapGradient,
            padding: "15px 27px",
          }}
        >
          <IoShuffleSharp className="text-white" />
          <button
            className="text-white text-capitalize outline-none border-none cursor-pointer"
            style={{
              fontSize: "15px",
            }}
          >
            Get Started
          </button>
          <AiOutlineSortAscending className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Header;

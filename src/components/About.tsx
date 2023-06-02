import "../index.css";
import ImgAbout from "../assets/about-2.png";
import { TypeAnimation } from "react-type-animation";

function About() {
  return (
    <div id="about" className="section">
      <div className="w-full md:mt-[10rem]">
        <div className="flex w-full justify-center items-center flex-col md:flex-row">

          <div className="h-[360px] md:h-[674px] md:pt-[5rem] mix-blend-lighten w-[390px] md:w-[500px]">
            <img src={ImgAbout} alt="" />
          </div>
          <div>
            <div className="w-full flex justify-center">
              <h1 className="text-5xl md:text-[5rem] font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text cursor-pointer hover:bg-gradient-to-r hover:from-purple-400 rainbow-text hover:scale-110">
                ABOUT ME
              </h1>
            </div>
            <div className="p-4 text-center">
              <TypeAnimation
                sequence={[
                  "Student at Faculty of informatics BUU , Software Engineering",
                  1000,
                  "",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
              />
              <p> 
                programming is my passion. I love learning and never stop
                develop myself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

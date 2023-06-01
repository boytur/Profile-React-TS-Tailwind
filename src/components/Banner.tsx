import ImgProfile from "../assets/Profile.png";
import { TypeAnimation } from "react-type-animation";
import { BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Banner() {
  return (
    <motion.div
      initial={{ opacity: 0 }} // ค่าเริ่มต้นของแอนิเมชัน (โปร่งแสงเท่ากับ 0)
      animate={{ opacity: 1 }} // ค่าที่แอนิเมชันควรทำงานในขณะที่แสดงผล (โปร่งแสงเท่ากับ 1)
      transition={{ duration: 4 }} // ระยะเวลาในการแสดงแอนิเมชัน (ในที่นี้คือ 1 วินาที)
    >
      <div className=" w-full  flex flex-col mt-4 items-center md:flex-row">
        <div className=" w-full  items-center flex flex-col h-[15rem] justify-center">
          <div className="text-5xl md:text-[6rem] font-bold">
            <h1>PIYAWAT</h1>
          </div>
          <div className="text-2xl md:text-[rem]">
            <span>I am a </span>
            <TypeAnimation
              sequence={["Developer ", 1000, "Editor ", 1000]}
              speed={50}
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
              wrapper="span"
              repeat={Infinity}
            />
          </div>
          <br />
          {/* Btn Contact n My Profile */}
          <div className=" w-[22rem] md:w-[26rem] flex justify-between">
            <div>
              <button className=" btn btn-sm">
                <p>CONTACT ME</p>
              </button>
            </div>
            <div className="hover:scale-125 pt-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text cursor-pointer">
              <Link 
              to="about" 
              smooth="true">
              <p>MY PROFILE</p>
              </Link>
            </div>
          </div>
          {/* Socail media */}
          <div className="md:w-[25rem]">
            <div className="w-[10rem] md:w-[10rem]  flex justify-between pt-3">
              <a href="https://github.com/boytur" className="hover:scale-125">
                <BsGithub />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=100084796533376"
                className="hover:scale-125"
              >
                <BsFacebook />
              </a>
              <a
                href="https://www.instagram.com/piyxwattto.bx/"
                className="hover:scale-125"
              >
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-center">
          <img
            className=" w-[482px] h-[482px] object-contain"
            src={ImgProfile}
            alt=""
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Banner;

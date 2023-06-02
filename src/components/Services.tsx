import { BsArrowUpRight } from "react-icons/bs";
import { SiAdobepremierepro ,SiAdobephotoshop ,SiReact,SiTypescript} from "react-icons/si";


function Services() {
  return (
    <div id="services" className="section">
      <div className="w-full mt-[3rem] md:flex">
        <div className="w-full flex justify-center md:mt-[3rem]">
          <h1 className="text-5xl md:text-[5rem] font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text cursor-pointer hover:bg-gradient-to-r hover:from-purple-400 rainbow-text hover:scale-110">
            WHAT I DO ?
          </h1>
        </div>
        <div>
          <div className="p-7 font-bold md:mt-[2rem]">
            <p>
              I'm a video editor and a frontend developer, now interested in
              backend developer, I love to learn and have fun every time I
              learn.
            </p>
          </div>
          <div className="p-5 pt-0">
            <button className="btn btn-sm">
              <p>View my work</p>
            </button>
          </div>
        </div>
      </div>
      <div>
        y <div className="w-full flex justify-center">
        {/* Gard */}
        <div className=" border flex flex-col md:max-w-[40rem]">
          <div className=" w-full  border flex justify-between px-7">
            <div>
              <p>Fron-end work</p>
            </div>
            <div className="w-[42px] rounded-full p-1 pl-[11px] pt-[5px] btn">
              <button>
                <BsArrowUpRight />
              </button>
            </div>
          </div>
          <div className="p-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            architecto, iste, eius dolor fuga molestiae beatae vero ipsa ea
            vitae veritatis distinctio harum sint eligendi atque a blanditiis
            officia consequatur.
          </div>
          <div className="flex p-6 pt-0">
            <div className="pr-5">
              <SiReact/></div>
            <div><SiTypescript/></div>
          </div>
          {/* Gard */}
          <div className=" w-full  border flex justify-between px-7">
            <div>
              <p>Video works</p>
            </div>
            <div className="w-[42px] rounded-full p-1 pl-[11px] pt-[5px] btn">
              <button>
                <BsArrowUpRight />
              </button>
            </div>
          </div>
          <div className="p-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            architecto, iste, eius dolor fuga molestiae beatae vero ipsa ea
            vitae veritatis distinctio harum sint eligendi atque a blanditiis
            officia consequatur.
          </div>
          <div className="flex p-6 pt-0">
            <div className="pr-5"><SiAdobepremierepro /></div>
            <div><SiAdobephotoshop/></div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Services;

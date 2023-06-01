import { BiHomeAlt , BiUser , BiConversation} from "react-icons/bi";
import { BsClipboard2Data , BsBriefcase} from "react-icons/bs";
import { Link } from "react-scroll";

function Nav() {
  return (
    <nav className=" fixed mt-[32rem] w-full z-50 bottom-[2rem]">
      <div className="w-full  flex justify-center">
        <div className="w-[20rem] md:w-[25rem] bg-black/20 h-[5rem] flex justify-between p-4 px-10 rounded-full">
          <Link
            activeClass="active"
            smooth="true"
            spy={true}
            to="home"
            className=" cursor-pointer h-[50px] w-[50px] justify-center flex pt-[15px] hover:scale-110"
          >
            <BiHomeAlt />
          </Link>
          <Link
            activeClass="active"
            smooth="true"
            spy={true}
            to="about"
            className=" cursor-pointer h-[50px] w-[50px] justify-center flex pt-[15px] hover:scale-110"
          >
            <BiUser />
          </Link>
          <Link
            activeClass="active"
            smooth="true"
            spy={true}
            to="services"
            className=" cursor-pointer h-[50px] w-[50px] justify-center flex pt-[15px] hover:scale-110"
          >
            <BsClipboard2Data />
          </Link>
          <Link
            activeClass="active"
            smooth="true"
            spy={true}
            to="work"
            className=" cursor-pointer h-[50px] w-[50px] justify-center flex pt-[15px] hover:scale-110"
          >
            <BsBriefcase />
          </Link>
          <Link
            activeClass="active"
            smooth="true"
            spy={true}
            to="contact"
            className=" cursor-pointer h-[50px] w-[50px] justify-center flex pt-[15px] hover:scale-110"
          >
            <BiConversation />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

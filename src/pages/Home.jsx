import CardImage1Path from "../assets/cardImage1.png";
import CardImage2Path from "../assets/cardImage2.png";
import CardImage3Path from "../assets/cardImage3.png";
import CardImage4Path from "../assets/cardImage4.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center bg-gray-50">
      <div className="w-full pt-32">
        <h1 className="  text-center text-6xl font-semibold text-zinc-900">
          Animation Gallery
        </h1>
      </div>
      <div className="flex h-full items-center gap-10">
        <Link to="/mailbox">
          <div className="h-80 w-60 cursor-pointer rounded-xl bg-white shadow-md">
            <div className="h-2/3 w-full overflow-hidden ">
              <img
                src={CardImage1Path}
                className="w-full  rounded-t-xl duration-500 ease-out hover:scale-110"
              />
            </div>
            <div className="flex h-1/3 w-full items-center justify-center px-2">
              <h1 className=" text-3xl text-zinc-600">MailBox</h1>
            </div>
          </div>
        </Link>
        <Link to="/sidemenu">
          <div className="h-80 w-60 cursor-pointer rounded-xl bg-white shadow-md">
            <div className="h-2/3 w-full overflow-hidden ">
              <img
                src={CardImage2Path}
                className="h-full w-full rounded-t-xl object-cover duration-500 ease-out hover:scale-110"
              />
            </div>
            <div className="flex h-1/3 w-full items-center justify-center px-2">
              <h1 className=" text-3xl text-zinc-600">SideMenu</h1>
            </div>
          </div>
        </Link>
        <Link to="/multistep">
          <div className="h-80 w-60 cursor-pointer rounded-xl bg-white shadow-md">
            <div className="h-2/3 w-full overflow-hidden ">
              <img
                src={CardImage3Path}
                className="h-full w-full rounded-t-xl object-cover duration-500 ease-out hover:scale-110"
              />
            </div>
            <div className="flex h-1/3 w-full items-center justify-center px-2">
              <h1 className=" text-3xl text-zinc-600">MultiStep</h1>
            </div>
          </div>
        </Link>
        <Link to="/carousel">
          <div className="h-80 w-60 cursor-pointer rounded-xl bg-white shadow-md">
            <div className="h-2/3 w-full overflow-hidden ">
              <img
                src={CardImage4Path}
                className="h-full w-full rounded-t-xl object-cover duration-500 ease-out hover:scale-110"
              />
            </div>
            <div className="flex h-1/3 w-full items-center justify-center px-2">
              <h1 className=" text-3xl text-zinc-600">Carousel</h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;

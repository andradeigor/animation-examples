import Image1Path from "../assets/image1.jpg";
import Image2Path from "../assets/image2.jpg";
import Image3Path from "../assets/image3.jpg";
import Image4Path from "../assets/image4.jpg";
import Image5Path from "../assets/image5.jpg";
import Image6Path from "../assets/image6.jpg";
import { ArrowSmallRightIcon } from "../components/RightArrowIcon/RightArrowIcon";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carrossel = () => {
  const [Images, setImages] = useState([
    Image1Path,
    Image2Path,
    Image3Path,
    Image4Path,
    Image5Path,
    Image6Path,
  ]);

  const [image, setImage] = useState(0);
  const [prev, setPrev] = useState(image);
  let direction = image > prev ? 1 : -1;
  const HandleRightClick = () => {
    if (image >= Images.length - 1) {
      return;
    }
    setPrev(image);
    setImage(image + 1);
  };
  const HandleLeftClick = () => {
    if (image <= 0) {
      return;
    }
    setPrev(image);
    setImage(image - 1);
  };
  return (
    <main className="h-screen w-screen  bg-gray-50">
      <div className=" relative flex h-full w-full items-center justify-center">
        <AnimatePresence initial={false}>
          <motion.img
            className="absolute h-full w-full select-none object-cover "
            src={Images[image]}
            variants={{
              enter: (direction) => ({
                x: 1000 * direction,
              }),
              center: { x: 0 },
              exit: (direction) => ({ x: -1000 * direction }),
            }}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            key={image}
          />
        </AnimatePresence>

        <div
          onClick={HandleRightClick}
          className="absolute top-1/2 right-2 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full  bg-zinc-900/40"
        >
          <ArrowSmallRightIcon className=" h-6 w-6 font-bold text-gray-50" />
        </div>
        <div
          onClick={HandleLeftClick}
          className="absolute top-1/2 left-2 flex h-12 w-12 -translate-y-1/2 rotate-180 cursor-pointer items-center justify-center rounded-full  bg-zinc-900/40"
        >
          <ArrowSmallRightIcon className=" h-6 w-6 font-bold text-gray-50" />
        </div>
        <div className="absolute bottom-0 left-1/2 flex h-8 w-full -translate-x-1/2 rotate-180 flex-row-reverse items-center justify-center gap-x-3">
          {Images.map((_, index) => {
            return (
              <div
                key={index}
                className={`h-3 w-3 rounded-full ${
                  index == image ? "bg-gray-50/40" : "bg-zinc-900/40"
                }`}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Carrossel;

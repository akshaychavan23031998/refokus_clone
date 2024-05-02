import {  useScroll } from "framer-motion";
import { useState } from "react";
const Work = () => {

  const [images, setImages] = useState( [
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15-p-500.webp",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b413200259aa2289224594_Frame%204-p-500.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f112dec7a59534cca51a3d_portfolioCard_cc-01-p-500.webp",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cd6ec7666ac6009cfcb7db_11-p-500.jpg",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc29f414c45ee4f46aa3ba_01-p-500.jpg",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b415e16156819899272250_Frame%202-p-500.png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();
  scrollYProgress.on("change", (data) => {
    function imageShow(arr) {
      setImages(prev => (
        prev.map((item, index) => (
          arr.indexOf(index) === -1 ? (
            {...item, isActive: false}
          )
          : {...item, isActive: true}
        ))
      ))
    }


    switch (Math.floor(data*100)) {
        case 0:
            // console.log("0");
            imageShow([]);
            break;
        case 1:
            // console.log("01");
            imageShow([0]);
            break;
        case 2:
            // console.log("012");
            imageShow([0,1]);
            break;
        case 3:
            // console.log("0123");
            imageShow([0,1,2]);
            break;
        case 4:
            // console.log("01234");
            imageShow([0,1,2,3]);
            break;
        case 6:
          // console.log("01234");
          imageShow([0,1,2,3,4]);
          break;
        case 8:
        // console.log("01234");
        imageShow([0,1,2,3,4,5]);
        break;
    }
  });

  return (
    <div className="w-full mt-10">
      <div className="relative max-w-screen-lg mx-auto text-center">
        <h1 className="text-[30vw] leading-none tracking-tight select-none font-medium">
          Work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  style={{ top: elem.top, left: elem.left }}
                  src={elem.url}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};
export default Work;

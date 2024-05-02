import { motion } from "framer-motion";

const Marquee = ({imageurls, direction}) => {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div initial={{x: direction === 'left' ? "0" : "-100%"}} animate={{x: direction === 'left' ? "-100%" : "0"}} transition={{ease: "linear", duration: 15, repeat: Infinity}} className="flex flex-shrink-0 gap-10 py-10 pr-10">
        {imageurls.map((url, index) => (
          <img key={index} src={url} className="" />
        ))}
      </motion.div>
      <motion.div initial={{x: direction === 'left' ? "0" : "-100%"}} animate={{x: direction === 'left' ? "-100%" : "0"}} transition={{ease: "linear", duration: 15, repeat: Infinity}} className="flex flex-shrink-0 gap-10 py-10 pr-10">
        {imageurls.map((url, index) => (
          <img key={index} src={url} className="" />
        ))}
      </motion.div>
    </div>
  );
};
export default Marquee;

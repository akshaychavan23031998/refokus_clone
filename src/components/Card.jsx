import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
const Card = ({width, start, para, hover="false"}) => {
    return (
        <motion.div whileHover={{backgroundColor: hover==="true" && "#7443ff", padding:"25px"}} className={`${width} bg-zinc-800 p-5 rounded-lg min-h-[30rem] flex flex-col justify-between`}>
            <div className="w-full">
                <div className="w-full flex items-center justify-between">
                <h3>One Heading: Honer</h3>
                <IoIosArrowRoundForward/>
                </div>
                <h1 className="text-3xl font-medium mt-5">Heading Here</h1>
            </div>
            <div className="down w-full mt-52">
                {start && (
                    <>
                        <h1 className="text-6xl font-medium tracking-tight leading-none">Start a Project</h1>
                        <button className="px-5 mt-5 rounded-full py-2 border-[1px] border-zinc-500">Contact Us</button>
                    </>
                )}
                {para && (
                    <p className="text-sm text-zinc-400 font-medium mt-5">Vestibulum ante ipsum primis in faucibus orci</p>
                )}
            </div>
        </motion.div>
    )
}
export default Card;
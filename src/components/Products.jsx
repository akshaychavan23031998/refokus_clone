import { motion } from "framer-motion";
import Product from "./Product";
import { useState } from "react";

const Products = () => {
    var products = [
    {
        title:"arqitel",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        live:true,
        case:false,
    },
    {
        title:"TTR",
        description:"Sed vestibulum sem vitae magna facilisis dignissim. Curabitur dictum enim sit amet nisi fermentum, id finibus.",
        live:true,
        case:false,
    },
    {
        title:"YIR 2022",
        description:"Nullam in mi ultricies, congue velit eget, tincidunt nunc. Maecenas non libero eget nunc consequat laoreet.",
        live:true,
        case:true,
    },
    {
        title:"YMR 2057",
        description:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis aliquet gravida nibh.",
        live:true,
        case:true,
    },
    {

        title:"XHJ 2089",
        description:"Phasellus vitae risus in justo consequat efficitur id sed enim. Nam tincidunt blandit purus, nec scelerisque.",
        live:true,
        case:true,
    },]

    const [pos, setPos] = useState(0);
    const mover = (val) => {
        setPos(val*20);
    }

    return (
        <div className="relative">
            {products.map((val, index) => {
                return <Product mover={mover} key={index} count={index} val={val}/>
            })}
            <div className="absolute top-0 w-full h-full pointer-events-none">
                <motion.div animate={{y: pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration:0.6}} initial={{y: pos}} className="window absolute w-[25rem] h-[20rem] left-[31%] overflow-hidden">
                    <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration:0.5}} className="w-full h-full">
                        <video className="w-full h-full " muted autoPlay loop src="./src/assets/1.mp4"></video>
                    </motion.div>
                    <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration:0.5}} className="w-full h-full">
                        <video className="w-full h-full" muted autoPlay loop src="./src/assets/2.mp4"></video>
                    </motion.div>
                    <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration:0.5}} className="w-full h-full">
                        <video className="w-full h-full" muted autoPlay loop src="./src/assets/3.mp4"></video>
                    </motion.div>
                    <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration:0.5}} className="w-full h-full">
                        <video className="w-full h-full" muted autoPlay loop src="./src/assets/4.mp4"></video>
                    </motion.div>
                    <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration:0.5}} className="w-full h-full">
                        <video className="w-full h-full" muted autoPlay loop src="./src/assets/5.mp4"></video>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
export default Products;
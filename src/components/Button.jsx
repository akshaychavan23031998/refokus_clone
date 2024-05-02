import { IoIosReturnRight } from "react-icons/io";
const Button = () => {
    return (
        <div className="max-w-40 px-4 py-1 bg-zinc-100 text-black rounded-full ">
            <span className="text-sm font-medium flex items-center justify-between">
                Get Started
                <IoIosReturnRight className="items-center" />
            </span>
        </div>
    )
}
export default Button;
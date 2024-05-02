import Button from "./Button";

const Product = ({val, mover,count}) => {
    return (
        <div className="w-full px-32 pt-20 h-[20rem] text-white">
            <div onMouseEnter={() => {mover(count)}} className="max-w-screen-xl mx-auto flex items-center justify-between">
                <h1 className="text-6xl capitalize font-medium">{val.title}</h1>
                <div className="dets w-1/3">
                    <p className="mb-5">{val.description}</p>
                    <Button />
                </div>
            </div>
        </div>
    )
}
export default Product;
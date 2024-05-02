import Card from "./Card";

const Cards = () => {
    return (
        <div className="w-full">
            <div className="max-w-screen-lg gap-1 mx-auto py-20 flex">
                <Card width={"basis-1/3"} start={false} para={true}/>
                <Card width={"basis-2/3"} start={true} para={false} hover="true"/>
            </div>
        </div>
    )
}
export default Cards;
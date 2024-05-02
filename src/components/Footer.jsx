const Footer = () => {
    return (
        <div className="w-full">
            <div className="max-w-screen-lg py-10 flex gap-20 mx-auto">
                <div className="basis-1/2">
                    <h1 className="text-[11rem] tracking-tight font-semibold leading-none">refokus.</h1>
                </div>
                <div className="basis-1/2 flex gap-10"> 
                    <div className="basis-1/3">
                        <h4 className="mb-10 capitalize text-zinc-400">Socials</h4>
                        {["instagram", "twitter", "facebook", "linkedin"].map((item, index) => <a key={index} className="text-zinc-500 capitalize flex flex-col">{item}</a>)}
                    </div>
                    <div className="basis-1/3">
                        <h4 className="mb-10 capitalize text-zinc-400">sitemaa</h4>
                        {["Home", "work", "about", "news"].map((item, index) => <a key={index} className="text-zinc-500 capitalize flex flex-col">{item}</a>)}
                    </div>
                    <div className="basis-1/2">
                        <p className="text-right capitalize text-zinc-400">Nullam in mi ultricies, congue velit eget, tincidunt.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;
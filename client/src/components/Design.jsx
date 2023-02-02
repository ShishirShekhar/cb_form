import logo from "../assets/cblogogray.png";

const Design = () => {
    return (
        <div className="h-full w-full">
            <div className="absolute h-[2000px] w-[2000px] bg-primary rounded-full right-full -translate-y-1/2 translate-x-1/3 -z-10"></div>
            <div className="h-full flex flex-col justify-between items-center py-36 w-full">
                <div className="text-white flex flex-col items-center gap-3 w-96">
                    <p className="font-bold text-2xl">Want to be one of us?</p>
                    <p className="">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
                        quisquam.
                    </p>
                </div>

                <div className="w-96">
                    <img src={logo} alt="logo" />
                </div>
            </div>
        </div>
    );
};

export default Design;

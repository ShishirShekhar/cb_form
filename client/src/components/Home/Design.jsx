import logoGray from "../../assets/cblogogray.png";
import logoWhite from "../../assets/cblogowhite.png";

const Design = () => {
    return (
        <div className="h-full w-full">
            <div className="h-full flex flex-col sm:justify-between items-center gap-4 sm:gap-0 lg:py-36 py-10 w-full">
                <div className="text-white flex flex-col items-center gap-3 w-80 sm:w-96">
                    <p className="font-bold text-3xl drop-shadow-2xl">Want to be one of us?</p>
                    <p className="text-center text-xl drop-shadow-2xl">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
                        quisquam.
                    </p>
                </div>

                <div className="w-80 sm:w-96">
                    <img src={logoGray} alt="logo" className="hidden xl:block" />
                    <img src={logoWhite} alt="logo" className="block xl:hidden" />
                </div>
            </div>
        </div>
    );
};

export default Design;

import Link from "next/link";
import { ReactNode } from "react";
import { IoMdCheckmark } from "react-icons/io";

interface PricingIntf{
    name: string,
    price: number,
    discount: number,
    mostUsed: boolean,
    feature: { nameFeature: string }[];
    className?: string;
    buttonText?: JSX.Element | ReactNode;
}

const PricingBox: React.FC<PricingIntf> = ({ name, price, discount, mostUsed, feature, className, buttonText }) =>{
    return(
        <div className={`${className} ${mostUsed ? "border-2 border-pinky shadow-pinkShadow" : "shadow-boxShadow"} pt-5 rounded-2xl flex flex-col gap-5 relative`}>
            <div className="px-[30px] flex flex-col gap-5">
                <div className="">
                    <h3 className="text-xl xl:text-2xl"><strong>{name}</strong> Plan</h3>
                    <div className={`${mostUsed ? "" : "hidden"} bg-pinky text-white text-lg lg:text-[22px] font-semibold w-fit py-3 rounded-bl-xl rounded-tr-xl absolute top-0 right-0`}>🌟Most Used</div>
                </div>
                <hr />
                <div>
                    <p className="text-sm text-lightGray">start from</p>
                    <div className="flex items-end">
                        <div className="relative">
                            <strong className="text-2xl md:text-3xl z-10">Rp{price.toLocaleString("id-ID")}</strong>
                            <div className="bg-lightPink2 h-5 w-full -z-0 -mt-4" />
                        </div>
                        <p className="text-sm text-lightGray">/ <span className="font-bold md:text-lg">Disc</span> up to <span className="text-lg md:text-xl font-bold text-blue">{discount}%</span></p>
                    </div>
                </div>
                <Link href={``} className="w-full text-center rounded-full border border-pinky text-pinky md:text-lg bg-[#FFF6F6] font-semibold py-1">{buttonText}</Link>
            </div>
            <div className="flex flex-col gap-1 py-10 px-[30px] bg-gradient-to-br from-lightPink to-white rounded-b-2xl">
                <p className="text-lg font-bold">* Feature</p>
                {feature.slice(0, 5).map((item, index) => (
                    <p key={index} className="flex items-center gap-2"><IoMdCheckmark className="text-blue text-lg" /> {item.nameFeature}</p>
                ))}
            </div>
        </div>
    )
}

export default PricingBox;
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { benefit } from "@/data/data";

const Benefit: React.FC = () =>{
    return(
        <div className="mx-5 md:mx-10 xl:mx-20 my-20">
            <div>
                <Subtitle>👑 why choose us</Subtitle>
                <Title>Benefit from our Invitation</Title>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-5 md:gap-10">
                <div className="w-full flex flex-col gap-5 md:gap-10">
                    <div className="flex flex-col gap-2">
                        {benefit.slice(0, 4).map((item, index) => (
                            <p key={index} className="text-sm md:text-base text-lightGray">• {item.desc}</p>
                        ))}
                    </div>
                    <div className="h-[500px] rounded-xl bg-lightGray"></div>
                </div>
                <div className="w-full flex flex-col-reverse lg:flex-col gap-5 md:gap-10">
                    <div className="h-[500px] rounded-xl bg-lightGray"></div>
                    <div className="flex flex-col gap-2">
                        {benefit.slice(4, 8).map((item, index) => (
                            <p key={index} className="text-sm md:text-base text-lightGray">• {item.desc}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefit;
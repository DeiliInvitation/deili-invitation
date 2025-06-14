import Subtitle from "@/components/Subtitle";
import TemplateBox from "@/components/TemplateBox";
import Title from "@/components/Title";
import Image from "next/image";
import Link from "next/link";
import { TemplateData, Categories } from "@/data/data";

const TemplateList: React.FC = () =>{
    return(
        <div className="mx-5 md:mx-10 my-20">
            <div>
                <Subtitle>💡 Find Templates</Subtitle>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-0">
                    <Title>list of invitation templates</Title>
                    <Link href={`/template`} className="underline -mt-2">All Templates</Link>
                </div>
                <p className="font-extralight text-sm md:text-base mt-5 md:mt-0">
                Here is the few list of invitation <span className="text-blue font-semibold">templates</span>, if you want to see all
                invitation, go to templates. Choose the invitation you want. If you
                want to know the difference of <span className="text-blue font-semibold">Basic, Premium, and VIP</span> template, check  
                <span className="font-semibold"> pricing here.</span>
                </p>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-3 overflow-hidden">
                <h3 className="font-bold text-lg md:text-xl">Categories</h3>
                <div className="flex flex-wrap items-center gap-3 rounded-2xl md:rounded-full p-2 shadow-innerShadow border border-black ">
                    {Categories.map((item, index) => (
                        <button key={index} className="rounded-full bg-lightPink pr-2 w-fit flex items-center gap-1 text-sm md:text-base font-semibold">
                            <Image alt="" src={item.image} width={30} height={30} className="rounded-full bg-lightGray"/>
                           {item.name}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 mt-3">
                    {TemplateData.slice(0, 3).map((item, index) => (
                        <TemplateBox name={item.name} image={item.image} disc={item.discount} price={item.price} type={item.type} key={index}  />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TemplateList;
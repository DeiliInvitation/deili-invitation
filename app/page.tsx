import Hero from "./components/Hero";
import TemplateList from "./components/TemplateList";
import Benefit from "./components/Benefit";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import img from "@/public/deili-bg.webp";

export default function Home() {
  return (
    <main>
      <Hero />
      <div id="banner" className="w-full shadow-softShadow flex flex-col md:flex-row">
        <div className="flex flex-col lg:flex-row pl-10 pr-5 py-10 md:w-[45%] lg:items-center gap-2">
          <div className="flex">
            {[...Array(3)].map((_, index) => (
              <Image src={`/image.png`} key={index} alt="" width={85} height={85} className={`${index === 1 ? "-translate-x-10" : index === 2 ? "-translate-x-20" : ""} rounded-full bg-lightGray border border-white`}/>
            ))}
          </div>
          <div className="lg:-ml-20 flex flex-col gap-4">
            <div>
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="inline text-yellow-500 text-[35px]"/>
              ))}
            </div>
            <p className="font-light">See what our client says about us! 😄</p>
            <Link href={`#Testimonial`} className="font-bold text-lg underline">Testimonials</Link>
          </div>
        </div>
        <div className=" md:w-[55%] lg:max-h-[214px] overflow-hidden">
          <Image src={img} alt="image" className="w-full h-full object-cover"/>
        </div>
      </div>
      <TemplateList />
      <div className="w-full h-[214px] overflow-hidden">
        <Image alt="banner" src={img} className="h-[214px] object-cover" />
      </div>
      <Benefit />
      <hr className="mx-10" />
      <Pricing />
      <div id="banner" className="w-full shadow-softShadow flex ">
        <div className=" w-[55%] max-h-[214px] overflow-hidden">
          <Image src={img} alt="image" className="w-full h-full object-cover"/>
        </div>
        <div className="flex pl-10 pr-5 py-10 w-[45%] items-center gap-2" />
      </div>
      <Testimonial />
    </main>
  );
}

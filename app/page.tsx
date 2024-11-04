import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import deilibg from "@/public/deili-bg.webp";
import deiliimg from "@/public/deili-img.webp";
import logo from "@/public/logo.png";

const contact = [
  {
    icon: FaWhatsapp,
    name: "WhatsApp",
    link: "https://wa.me/6285198910919?text=halo,%20saya%20ingin%20bertanya%20mengenai%20wedding%20invitation%20website",
  },
  {
    icon: FaInstagram,
    name: "Instagram",
    link: "https://instagram.com/deiliinvitation",
  },
];

export default function Home() {
  return (
    <div className="relative ">
      <div className="absolute top-0 left-0 md:left-20 lg:left-40 z-30">
        <div className="p-5 flex items-center gap-10">
          {contact.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="flex items-center gap-2 text-xl text-white md:text-black "
            >
              <item.icon className="text-2xl" /> {item.name}{" "}
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full h-full md:w-screen md:h-screen flex flex-col-reverse md:flex-row md:justify-between relative">
        <div className="flex w-full h-full md:w-1/2 items-center justify-center bg-yellow-50">
          <div className="flex flex-col-reverse justify-end h-full md:flex-col gap-5 pt-20 pb-10 md:py-5">
            <Image
              src={deiliimg}
              alt="image"
              className="w-[300px] h-[400px] object-cover object-top grayscale"
            />
            <p className="text-xl">
              Crafting memories, <br />
              design your dream, <br />
              with us.
            </p>
          </div>
        </div>
        <div className="p-5 absolute top-[45%] left-[35%] md:top-[40%] md:left-[42%] lg:left-[45%] z-50">
          <Image src={logo} alt="logo" className="w-24 h-24" />
        </div>
        <div className="w-full md:w-1/2 relative overflow-hidden">
          <div className="h-screen w-full flex flex-col items-center justify-center">
            <div className="absolute z-10 h-screen w-full bg-black opacity-40 md:opacity-20"></div>
            <div className="absolute top-0 left-0 h-screen w-full">
              <Image
                src={deilibg}
                alt="background"
                className="h-screen w-full object-cover object-center"
              />
            </div>
            <h1 className="z-20 font-sallim text-8xl font-light text-yellow-50 ">
              Deili <br />
              <span className="ml-10">Invitation</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

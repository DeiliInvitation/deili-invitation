import Link from "next/link";
import Image from "next/image";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandTiktokFilled } from "react-icons/tb";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdAttachEmail } from "react-icons/md";

const socmed = [
    {
        icon: <RiInstagramFill/>,
        name: "Instagram",
        link: "http://instagram.com"
    },
    {
        icon: <TbBrandTiktokFilled />,
        name: "Tiktok",
        link: "http://tiktok.com"
    }
]

const contact = [
    {
        icon: <IoLogoWhatsapp />,
        name: "Whatsapp",
        link: "wa.me"
    },
    {
        icon: <MdAttachEmail />,
        name: "Email",
        link: "rizkiamel9@gmail.com"
    }
]

const Footer: React.FC = () =>{
    return(
        <div id="Footer" className="overflow-hidden bg-black px-5 md:px-[35px] pt-[70px] pb-[-20px] rounded-b-xl text-white ">
            <div className="flex flex-col md:flex-row justify-between gap-10 ">
                <span className=" text-4xl md:text-6xl lg:text-[65px] font-semibold bg-gradient-to-r from-white via-pinky to-thickPink text-transparent bg-clip-text capitalize leading-tight w-full max-w-[727px]">Let’s have <br /> a talk to create your Love Invitation.</span>
                <div className="flex flex-col gap-4 md:gap-[30px]">
                    <span className="text-xl font-extrabold">Social Media</span>
                    <div className="flex flex-col gap-3">
                        {socmed.map((item, index) => (
                            <Link href={item.link} key={index} className="flex items-center gap-2 text-sm"><span className="text-lg text-pinky">{item.icon}</span> {item.name}</Link>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4 md:gap-[30px]">
                    <span className="text-xl font-extrabold">Contact</span>
                    <div className="flex flex-col gap-3">
                        {contact.map((item, index) => (
                            <Link href={item.link} key={index} className="flex items-center gap-2 text-sm"><span className="text-lg text-pinky">{item.icon}</span> {item.name}</Link>
                        ))}
                    </div>
                </div>
            </div>
            <hr className="border-white my-5" />
            <div className="w-full">
                <div className="grid grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-cols-3 items-center"> 
                    <p className="font-semibold col-start-1 col-span-1 w-full">&copy; Deili Invitation, 2025.</p>
                    <div className="col-start-2 col-span-1 flex justify-end md:justify-center w-full">
                        <Image src={`/logo.png`} alt="logo" width={100} height={100} className="rounded-full bg-black" />
                    </div>
                    <div className="flex items-center gap-1 row-start-2 md:row-start-1 row-span-1 col-start-1 md:col-start-3 col-span-2 justify-center md:justify-end w-full">
                        <p>Made by</p>
                        <Image src={`/mypic.webp`} alt="logo" width={30} height={30} className="rounded-full bg-lightGray" />
                        <p className="font-sallim text-xl">Amalia</p>
                    </div>
                </div>
                <h1 className="text-center text-4xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-[130px] font-bold bg-gradient-to-r from-white via-pinky to-thickPink text-transparent bg-clip-text leading-none translate-y-1 md:translate-y-3 lg:translate-y-5 whitespace-nowrap" id="footer-text">DEILI INVITATION</h1>
            </div>
        </div>
    )
}

export default Footer;
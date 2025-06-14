import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import { BsArrowDownRight } from "react-icons/bs";

const navbar = [
    {
        link: "/",
        name: "Home"
    },
    {
        link: "/template",
        name: "Templates"
    },
    {
        link: "/pricing",
        name: "Pricing"
    }
]

const Header: React.FC = () =>{
    return(
        <div className="grid grid-cols-3 w-full px-3 py-2 shadow-softShadow rounded-full">
            <div className="flex items-center gap-2">
                <Image src={`/image.png`} alt="image" className="rounded-full bg-lightGray" width={45} height={45} />
                <h3 className="font-sallim text-2xl">Deili Invitation</h3>
            </div>
            <div className="justify-self-center flex items-center justify-center gap-5 font-extralight text-sm">
                {navbar.map((item, index) => (
                    <Link href={item.link} key={index}>{item.name}</Link>
                ))}
            </div>
            <div className="justify-self-end flex items-center">
                <Button className=""><Link href={`#Footer`} className="flex items-center gap-2 font-dancingScript text-lg pl-3">Contact <span className="bg-white text-pinky rounded-full p-1"><BsArrowDownRight/></span></Link></Button>
            </div>
        </div>
    )
}

export default Header;
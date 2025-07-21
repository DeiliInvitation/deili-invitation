import Button from "@/components/Button";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { Spotlight } from "@/components/ui/spotlight-new";

const Hero: React.FC = () =>{
    return(
        <div className="relative h-full overflow-hidden mt-0 lg:mt-[-10vh] xl:mt-[-13.5vh] bg-white/[0.96] antialiased bg-grid-black/[0.02]">
            <div className="z-0 hidden lg:block">
                <Spotlight />
            </div>
            <div className="relative z-20 mx-5 md:mx-10 xl:mx-20 mt-8 md:mt-[13.5%]">
                <div className="flex flex-col justify-between items-center text-center ">
                    <Subtitle className="lg:text-xl">✨ best platform</Subtitle>
                    <Title className="text-4xl md:text-[44px] 2xl:text-6xl">create digital invitation creatively</Title>
                    <p className="lg:text-lg my-3 md:my-5 font-extralight">Suitable for wedding invitation, birthday invitation, company or organization.<br /> <span>Fast. Efficient. Easy to use. Ready to deploy.</span> </p>
                    
                    <Button className="w-fit"><Link href={`#TemplateList`} className="flex items-center gap-2 font-dancingScript md:text-lg pl-5">Create Invitation <span className="bg-white text-pinky rounded-full p-2"><FaHeart /></span></Link></Button>
                    <div className="border-2 bg-white border-lightPink2 mt-7 md:mt-10 flex flex-wrap gap-x-5 gap-y-2 py-8 px-6 text-xs md:text-sm text-lightGray font-light rounded-t-2xl w-full lg:max-w-[500px]">
                        <p>#WeddingInvitation</p>
                        <p>#UndanganPernikahan</p>
                        <p>#WeddingTemplates</p>
                        <p>#DigitalInvitation</p>
                        <p>#InvitationTemplate</p>
                        <p>#RSVPInvitation</p>
                    </div>
                </div>
                {/* <div>
                    <div className="bg-gradient-to-b from-lightPink2 via-lightPink to-white lg:rounded-t-xl">
                        <Image src={`/deili-bg.webp`} alt="image hero" width={540} height={450} />
                        
                    </div>
                </div> */}
            </div>
            {/* <div className="absolute inset-0 -z-10 w-full h-full">
                <Image 
                    src={bg}
                    alt="background" 
                    fill
                    className="object-cover w-full h-full"
                    quality={100}
                />
            </div> */}
        </div>
    )
}

export default Hero;
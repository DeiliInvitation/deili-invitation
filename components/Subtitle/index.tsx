interface SubtitleProps{
    children?: JSX.Element | React.ReactNode;
    className?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ children, className }) =>{
    return(
        <div className="bg-gradient-to-br from-lightPink to-white px-3 w-fit rounded-xl flex items-center border border-thickPink shadow-boxShadow">
            <h2 className={`${className} capitalize text-pinky font-dancingScript text-sm md:text-lg `}>{children}</h2>
        </div>
    )
}

export default Subtitle;
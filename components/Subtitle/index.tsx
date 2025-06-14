interface SubtitleProps{
    children?: JSX.Element | React.ReactNode;
    className?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ children, className }) =>{
    return(
        <div className="bg-pinky px-5 py-1 w-fit rounded-full flex items-center">
            <h2 className={`${className} capitalize text-white font-semibold text-sm md:text-lg `}>{children}</h2>
        </div>
    )
}

export default Subtitle;
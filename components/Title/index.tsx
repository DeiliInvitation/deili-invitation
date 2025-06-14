interface TitleProps{
    children?: JSX.Element | React.ReactNode;
    className?: string;
}

const Title: React.FC<TitleProps> = ({ className, children }) =>{
    return(
        <h1 className={`${className} text-2xl sm:text-4xl font-bold bg-gradient-to-r from-black via-pink-500 to-lightPink2 text-transparent bg-clip-text capitalize py-4 leading-tight`}>{children}</h1>
    )
}

export default Title;
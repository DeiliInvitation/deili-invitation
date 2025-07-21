import React from "react";

interface ButtonProps{
    children?: JSX.Element | React.ReactNode;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({children, className, onClick}) =>{
    return(
        <button onClick={onClick} className={`${className} border-2 border-white bg-pinky text-white hover:bg-white hover:text-pinky hover:border-pinky  hover:scale-105 transition-all duration-300 pl-3 pr-1 py-1 rounded-full shadow-innerShadow`}>{children}</button>
    )
}

export default Button;
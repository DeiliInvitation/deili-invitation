import React from "react";

interface ButtonProps{
    children?: JSX.Element | React.ReactNode;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({children, className, onClick}) =>{
    return(
        <button onClick={onClick} className={`${className} border-2 border-pinky bg-gradient-to-tr from-lightPink via-lightPink2 to-pinky pl-3 pr-1 py-1 rounded-full shadow-innerShadow`}>{children}</button>
    )
}

export default Button;
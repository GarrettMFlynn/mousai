// Button.js
import React from 'react';
import Link from 'next/link';
import { ButtonStyles } from './button.styled';

const Button = ({onClick,href,text,type}) => {
    return (
            <Link href={href}>
                <ButtonStyles onClick={onClick} className={type}>{text}</ButtonStyles>
            </Link>
    )
}
export default Button;
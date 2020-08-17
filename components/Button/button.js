// Button.js
import React from 'react';
import Link from 'next/link';
import { ButtonStyles } from './button.styled';

const Button = ({href,text,type}) => {
    return (
            <a href={href}>
            <ButtonStyles className={type}>{text}</ButtonStyles>
            </a>
    )
}
export default Button;
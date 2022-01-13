import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import './Button.css';

function buildClasses(color: string, additionalClasses?: string) {
  const cssColors: string[] = ['btn'];

  if (color === 'primary') {
    cssColors.push('primary');
  }

  if (color === 'secondary') {
    cssColors.push('secondary');
  }

  if (additionalClasses) {
    cssColors.push(additionalClasses);
  }

  return cssColors.join(' ');
}

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
  color: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = (props) => {
  const buttonClasses: string = buildClasses(props.color, props.className);

  return (
    <button {...props} className={buttonClasses}>
      {props.text}
    </button>
  );
};

export default Button;

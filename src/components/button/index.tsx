import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

function buildClasses(color: string, additionalClasses?: string) {
  const cssColor = color === 'primary' ? 'cyan' : 'neutral';

  const classes = `bg-${cssColor}-400 hover:bg-${cssColor}-500 active:bg-${cssColor}-300 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg`;
  return [classes, additionalClasses].join(' ');
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

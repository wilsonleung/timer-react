import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

function buildClasses(color: string, additionalClasses?: string) {
  const cssColors: string[] = [
    'text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg',
  ];

  if (color === 'primary') {
    cssColors.push('bg-cyan-400 hover:bg-cyan-500 active:bg-cyan-300');
  }

  if (color === 'secondary') {
    cssColors.push('bg-neutral-400 hover:bg-neutral-500 active:bg-neutral-300');
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

import React from 'react';

export interface LinkProps extends React.HTMLProps<HTMLDivElement> {
  selected?: boolean;
}

const Anchor: React.FC<LinkProps> = (props) => {
  const linkClasses: string[] = ['font-bold text-gray-600 cursor-pointer'];

  if (props.className) {
    linkClasses.push(props.className);
  }

  if (props.selected && props.selected === true) {
    linkClasses.push('border-b-2 border-cyan-400');
  }

  const cssClasses = linkClasses.join(' ');

  return (
    <div {...props} className={cssClasses}>
      {props.children}
    </div>
  );
};

export default Anchor;

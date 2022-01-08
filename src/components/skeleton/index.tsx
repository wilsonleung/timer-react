import React, { useState } from 'react';
import style from './Skeleton.module.css';

export interface SkeletonProps {
  width?: 'full' | '3/4';
}

const Skeleton: React.FC<SkeletonProps> = ({ width = 'full' }) => {
  const [cssClasses] = useState<string>(() => {
    const classes: string[] = [
      style['skeleton'],
      width === 'full' ? 'w-full' : 'w-3/4',
      'leading-6',
      'rounded-lg',
    ];
    return classes.join(' ');
  });

  return <div className={cssClasses}>&nbsp;</div>;
};

export default Skeleton;

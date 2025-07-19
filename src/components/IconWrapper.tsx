import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface IconWrapperProps {
  icon: LucideIcon;
  className?: string;
  size?: number;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon: Icon, className, size }) => {
  return <Icon className={className} size={size} />;
};

export default IconWrapper;
import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children, className, ...props }: LinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center ${className || ''}`}
      {...props}
    >
      {children}
    </a>
  );
}
import React from 'react';
import NextLink, { LinkProps } from 'next/link';
import { StyledLink } from './styles';

const Link: React.FC<LinkProps> = ({
  children, passHref = true, href, ...props
}) => {
  return (
    <NextLink passHref={passHref} href={href} {...props}>
      {passHref ? <StyledLink>{children}</StyledLink> : children}
    </NextLink>
  );
};

export default Link;

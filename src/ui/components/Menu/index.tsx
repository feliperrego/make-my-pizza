import React from 'react';
import { MenuContainer, MenuList, MenuItem, StyledLink, ExtraInfo, ExtraInfoItem, MenuType } from './styles';
import NextLink, { LinkProps } from "next/link";

const MenuLink: React.FC<LinkProps> = ({ children, passHref = true, ...props}) => {
  return (
    <NextLink passHref={passHref} {...props}>
      {passHref ? <StyledLink>{children}</StyledLink> : children}
    </NextLink>
  );
};

interface MenuItem {
  title: string;
  href: string;
  extraInfo?: string[];
}

interface MenuProps {
  menuType?: MenuType;
  menuItems: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({menuType = 'default', menuItems}) => {
  return (
    <MenuContainer menuType={menuType}>
      <MenuList>
        {menuItems.map(menuItem => (
          <MenuItem key={menuItem.title}>
            <MenuLink href={menuItem.href}>{menuItem.title}</MenuLink>
            {menuItem.extraInfo && (
              <ExtraInfo>
                <ExtraInfoItem>Marguerita</ExtraInfoItem>
                <ExtraInfoItem>tamanho médio</ExtraInfoItem>
                <ExtraInfoItem>massa fina</ExtraInfoItem>
              </ExtraInfo>
            )}
          </MenuItem>
        ))}
      </MenuList>
    </MenuContainer>
  );
};

export default Menu;

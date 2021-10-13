import React from 'react';
import NextLink, { LinkProps } from 'next/link';
import { UrlObject } from 'url';
import {
  MenuContainer, MenuList, MenuItem, StyledLink, ExtraInfo, ExtraInfoItem, MenuType,
} from './styles';

interface MenuLink extends Partial<LinkProps> {
  href: UrlObject | undefined | string;
}

const MenuLink: React.FC<MenuLink> = ({
  href,
  children,
  passHref = true,
  ...props
}) => {
  if (href) {
    return (
      <NextLink href={href} passHref={passHref} {...props}>
        {passHref ? <StyledLink>{children}</StyledLink> : children}
      </NextLink>
    );
  }

  return <StyledLink>{children}</StyledLink>;
};

export interface MenuItem {
  id: string;
  title: string;
  href?: string;
  extraInfo?: string[];
  active?: boolean;
  disabled?: boolean;
}

interface MenuProps {
  menuType?: MenuType;
  menuItems: MenuItem[];
  activeItem?: string;
  onClick?: (id: string) => void;
  disabledItems?: string[];
}

const Menu: React.FC<MenuProps> = ({
  menuType = 'default',
  onClick,
  disabledItems,
  menuItems,
  activeItem,
}) => {
  const handleClick = (id?: string) => {
    if (onClick && id) {
      onClick(id);
    }
  };

  return (
    <MenuContainer menuType={menuType}>
      <MenuList>
        {menuItems?.map((menuItem) => (
          <MenuItem
            onClick={() => handleClick(menuItem.id)}
            key={menuItem.title}
            active={menuItem.id === activeItem}
            disabled={disabledItems?.includes(menuItem.id)}
          >
            <MenuLink href={menuItem.href}>{menuItem.title}</MenuLink>
            {menuItem.extraInfo && (
              <ExtraInfo>
                {menuItem.extraInfo.map((item) => (
                  <ExtraInfoItem key={item}>{item}</ExtraInfoItem>
                ))}
              </ExtraInfo>
            )}
          </MenuItem>
        ))}
      </MenuList>
    </MenuContainer>
  );
};

export default Menu;

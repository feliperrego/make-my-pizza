import styled, { css } from 'styled-components';
import fonts from "@ui/theme/fonts";
import colors from "@ui/theme/colors";

export type MenuType = 'default' | 'pick';

interface MenuContainerProps {
  menuType: MenuType
}

export const MenuContainer = styled.nav<MenuContainerProps>`
  height: 100%;
  
  ${({ menuType }) => menuType === 'pick' && css`
    ul {
      justify-content: center;
      margin-left: 60px;
    }
    
    li {
      margin: 10px 0;
    }
    
    a {
      border: none;
      justify-content: flex-start;
      font-weight: 200;
      color: ${colors.secondary};
    }
  `}
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: max(32%, 360px);
`;

export const MenuItem = styled.li`
  list-style: none;
  width: 100%;
  text-align: right;
  min-width: 350px;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${colors.primary};
  font-family: ${fonts.publicSans};
  font-size: 45px;
  font-weight: 100;
  letter-spacing: -1px;
  display: flex;
  width: 100%;
  border-bottom: 1px solid;
  justify-content: flex-end;
  padding-bottom: 10px;

  &:hover {
    transform: scale(1.02);
    color: ${colors.primary};
  }

  &:active {
    color: ${colors.secondary};
  }
`;

export const ExtraInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

export const ExtraInfoItem = styled.span`
  color: ${colors.primary};
  font-family: ${fonts.publicSans};
  font-size: 42px;
  font-weight: 700;
  text-transform: lowercase;
  letter-spacing: -2px;
  margin-top: 5px;
`;

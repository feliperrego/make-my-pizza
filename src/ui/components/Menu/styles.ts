import styled, { css } from 'styled-components';
import fonts from '@ui/theme/fonts';
import colors from '@ui/theme/colors';

export type MenuType = 'default' | 'pick';

interface MenuContainerProps {
  menuType: MenuType;
}

export const MenuContainer = styled.nav<MenuContainerProps>`
  height: 100%;
  
  @media(max-width: 768px) {
    li {
      flex-direction: column;

      div[class*=ExtraInfo] {
        text-align: center;
      }
    }
    a {
      justify-content: center;
    }  
  }  

  ${({ menuType }) => menuType === 'pick' && css`
    ul {
      justify-content: center;
      padding: 0 60px;
    }

    li {
      margin: 10px 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row;
      
      div[class*=ExtraInfo] {
        margin-left: 20px;
      }
    }

    a {
      border: none;
      justify-content: flex-start;
      font-weight: 200;
      color: ${colors.secondary};
    }

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
    }
    
    @media(max-width: 425px) {
      ul {
        padding-left: 40px;
      }
    }
  `}
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: max(35%, 390px);

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

interface MenuItemProps {
  active?: boolean;
  disabled?: boolean;
}

export const MenuItem = styled.li<MenuItemProps>`
  list-style: none;
  width: 100%;
  text-align: right;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  ${({ active }) => active && css`
    a {
      font-weight: 400;
      opacity: 1;
      color: ${colors.primary};
    }

    div[class*=ExtraInfo] span {
      color: ${colors.primary};
    }
  `};

  @media (max-width: 768px) {
    display: ${({ disabled }) => (disabled ? 'none !important' : 'flex')};
  }
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
  cursor: pointer;

  &:hover {
    color: ${colors.primary};
  }

  &:active {
    color: ${colors.secondary};
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const ExtraInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ExtraInfoItem = styled.span`
  color: ${colors.secondary};
  font-family: ${fonts.publicSans};
  font-size: 42px;
  font-weight: 700;
  letter-spacing: -2px;
  margin-top: 5px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

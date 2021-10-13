import styled, { css } from 'styled-components';
import fonts from '@ui/theme/fonts';
import colors from '@ui/theme/colors';

export const PizzaFlavorContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const PizzaList = styled.div`
  width: 100%;
  max-width: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

interface PizzaOptionProps {
  inactive?: boolean;
}

export const PizzaOption = styled.div<PizzaOptionProps>`
  width: 180px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px 60px;
  cursor: pointer;
  
  &:hover {
    img { transform: rotate(-4deg); }
    span { transform: scale(1.05); }
  }

  ${({ inactive }) => inactive && css`
    opacity: 0.5;
    filter: grayscale(1);
  `};
  
  @media(max-width: 960px) {
    width: 100px;
    height: 100px;
    margin: 0 40px 60px;
  }

  @media(max-width: 768px) {
    width: 80px;
    height: 80px;
    margin: 0 40px 60px;
  }

  @media(max-width: 425px) {
    margin: 0 20px 40px;
  }
`;

export const PizzaName = styled.span`
  font-family: ${fonts.publicSans};
  color: ${colors.primary};
  font-size: 28px;
  font-weight: 700;
  text-transform: lowercase;
  letter-spacing: -2px;
  text-align: center;

  @media(max-width: 768px) {
    font-size: 20px;
  }
`;

export const PizzaImage = styled.img`
  filter: drop-shadow(0 8px 0.75rem #666);
  width: 100%;
`;

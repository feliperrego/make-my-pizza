import styled, { css } from 'styled-components';
import Image from 'next/image';
import fonts from "@ui/theme/fonts";
import colors from "@ui/theme/colors";

export const PizzaFlavorContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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
  invert?: boolean;
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

  ${({ invert }) => invert && css`
    margin: 0 10px 0;
    flex-direction: column-reverse;
  `}
  
  &:hover {
    img { transform: rotate(-4deg); }
    span { transform: scale(1.05); }
  }

  ${({ inactive }) => inactive && css`
    opacity: 0.5;
    filter: grayscale(1);
  `}
`;

export const PizzaName = styled.span`
  font-family: ${fonts.publicSans};
  color: ${colors.primary};
  font-size: 30px;
  font-weight: 700;
  text-transform: lowercase;
  letter-spacing: -2px;
  text-align: center;
`;

export const PizzaImage = styled.img`
  filter: drop-shadow(0 8px 0.75rem #666);
  width: 100%;
`;


import styled, { css } from 'styled-components';
import fonts from '@ui/theme/fonts';

const getDoughTypeCss = (type: string) => {
  switch (type) {
    case 'thick':
      return css`
        span { font-weight: 700; }
        div { height: 10px; }
      `;
    case 'thin':
      return css`
        span { font-weight: 100; }
        div { height: 2px; }
      `;
    default:
      return '';
  }
};

export const PizzaDoughContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

interface DoughProps {
  type: string;
}

export const Dough = styled.div<DoughProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin-bottom: 30px;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.02);
  }
  
  ${({ type }) => getDoughTypeCss(type)}
`;

export const DoughName = styled.span`
  font-family: ${fonts.publicSans};
  font-size: 50px;
  margin-right: 20px;
`;

export const DoughLine = styled.div`
  width: 200px;
  height: 5px;
  background: black;
`;

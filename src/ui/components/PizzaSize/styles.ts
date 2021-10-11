import styled, { css } from 'styled-components';
import colors from '@ui/theme/colors';
import fonts from '@ui/theme/fonts';

const getSizeCss = (size: string) => {
  switch (size) {
    case 'p':
      return css`
        width: 100px;
        height: 100px;
      `;
    case 'm':
      return css`
        width: 150px;
        height: 150px;
      `;
    case 'g':
      return css`
        width: 200px;
        height: 200px;
      `;
    default:
      return '';
  }
};

export const PizzaSizeContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Sizes = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
  height: 100%;
  max-height: 450px;
`;

interface SizeProps {
  size: string;
  adjust?: boolean;

}

export const Size = styled.div<SizeProps>`
  border-radius: 50%;
  border: 10px solid ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;  
  text-transform: uppercase;
  font-size: 60px;
  font-weight: 700;
  color: ${colors.primary};
  font-family: ${fonts.publicSans};
  cursor: pointer;
  position: relative;
  margin-right: 35px;
  margin-bottom: 30px;
  
  &:hover {
    transform: scale(1.04);
  }

  ${({ size }) => getSizeCss(size)}

  ${({ adjust }) => adjust && css`
    top: 60px;
  `}
`;

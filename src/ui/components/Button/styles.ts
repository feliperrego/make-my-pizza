import styled from 'styled-components';
import colors from '@ui/theme/colors';
import { getColor } from '@utils/color';
import fonts from '@ui/theme/fonts';
import { ButtonHTMLAttributes } from 'react';

export interface StyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  loading?: boolean;
  width?: number | string;
}

const getWidth = (width: number | string | undefined): string => {
  if (typeof width === 'string') {
    return width;
  }

  if (typeof width === 'number') {
    return `${width}px`;
  }

  return 'none';
};

export const StyledButton = styled.button<StyledButtonProps>`
  border: 1px solid transparent;
  font-weight: 600;
  outline: none;
  background: ${({ color }) => getColor(color as string)};
  color: ${colors.lightText};
  font-family: ${fonts.publicSans};
  width: ${({ width }) => (width ? '100%' : 'auto')};
  max-width: ${({ width }) => getWidth(width)};
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 6px 33px;
  justify-content: center;
  font-size: 30px;
  //height: 50px;

  &:hover {
    opacity: .93;
  }

  :active {
    opacity: 1;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  .loading {
    height: 36px;
    margin: 0;
    padding: 0;
  }
`;

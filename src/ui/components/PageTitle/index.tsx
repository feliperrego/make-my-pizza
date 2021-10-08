import styled, { css } from "styled-components";
import fonts from "@ui/theme/fonts";
import colors from "@ui/theme/colors";

export interface TitleProps {
  size?: number;
  width?: number;
}

const PageTitle = styled.h1<TitleProps>`
  color: ${colors.text};
  font-family: ${fonts.publicSans};
  font-size: ${({ size }) => size || 92}px;
  font-weight: 700;
  max-width: ${({ width }) => width ? `${width}px` : 'none'};
  width: 100%;

  @media (max-width: 768px) {
    font-size: 50px;
  }
`

export default PageTitle;

import styled, { css } from 'styled-components';

interface ContainerProps {
  backgroundImage?: StaticImageData;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  flex: 1;

  ${({ backgroundImage }) => backgroundImage && css`
    background-image: url(${backgroundImage.src});
    background-repeat: no-repeat;
    background-size: 50% auto;
    background-position-x: right;
    background-position-y: bottom;
  `}
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
`;
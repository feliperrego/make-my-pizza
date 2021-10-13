import styled, { css } from 'styled-components';
import Button from '@ui/components/Button';
import colors from '@ui/theme/colors';

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

    @media(max-width: 768px) {
      background-image: none;
    }
  `}
  
`;

export const Main = styled.main`
  flex: 1;
  display: flex;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

export const BackButton = styled(Button)`
  background: transparent;
  color: ${colors.primary};
  font-size: 15px;
  text-transform: uppercase;
  
  &:hover {
   opacity: 0.6;
  }

  &:active {
    opacity: 1;
  }
`;

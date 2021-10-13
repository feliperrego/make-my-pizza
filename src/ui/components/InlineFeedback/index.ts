import styled from 'styled-components';
import fonts from 'ui/theme/fonts';
import colors from 'ui/theme/colors';

interface Props {
  size?: number;
  mobileSize?: number;
}

export default styled.span<Props>`
  font-family: ${fonts.roboto};
  font-size: ${({ size }) => (size || 13)}px;
  font-weight: 400;
  line-height: 18px;
  color: ${colors.primary};

  @media(max-width: 768px) {
    font-size: ${({ mobileSize }) => (mobileSize || 13)}px;
  }
`;

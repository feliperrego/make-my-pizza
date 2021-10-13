import styled, { css } from 'styled-components';
import fonts from 'ui/theme/fonts';
import colors from 'ui/theme/colors';

interface InvalidProps {
  invalid?: boolean | number;
}

interface DisabledProps {
  disabled?: boolean;
}

export const InputGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const InputContainer = styled.div<InvalidProps & DisabledProps>`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ invalid }) => (invalid ? colors.error : colors.primary)};
  box-sizing: border-box;
  padding: 6px 0;
  width: 100%;
  margin-bottom: ${({ invalid }) => (invalid ? '5px' : 0)};

  svg {
    height: 20px;
    width: 20px;

    ${({ invalid }) => invalid && css`
      fill: ${colors.primary};
      color: ${colors.primary};
      margin-left: 4px;
  `}
  }

  ${({ disabled }) => disabled && css`
    opacity: 0.5;
    pointer-events: none;
  `}
`;

export const StyledInput = styled.input<InvalidProps>`
  outline: none;
  font-family: ${fonts.publicSans};
  font-size: 30px;
  font-weight: 100;
  width: 100%;
  color: ${({ invalid }) => (invalid ? colors.error : colors.primary)};

  &::placeholder {
    color: ${({ invalid }) => (invalid ? colors.error : colors.secondary)};;
  }
`;

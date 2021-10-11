import React from 'react';
import LoadingSvg from '@ui/components/Loading';
import { StyledButtonProps, StyledButton } from './styles';

export type ButtonProps = StyledButtonProps;

const Button: React.FC<ButtonProps> = ({
  loading,
  width,
  color = 'primary',
  children,
  ...rest
}) => (
  <StyledButton
    loading={loading}
    width={width}
    color={color}
    {...rest}
  >
    {loading ? <LoadingSvg className="loading" /> : children}
  </StyledButton>
);

export default Button;

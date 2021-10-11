import styled from 'styled-components';
import { Form } from '@unform/web';

interface FormProps {
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

export default styled(Form)<FormProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 37px;
  max-width: ${({ width }) => getWidth(width)};

  button {
    margin-top: 43px;
  }
`;

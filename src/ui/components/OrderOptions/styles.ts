import styled from 'styled-components';
import fonts from '@ui/theme/fonts';

export const OrderOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 30px 0;
`;

export const OrderValue = styled.div`
  font-size: 30px;
  font-family: ${fonts.publicSans};
  font-weight: 700;
  letter-spacing: -2px;
`;

export const OrderPaymentMethod = styled.div`
  font-size: 30px;
  font-family: ${fonts.publicSans};
  font-weight: 100;
  letter-spacing: -2px;
`;

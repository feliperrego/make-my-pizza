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

  @media (max-width: 425px) {
    font-size: 20px;
  }
`;

export const OrderPaymentMethod = styled.div`
  font-size: 30px;
  font-family: ${fonts.publicSans};
  font-weight: 100;
  letter-spacing: -2px;
  text-align: right;

  @media (max-width: 425px) {
    font-size: 20px;
  }
`;

export const LoadingGif = styled.img.attrs(() => ({ src: '/loading.gif' }))`
  width: 25px;
  margin-left: 10px;
`;

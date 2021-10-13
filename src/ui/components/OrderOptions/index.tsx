import React from 'react';
import { currencyFormat } from '@utils/currency';
import {
  OrderOptionsContainer, OrderValue, OrderPaymentMethod, LoadingGif,
} from './styles';

interface OrderOptionsProps {
  value?: number;
}

const OrderOptions: React.FC<OrderOptionsProps> = ({ value }) => (
  <OrderOptionsContainer>
    <OrderValue>
      Preço:
      {' '}
      {value ? currencyFormat(value) : <LoadingGif /> }
    </OrderValue>
    <OrderPaymentMethod>(pagar na entrega)</OrderPaymentMethod>
  </OrderOptionsContainer>
);

export default OrderOptions;

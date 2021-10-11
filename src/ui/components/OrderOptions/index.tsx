import React from 'react';
import currencyFormat from '@utils/currencyFormat';
import { OrderOptionsContainer, OrderValue, OrderPaymentMethod } from './styles';

interface OrderOptionsProps {
  value: number;
}

const OrderOptions: React.FC<OrderOptionsProps> = ({ value }) => (
  <OrderOptionsContainer>
    <OrderValue>
      Preço:
      {' '}
      {currencyFormat(value)}
    </OrderValue>
    <OrderPaymentMethod>(pagar na entrega)</OrderPaymentMethod>
  </OrderOptionsContainer>
);

export default OrderOptions;

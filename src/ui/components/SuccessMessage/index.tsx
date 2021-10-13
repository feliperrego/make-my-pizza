import React from 'react';
import Button from '@ui/components/Button';
import { usePizza } from '@hooks/usePizza';
import { OrderData } from '@services/order';
import { SuccessContainer, Title } from './styles';

const SuccessMessage: React.FC = () => {
  const { handleOrderData, handleStep, stepKeys } = usePizza();

  const handleBack = () => {
    handleOrderData({} as OrderData);
    handleStep(stepKeys[0]);
  };

  return (
    <SuccessContainer>
      <Title>Seu pedido foi realizado com sucesso!!</Title>
      <Button onClick={handleBack}>Voltar</Button>
    </SuccessContainer>
  );
};

export default SuccessMessage;

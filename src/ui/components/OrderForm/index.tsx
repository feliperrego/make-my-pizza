import React, { useRef } from 'react';
import Input from '@ui/components/Input';
import { FormHandles, SubmitHandler } from '@unform/core';
import OrderOptions from '@ui/components/OrderOptions';
import Button from '@ui/components/Button';
import Form from '../Form';
import { OrderFormContainer } from './styles';

interface OrderFormProps {
  onSubmit?: (values: any) => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ onSubmit }) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler = async (values) => {
    if (onSubmit) {
      onSubmit(values);
    }
  };

  return (
    <OrderFormContainer>
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        width={600}
      >
        <Input
          name="name"
          placeholder="Nome completo"
          autoFocus
        />
        <Input
          name="address"
          placeholder="Endereço"
          autoFocus
        />

        <OrderOptions value={15} />

        <Button color="primary" width="100%">Finalizar Pedido</Button>
      </Form>
    </OrderFormContainer>
  );
};

export default OrderForm;

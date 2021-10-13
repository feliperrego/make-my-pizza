import React, { useEffect, useRef, useState } from 'react';
import Input from '@ui/components/Input';
import { FormHandles, SubmitHandler } from '@unform/core';
import OrderOptions from '@ui/components/OrderOptions';
import Button from '@ui/components/Button';
import { getPrice } from '@services/order';
import { usePizza } from '@hooks/usePizza';
import * as Yup from 'yup';
import { isValidSchema } from '@utils/errors';
import Form from '../Form';
import { OrderFormContainer } from './styles';

interface OrderFormProps {
  onSubmit?: (values: any) => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ onSubmit }) => {
  const formRef = useRef<FormHandles>(null);
  const { orderData } = usePizza();
  const [totalValue, setTotalValue] = useState<number>();

  const schema = Yup.object().shape({
    name: Yup.string().required('Este é um campo obrigatório'),
    address: Yup.string().required('Este é um campo obrigatório'),
  });

  useEffect(() => {
    (async () => {
      const price = await getPrice(orderData.pizza);
      setTotalValue(price?.data?.value);
    })();
  }, [orderData, setTotalValue]);

  const handleSubmit: SubmitHandler = async (values) => {
    const formValues = formRef.current?.getData();
    const { isValid, validationErrors } = await isValidSchema(schema, formValues);

    if (isValid) {
      formRef.current?.setErrors({});

      if (onSubmit) {
        onSubmit({
          ...orderData,
          user: values,
          order: {
            totalValue: totalValue || 0,
            paymentType: 'pagamento da entrega',
          },
        });
      }
    } else {
      formRef.current?.setErrors(validationErrors);
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

        <OrderOptions value={totalValue} />

        <Button color="primary" width="100%">Finalizar Pedido</Button>
      </Form>
    </OrderFormContainer>
  );
};

export default OrderForm;

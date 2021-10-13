import React, { ReactElement, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Layout from '@ui/components/Layout';
import Menu, { MenuItem } from '@ui/components/Menu';
import PizzaFlavor, { PizzaOption } from '@ui/components/PizzaFlavor';
import PizzaDough, { DoughOption } from '@ui/components/PizzaDough';
import PizzaSize, { SizeOption } from '@ui/components/PizzaSize';
import OrderForm from '@ui/components/OrderForm';
import { usePizza } from '@hooks/usePizza';
import { useFetch } from '@hooks/useFetch';
import SuccessMessage from '@ui/components/SuccessMessage';
import { useRouter } from 'next/router';

const MENU_ITEMS: MenuItem[] = [
  { id: 'flavor', title: 'Sabor' },
  { id: 'dough', title: 'Massa' },
  { id: 'size', title: 'Tamanho' },
  { id: 'order', title: 'Dados' },
];

const MontarPedido: NextPage = () => {
  const router = useRouter();
  const flavorsFetch = useFetch<PizzaOption[]>('flavors');
  const doughFetch = useFetch<DoughOption[]>('doughs');
  const sizesFetch = useFetch<SizeOption[]>('sizes');
  const [disabledMenuItems, setDisabledMenuItems] = useState<string[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>(MENU_ITEMS);
  const {
    step, handleStep, setStepKeys, nextStep, handleOrderData, orderData, stepKeys,
  } = usePizza();

  const setMenuExtraInfo = () => {
    const items = menuItems.map((el) => {
      const extraInfoValue = orderData?.pizza ? (orderData?.pizza as any)[el?.id] : null;
      const extraInfo = orderData?.pizza && extraInfoValue ? [extraInfoValue] : [];
      return { ...el, extraInfo };
    });
    setMenuItems(items);
  };

  const handleNextStep = (stepData: any) => {
    const { pizza } = orderData;
    handleOrderData({ ...orderData, pizza: { ...pizza, ...stepData } });
    nextStep();
  };

  const handleSubmitOrder = (values: any) => {
    handleOrderData(values);
    handleStep('success');
  };

  const steps: { [key: string]: ReactElement } = {
    flavor: <PizzaFlavor options={flavorsFetch.data} onSelect={handleNextStep} />,
    dough: <PizzaDough options={doughFetch.data} onSelect={handleNextStep} />,
    size: <PizzaSize options={sizesFetch.data} onSelect={handleNextStep} />,
    order: <OrderForm onSubmit={handleSubmitOrder} />,
    success: <SuccessMessage />,
  };

  const updateDisabledItems = () => {
    const currentIndex = menuItems.findIndex((el) => el.id === step);
    const disabledItems = menuItems.filter((el, i) => i > currentIndex).map((el) => el.id);
    setDisabledMenuItems(disabledItems);
  };

  useEffect(() => {
    setTimeout(() => {
      if (router.query.step) {
        handleStep(router.query.step as string);
        router.replace('/montar-pedido', undefined, { shallow: true });
      }
    }, 500);
    setStepKeys(Object.keys(steps));
  }, [setStepKeys]);

  useEffect(() => {
    updateDisabledItems();
  }, [step]);

  useEffect(() => {
    setMenuExtraInfo();
  }, [orderData]);

  return (
    <Layout title="Monte sua Pizza" backButton>
      {!router.query.step && (
        <>
          <Menu
            menuType="pick"
            activeItem={step}
            menuItems={menuItems}
            onClick={handleStep}
            disabledItems={disabledMenuItems}
          />
          {steps[step]}
        </>
      )}
    </Layout>
  );
};

export default MontarPedido;

import React, { ReactElement, useEffect, useState } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Layout from '@ui/components/Layout';
import Menu, { MenuItem } from '@ui/components/Menu';
import PizzaFlavor, { PizzaOption } from '@ui/components/PizzaFlavor';
import PizzaDough, { DoughOption } from '@ui/components/PizzaDough';
import PizzaSize, { SizeOption } from '@ui/components/PizzaSize';
import OrderForm from '@ui/components/OrderForm';
import { usePizza } from '@hooks/usePizza';
import {
  getDoughs, getFlavors, getPrice, getSizes,
} from '@services/pizzas';

const MENU_ITEMS: MenuItem[] = [
  { id: 'flavor', title: 'Sabor' },
  { id: 'dough', title: 'Massa' },
  { id: 'size', title: 'Tamanho' },
  { id: 'order', title: 'Dados' },
];

interface PageProps {
  pizzas: PizzaOption[];
  sizes: SizeOption[];
  doughs: DoughOption[]
}

const MontarPedido: NextPage<PageProps> = ({ pizzas, sizes, doughs }) => {
  const [disabledMenuItems, setDisabledMenuItems] = useState<string[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>(MENU_ITEMS);
  const {
    step, handleStep, setStepKeys, nextStep, handleOrderData, orderData,
  } = usePizza();

  const setMenuExtraInfo = () => {
    const items = menuItems.map((el) => {
      const extraInfoValue = orderData?.pizza ? (orderData?.pizza as any)[el?.id] : null;
      const extraInfo = orderData?.pizza && extraInfoValue ? [extraInfoValue] : [];
      return { ...el, extraInfo };
    });
    setMenuItems(items);
  };

  const handleNextStep = (data: any) => {
    const { pizza } = orderData;
    handleOrderData({ ...orderData, pizza: { ...pizza, ...data } });
    nextStep();
  };

  const handleSubmitOrder = async (values: any) => {
    console.log(values);
    console.log(orderData);

    const price = await getPrice(orderData.pizza);
    console.log(price);
  };

  const steps: { [key: string]: ReactElement } = {
    flavor: <PizzaFlavor options={pizzas} onSelect={handleNextStep} />,
    dough: <PizzaDough options={doughs} onSelect={handleNextStep} />,
    size: <PizzaSize options={sizes} onSelect={handleNextStep} />,
    order: <OrderForm onSubmit={handleSubmitOrder} />,
  };

  const updateDisabledItems = () => {
    const currentIndex = menuItems.findIndex((el) => el.id === step);
    const disabledItems = menuItems.filter((el, i) => i > currentIndex).map((el) => el.id);
    setDisabledMenuItems(disabledItems);
  };

  useEffect(() => {
    setStepKeys(Object.keys(steps));
  }, [setStepKeys]);

  useEffect(() => {
    updateDisabledItems();
  }, [step]);

  useEffect(() => {
    setMenuExtraInfo();
  }, [orderData]);

  return (
    <Layout title="Monte sua Pizza">
      <Menu
        menuType="pick"
        activeItem={step}
        menuItems={menuItems}
        onClick={handleStep}
        disabledItems={disabledMenuItems}
      />
      {steps[step]}
    </Layout>
  );
};

export const getServerSideProps: GetStaticProps = async () => {
  const pizzas = await getFlavors();
  const sizes = await getSizes();
  const doughs = await getDoughs();
  return { props: { pizzas, sizes, doughs } };
};

export default MontarPedido;

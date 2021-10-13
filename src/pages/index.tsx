import React from 'react';
import type { NextPage } from 'next';
import Layout from '@ui/components/Layout';
import Menu from '@ui/components/Menu';
import pizza from '@assets/../../public/pizzas/pizza5.png';
import { usePizza } from '@hooks/usePizza';

const Home: NextPage = () => {
  const { handleOrderData, handleStep } = usePizza();

  const menuItems = [
    {
      id: 'montar',
      title: 'montar pedido',
      href: '/montar-pedido',
    },
    {
      id: 'indica',
      title: 'pedir pizza do dia',
      href: '/montar-pedido?step=order',
      extraInfo: ['marguerita', 'tamanho médio', 'massa fina'],
    },
  ];

  const handleClick = (id: string) => {
    if (id === 'indica') {
      handleOrderData({
        pizza: {
          dough: 'Média',
          size: 'M',
          flavor: 'Marguerita',
        },
      });
    }
  };

  return (
    <Layout
      title="Peça sua Pizza"
      backgroundImage={pizza}
    >
      <Menu onClick={handleClick} menuItems={menuItems} />
    </Layout>
  );
};

export default Home;

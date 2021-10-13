import React from 'react';
import type { NextPage } from 'next';
import Layout from '@ui/components/Layout';
import Menu from '@ui/components/Menu';
import pizza from '@assets/../../public/pizzas/pizza5.png';

const Home: NextPage = () => {
  const menuItems = [
    {
      id: 'montar',
      title: 'montar pedido',
      href: '/montar-pedido',
    },
    {
      id: 'indica',
      title: 'pedir pizza do dia',
      href: '/montar-pedido',
      extraInfo: ['marguerita', 'tamanho médio', 'massa fina'],
    },
  ];

  return (
    <Layout
      title="Peça sua Pizza"
      backgroundImage={pizza}
    >
      <Menu menuItems={menuItems} />
    </Layout>
  );
};

export default Home;

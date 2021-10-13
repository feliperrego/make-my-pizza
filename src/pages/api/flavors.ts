import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json([
    { id: 'marg', name: 'Marguerita', img: '/pizzas/pizza1.png' },
    { id: 'port', name: 'Portuguesa', img: '/pizzas/pizza2.png' },
    { id: 'cogu', name: 'Cogumelos', img: '/pizzas/pizza3.png' },
    { id: 'fest', name: 'Festiva', img: '/pizzas/pizza4.png' },
    { id: 'rust', name: 'Rústica', img: '/pizzas/pizza5.png' },
  ]);
};

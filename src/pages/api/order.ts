import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { body, method } = req;

  switch (method) {
    case 'POST':
      if (body.user?.name?.toLowerCase().includes('erro')) {
        res.status(500).json({ message: 'Ocorreu um erro ao finalizar seu pedido, tente novamente.' });
      } else {
        res.status(200).json(body);
      }
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

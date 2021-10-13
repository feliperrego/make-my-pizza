import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json([
    { id: 'thick', name: 'Grossa' },
    { id: 'default', name: 'Média' },
    { id: 'thin', name: 'Fina' },
  ]);
};

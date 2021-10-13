import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json([
    { id: 'p', name: 'P' },
    { id: 'm', name: 'M' },
    { id: 'g', name: 'G' },
  ]);
};

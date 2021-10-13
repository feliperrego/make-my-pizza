import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { body, method } = req;

  const pricesTable = {
    flavor: [
      { value: 15, options: ['Marguerita', 'Portuguesa'] },
      { value: 10, options: ['Cogumelos', 'Festiva'] },
      { value: 8, options: ['Rústica'] },
    ],
    size: [
      { value: 10, options: ['G'] },
      { value: 8, options: ['M'] },
      { value: 5, options: ['P'] },
    ],
    dough: [
      { value: 4, options: ['Grossa'] },
      { value: 3, options: ['Média'] },
      { value: 2, options: ['Fina'] },
    ],
  } as any;

  const value = Object.keys(body)
    .map((option) => pricesTable[option].find((e: any) => e.options.includes((body as any)[option])))
    .map((price) => price.value)
    .reduce((a, b) => a + b);

  switch (method) {
    case 'POST':
      res.status(200).json({ value });
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

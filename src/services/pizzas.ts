import { PizzaOption } from '@ui/components/PizzaFlavor';
import { SizeOption } from '@ui/components/PizzaSize';
import { DoughOption } from '@ui/components/PizzaDough';
import { PizzaOptions } from '@services/order';

export const getFlavors = (): Promise<PizzaOption[]> => new Promise((resolve) => {
  const mockedResult = [
    { id: 'marg', name: 'Marguerita', img: '/pizzas/pizza1.png' },
    { id: 'port', name: 'Portuguesa', img: '/pizzas/pizza2.png' },
    { id: 'cogu', name: 'Cogumelos', img: '/pizzas/pizza3.png' },
    { id: 'fest', name: 'Festiva', img: '/pizzas/pizza4.png' },
    { id: 'rust', name: 'Rústica', img: '/pizzas/pizza5.png' },
  ];

  setTimeout(() => resolve(mockedResult), 500);
});

export const getSizes = (): Promise<SizeOption[]> => new Promise((resolve) => {
  const mockedResult = [
    { id: 'p', name: 'P' },
    { id: 'm', name: 'M' },
    { id: 'g', name: 'G' },
  ];

  setTimeout(() => resolve(mockedResult), 500);
});

export const getDoughs = (): Promise<DoughOption[]> => new Promise((resolve) => {
  const mockedResult = [
    { id: 'thick', name: 'Grossa' },
    { id: 'default', name: 'Média' },
    { id: 'thin', name: 'Fina' },
  ];

  setTimeout(() => resolve(mockedResult), 500);
});

export const getPrice = (pizzaValues: PizzaOptions): Promise<{ value: number }> => new Promise((resolve) => {
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

  const value = Object.keys(pizzaValues)
    .map((option) => pricesTable[option].find((e: any) => e.options.includes((pizzaValues as any)[option])))
    .map((price) => price.value)
    .reduce((a, b) => a + b);

  setTimeout(() => resolve({ value }), 500);
});

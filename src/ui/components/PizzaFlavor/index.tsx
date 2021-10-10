import React, { useState } from 'react';
import {
  PizzaFlavorContainer, PizzaList, PizzaOption, PizzaName, PizzaImage,
} from './styles';

export interface PizzaOption {
  id: string;
  name: string;
  img: string;
  active?: boolean;
}

interface PizzaFlavor {
  options: PizzaOption[]
}

const PizzaFlavor: React.FC<PizzaFlavor> = ({ options }) => {
  const [inactive, setInactive] = useState<string[]>([]);

  const isInverted = (key: number): boolean => {
    const { length } = options;
    const middle = Math.ceil(length / 2);
    return key >= middle;
  };

  const activate = (id: string) => {
    const inactivePizzas = options.filter((pizza) => pizza.id !== id);
    setInactive(inactivePizzas.map((pizza) => pizza.id));
  };

  const isInactive = (id: string): boolean => inactive.includes(id);

  return (
    <PizzaFlavorContainer>
      <PizzaList>
        {options?.map((pizza, key) => (
          <PizzaOption
            key={pizza.id}
            invert={isInverted(key)}
            onMouseEnter={() => activate(pizza.id)}
            onMouseLeave={() => setInactive([])}
            inactive={isInactive(pizza.id)}
          >
            <PizzaName>{pizza.name}</PizzaName>
            <PizzaImage src={pizza.img} />
          </PizzaOption>
        ))}
      </PizzaList>
    </PizzaFlavorContainer>
  );
};

export default PizzaFlavor;

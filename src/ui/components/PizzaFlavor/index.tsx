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
  options?: PizzaOption[],
  onSelect?: (value: {flavor: string}) => void;
}

const PizzaFlavor: React.FC<PizzaFlavor> = ({ options, onSelect }) => {
  const [inactive, setInactive] = useState<string[]>([]);

  const activate = (id: string) => {
    const inactivePizzas = options?.filter((pizza) => pizza.id !== id);

    if (inactivePizzas) {
      setInactive(inactivePizzas.map((pizza) => pizza.id));
    }
  };

  const isInactive = (id: string): boolean => inactive.includes(id);

  const handleSelect = (flavor: string) => {
    if (onSelect) {
      onSelect({ flavor });
    }
  };

  return (
    <PizzaFlavorContainer>
      <PizzaList>
        {options?.map((pizza) => (
          <PizzaOption
            key={pizza.id}
            onMouseEnter={() => activate(pizza.id)}
            onMouseLeave={() => setInactive([])}
            inactive={isInactive(pizza.id)}
            onClick={() => handleSelect(pizza.name)}
          >
            <PizzaImage src={pizza.img} />
            <PizzaName>{pizza.name}</PizzaName>
          </PizzaOption>
        ))}
      </PizzaList>
    </PizzaFlavorContainer>
  );
};

export default PizzaFlavor;

import React, { useState } from 'react';
import { PizzaFlavorContainer, PizzaList, PizzaOption, PizzaName, PizzaImage } from './styles';

export interface PizzaOption {
  id: string;
  name: string;
  img: string;
  active?: boolean;
}

interface PizzaFlavor {
  pizzas: PizzaOption[]
}

const PizzaFlavor: React.FC<PizzaFlavor> = ({pizzas}) => {
  const [inactive, setInactive] = useState<string[]>([]);

  const isInverted = (key: number): boolean => {
    const length = pizzas.length;
    const middle = Math.ceil(length / 2);
    return key >= middle;
  }

  const activate = (id: string) => {
    const inactivePizzas = pizzas.filter(pizza => pizza.id !== id);
    setInactive(inactivePizzas.map(pizza => pizza.id));
    console.log(inactive)
  }

  const isInactive = (id: string): boolean => inactive.includes(id);

  return (
    <PizzaFlavorContainer>
      <PizzaList>
        {pizzas?.map((pizza, key) => (
            <PizzaOption
              key={pizza.id}
              invert={isInverted(key)}
              onMouseEnter={() => activate(pizza.id)}
              onMouseLeave={() => setInactive([])}
              inactive={isInactive(pizza.id)}
            >
              <PizzaName>{pizza.name}</PizzaName>
              <PizzaImage src={pizza.img}/>
            </PizzaOption>
          )
        )}
      </PizzaList>
    </PizzaFlavorContainer>
  );
};

export default PizzaFlavor;

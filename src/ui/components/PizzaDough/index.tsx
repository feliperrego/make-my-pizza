import React from 'react';
import {
  PizzaDoughContainer, Dough, DoughName, DoughLine,
} from './styles';

export interface DoughOption {
  id: string;
  name: string;
}

export interface PizzaDoughProps {
  onSelect?: (value: {dough: string}) => void;
  options: DoughOption[];
}

const PizzaDough: React.FC<PizzaDoughProps> = ({ onSelect, options }) => {
  const handleSelect = (dough: string) => {
    if (onSelect) {
      onSelect({ dough });
    }
  };

  return (
    <PizzaDoughContainer>
      {options?.map((option) => (
        <Dough
          key={option.id}
          type={option.id}
          onClick={() => handleSelect(option.name)}
        >
          <DoughName>
            Massa
            {' '}
            {option.name}
          </DoughName>
          <DoughLine />
        </Dough>
      ))}
    </PizzaDoughContainer>
  );
};

export default PizzaDough;

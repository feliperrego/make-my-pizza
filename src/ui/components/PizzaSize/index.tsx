import React from 'react';
import { PizzaSizeContainer, Sizes, Size } from './styles';

export interface PizzaSizeProps {
  onSelect?: (selection: string) => void;
}

const PizzaSize: React.FC<PizzaSizeProps> = ({ onSelect }) => {
  const handleSelect = (selection: string) => {
    if (onSelect) {
      onSelect(selection);
    }
  };

  return (
    <PizzaSizeContainer>
      <Sizes>
        <Size size="p" adjust onClick={() => handleSelect('p')}>p</Size>
        <Size size="m" onClick={() => handleSelect('m')}>m</Size>
        <Size size="g" onClick={() => handleSelect('g')}>g</Size>
      </Sizes>
    </PizzaSizeContainer>
  );
};

export default PizzaSize;

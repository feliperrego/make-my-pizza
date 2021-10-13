import React from 'react';
import { PizzaSizeContainer, Sizes, Size } from './styles';

export interface SizeOption {
  id: string;
  name: string;
}

export interface PizzaSizeProps {
  onSelect?: (value: {size: string}) => void;
  options?: SizeOption[];
}

const PizzaSize: React.FC<PizzaSizeProps> = ({ onSelect, options }) => {
  const handleSelect = (size: string) => {
    if (onSelect) {
      onSelect({ size });
    }
  };

  return (
    <PizzaSizeContainer>
      <Sizes>
        {options?.map((option, index) => (
          <Size
            key={option.id}
            size={option.id}
            onClick={() => handleSelect(option.name)}
            adjust={index === 0}
          >
            {option.name}
          </Size>
        ))}
      </Sizes>
    </PizzaSizeContainer>
  );
};

export default PizzaSize;

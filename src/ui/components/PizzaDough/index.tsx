import React from 'react';
import {
  PizzaDoughContainer, Dough, DoughName, DoughLine,
} from './styles';

export interface PizzaDoughProps {
  onSelect?: (selection: string) => void;
}

const PizzaDough: React.FC<PizzaDoughProps> = ({ onSelect }) => {
  const handleSelect = (selection: string) => {
    if (onSelect) {
      onSelect(selection);
    }
  };

  return (
    <PizzaDoughContainer>
      <Dough type="thick" onClick={() => handleSelect('thick')}>
        <DoughName>Massa Grossa</DoughName>
        <DoughLine />
      </Dough>
      <Dough type="default" onClick={() => handleSelect('default')}>
        <DoughName>Massa média</DoughName>
        <DoughLine />
      </Dough>
      <Dough type="thin" onClick={() => handleSelect('thin')}>
        <DoughName>Massa fina</DoughName>
        <DoughLine />
      </Dough>
    </PizzaDoughContainer>
  );
};

export default PizzaDough;

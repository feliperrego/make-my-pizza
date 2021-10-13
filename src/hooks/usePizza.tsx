import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import { OrderData } from '@services/order';

interface LoginContextData {
  step: string;
  handleStep(step: string): void;
  orderData: OrderData;
  handleOrderData(orderData: OrderData): void;
  stepKeys: string[];
  setStepKeys(steps: string[]): void;
  nextStep(): void;
}

const LoginContext = createContext<LoginContextData>({} as LoginContextData);

const PizzaProvider: React.FC = ({ children }) => {
  const [step, setStep] = useState<string>('');
  const [stepKeys, setStepKeys] = useState<string[]>([]);
  const [orderData, setOrderData] = useState({} as OrderData);

  const nextStep = () => {
    const nextStepKey = stepKeys[stepKeys.indexOf(step) + 1];

    if (nextStepKey) {
      setStep(nextStepKey);
    }
  };

  useEffect(() => {
    setStep(stepKeys[0]);
  }, [stepKeys]);

  return (
    <LoginContext.Provider value={{
      step,
      orderData,
      handleStep: setStep,
      handleOrderData: setOrderData,
      stepKeys,
      setStepKeys,
      nextStep,
    }}
    >
      {children}
    </LoginContext.Provider>
  );
};

function usePizza(): LoginContextData {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error('usePizza must be used inside of PizzaProvider');
  }

  return context;
}

export { PizzaProvider, usePizza };

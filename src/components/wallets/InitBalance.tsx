import React from 'react';

interface IInitBalanceProps {
  amount: number;
  walletsUnit: string;
}

const InitBalance: React.FC<IInitBalanceProps> = (props) => {
  const { walletsUnit , amount } = props;
 
  return (
    <span className="font-medium">Balance: {walletsUnit}{Math.round(amount * 100) / 100}</span>
  );
};

export default InitBalance;

import React from 'react';

interface IListWalletsProps {
  calculationType:string,
  priceRouting: string;
  amount: number;
  onHandleChangeAmountTo: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputWallets: React.FC<IListWalletsProps> = (props) => {
  const { priceRouting, onHandleChangeAmountTo ,amount ,calculationType} = props;
 
  return (
    <span className="text-gray-600">
      {calculationType}
      <input 
        type="number" 
        className="ml-2 w-28 h-10 border border-gray-400 focus:border-indigo-500 px-4 py-2 rounded-md outline-none" 
        value={priceRouting || 0} 
        onChange={onHandleChangeAmountTo} 
      />
      {
        calculationType === '-' && amount < Number(priceRouting) &&  (<p className="text-red-400 text-right text-xs mt-2">Exceeds balance</p>)
      }
    </span>
  );
};

export default InputWallets;

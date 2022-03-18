import React from 'react'

interface IBtnWalletsProps {
  handleExchange: () => void;
  priceTo: string;
  priceFrom: string;
}

const ButtonWallets:React.FC<IBtnWalletsProps> = (props) => {
  const { handleExchange, priceTo, priceFrom } = props;

  return (
    <button
      onClick={handleExchange}
      disabled={!Boolean(priceTo) && !Boolean(priceFrom)}
      className={`w-full px-4 py-3 text-white font-semibold rounded-lg uppercase bg-gray-400 ${!Boolean(priceTo) && !Boolean(priceFrom) ? 'cursor-not-allowed' : ''}`}
      >
        Exchange
    </button>
  )
}

export default ButtonWallets
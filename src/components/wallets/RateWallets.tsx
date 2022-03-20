import React from 'react'
import Spinner from 'components/Loading/Spinner';

interface IRateWallets {
  rate: number;
  fromWalletsUnit: string;
  toWalletsUnit: string;
}

const RateWallets:React.FC<IRateWallets> = ({rate , fromWalletsUnit,toWalletsUnit}) => {
  return (
    <div className="flex justify-center items-center text-white">
      <span className="px-5 py-1 border rounded-xl border-white text-sm">{!rate ? <Spinner /> : `${fromWalletsUnit}1 = ${toWalletsUnit}${rate}`}</span>
    </div>
  )
}

export default RateWallets;
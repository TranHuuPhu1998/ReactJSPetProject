import React from 'react'
import { LIST_WALLETS as listWallets } from 'data/constants/index';
import { IItemWallets } from 'data/types';

interface IListWalletsProps {
  walletsName: string;
  route: string;
  handleChangeFromWallets: (value: IItemWallets, route: string) => void;
}

const ListWallets:React.FC<IListWalletsProps> = ({handleChangeFromWallets,route,walletsName}) => {
  return (
    <div className="flex justify-between">
      {
        listWallets.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => handleChangeFromWallets(item, route)}
              className={`px-8 py-1 rounded text-white uppercase border border-indigo-500 ${item.name == walletsName ? 'bg-indigo-500' : 'text-indigo-500'}`}>
              {item.name}
            </button>
          )
        })
      }
    </div>
  )
}

export default ListWallets
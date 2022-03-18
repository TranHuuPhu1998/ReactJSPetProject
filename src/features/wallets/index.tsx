import React, { useState, useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { actionDateCoverWallets } from 'app/redux/walletsRateSlice';
import { IItemWallets } from 'data/types';
import InitBalance from 'components/wallets/InitBalance';
import Spinner from 'components/Loading/Spinner';
import ListWallets from 'components/wallets/ListWallets';
import InputWallets from 'components/wallets/InputWallets';
import ButtonWallets from 'components/wallets/ButtonWallets';

const Wallets: React.FC = () => {
  const [fromWalletsName, setFromWalletsName] = useState<string>('');
  const [fromWalletsUnit, setFromWalletUnit] = useState<string>('');
  const [amountFrom, setAmountFrom] = useState<number>(0);
  const [priceFrom, setPriceFrom] = useState<string>('');

  const [toWalletsName, setToWalletsName] = useState<string>('');
  const [toWalletsUnit, setToWalletUnit] = useState<string>('');
  const [amountTo, setAmountTo] = useState<number>(0);
  const [priceTo, setPriceTo] = useState<string>('');

  const [rate, setRate] = useState<number>(0);
  const [isChangeAmountTo, setIsChangeAmountTo] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  const { data } = useAppSelector((state) => state.walletsRateSlice);

  useEffect(() => {
    if (data) setRate(data.conversion_rate);
  }, [data]);

  useEffect(() => {
    if (fromWalletsName && toWalletsName) {
      dispatch(actionDateCoverWallets({ fromWalletsName, toWalletsName }));
    }
  }, [fromWalletsName, toWalletsName]);

  const onHandleChangeAmountFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const priceTo = (Number(newValue) * rate).toFixed(2);
    setPriceTo(priceTo);
    setPriceFrom(newValue);
    setIsChangeAmountTo(true);
  };

  const onHandleChangeAmountTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const priceFrom = (Number(newValue) / rate).toFixed(2);
    setPriceFrom(priceFrom);
    setPriceTo(newValue);
    setIsChangeAmountTo(false);
  };

  const handleChangeFromWallets = (value: IItemWallets, route: string) => {
    switch (route) {
      case 'from':
        setAmountFrom(value.amount);
        setFromWalletsName(value.name);
        setFromWalletUnit(value.unit);
        return;
      case 'to':
        setToWalletsName(value.name);
        setToWalletUnit(value.unit);
        setAmountTo(value.amount);
        break;
      default:
        return;
    }
  };

  const handleExchange = useCallback(() => {
    setAmountFrom((prev) => prev - Number(priceFrom));
    if (isChangeAmountTo) {
      setAmountTo((prev) => prev + Number(priceTo));
    }
    setPriceFrom('');
    setPriceTo('');
  }, [priceFrom, priceTo]);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-800">
      <div className="space-y-6 text-center">
        <h1 className="text-2xl text-gray-200 font-semibold">Currency Exchange</h1>
        <div className="bg-white p-6 rounded-lg space-y-6 w-full md:w-96">
        <ListWallets handleChangeFromWallets={handleChangeFromWallets} walletsName={fromWalletsName} route="from" />
          <div>
            {fromWalletsName && toWalletsName ? (
              <div className="flex justify-between items-center">
                <InitBalance walletsUnit={fromWalletsUnit} amount={amountFrom} />
                <InputWallets calculationType="-" amount={amountFrom} priceRouting={priceFrom} onHandleChangeAmountTo={onHandleChangeAmountFrom} />
              </div>
            ) : (
              <p className="text-gray-500 text-sm">Select your currency to exchange</p>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center text-white">
          <span className="px-5 py-1 border rounded-xl border-white text-sm">{!rate ? <Spinner /> : `${fromWalletsUnit}1 = ${toWalletsUnit}${rate}`}</span>
        </div>
        <div className="bg-white p-6 rounded-lg space-y-6 w-full md:w-96">
        <ListWallets handleChangeFromWallets={handleChangeFromWallets} walletsName={toWalletsName} route="to" />
          {fromWalletsName && toWalletsName ? (
            <div className="flex justify-between items-center">
              <InitBalance walletsUnit={toWalletsUnit} amount={amountTo} />
              <InputWallets calculationType="+" amount={amountTo} priceRouting={priceTo} onHandleChangeAmountTo={onHandleChangeAmountTo} />
            </div>
          ) : (
            <p className="text-gray-500 text-sm">Select your currency to exchange</p>
          )}
        </div>
        <ButtonWallets handleExchange={handleExchange} priceTo={priceTo} priceFrom={priceFrom} />
      </div>
      <p className="fixed bottom-0 pb-4 text-gray-500 text-sm">Created Tran Huu Phu - 18.March.2022</p>
    </div>
  );
};

export default Wallets;

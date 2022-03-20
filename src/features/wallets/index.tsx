import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { actionDateCoverWallets } from 'app/redux/walletsRateSlice';
import { IItemWallets } from 'data/types';
import InitBalance from 'components/wallets/InitBalance';
import ListWallets from 'components/wallets/ListWallets';
import InputWallets from 'components/wallets/InputWallets';
import ButtonWallets from 'components/wallets/ButtonWallets';
import TextStart from 'components/wallets/TextStart';
import TitleWallets from 'components/wallets/TitleWallets';
import FooterWallets from 'components/wallets/FooterWallets';
import RateWallets from 'components/wallets/RateWallets';
import AppLayout from 'layout/app';

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

  const handleExchange = () => {
    setAmountFrom((prev) => prev - Number(priceFrom));
    if (isChangeAmountTo) {
      setAmountTo((prev) => prev + Number(priceTo));
    }
    setPriceFrom('');
    setPriceTo('');
  };

  return (
    <AppLayout>
      <div className="space-y-6 text-center">
        <TitleWallets />
        <div className="bg-white p-6 rounded-lg space-y-6 w-full md:w-96">
        <ListWallets handleChangeFromWallets={handleChangeFromWallets} walletsName={fromWalletsName} route="from" />
          <div>
            {fromWalletsName && toWalletsName ? (
              <div className="flex justify-between items-center">
                <InitBalance walletsUnit={fromWalletsUnit} amount={amountFrom} />
                <InputWallets calculationType="-" amount={amountFrom} priceRouting={priceFrom} onHandleChangeAmountTo={onHandleChangeAmountFrom} />
              </div>
            ) : (
              <TextStart />
            )}
          </div>
        </div>
        <RateWallets rate={rate} fromWalletsUnit={fromWalletsUnit} toWalletsUnit={toWalletsUnit}/>
        <div className="bg-white p-6 rounded-lg space-y-6 w-full md:w-96">
        <ListWallets handleChangeFromWallets={handleChangeFromWallets} walletsName={toWalletsName} route="to" />
          {fromWalletsName && toWalletsName ? (
            <div className="flex justify-between items-center">
              <InitBalance walletsUnit={toWalletsUnit} amount={amountTo} />
              <InputWallets calculationType="+" amount={amountTo} priceRouting={priceTo} onHandleChangeAmountTo={onHandleChangeAmountTo} />
            </div>
          ) : (
            <TextStart />
          )}
        </div>
        <ButtonWallets handleExchange={handleExchange} priceTo={priceTo} priceFrom={priceFrom} />
      </div>
        <FooterWallets />
    </AppLayout>
  );
};

export default Wallets;

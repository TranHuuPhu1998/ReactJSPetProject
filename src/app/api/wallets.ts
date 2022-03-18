import axios from 'axios';

const endpoints = process.env.REACT_APP_API_URL;

const getDateCoverWallets = (params: any) => {
  const { fromWalletsName ,toWalletsName } = params;
  return axios.get(`${endpoints}/${fromWalletsName}/${toWalletsName}`);
};

const walletsSlice = {
  getDateCoverWallets,
};

export default walletsSlice;

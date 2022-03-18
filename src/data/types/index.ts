export interface IResponse<T> {
  data: T;
}

export interface IItemWallets {
  name: string;
  unit: string;
  amount: number;
}

export interface IItemWalletsResponse {
  base_code: string;
  conversion_rate: number;
  documentation: string,
  result: string,
  target_code: string,
  terms_of_use: string,
  time_last_update_unix: number,
  time_last_update_utc: string,
  time_next_update_unix: number
  time_next_update_utc: string,
}

export interface ResponseQueryWallets {
  isLoading: boolean,
  data: IItemWalletsResponse;
}
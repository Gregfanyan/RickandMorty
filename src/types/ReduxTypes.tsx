export const FETCH_CHARACTER_REQUEST = "FETCH_CHARACTER_REQUEST";
export const FETCH_CHARACTER_SUCCESS = "FETCH_CHARACTER_SUCCESS";
export const FETCH_CHARACTER_FAILURE = "FETCH_CHARACTER_FAILURE";

export type Country = {
  population: number;
  name: string;
  region: string;
  languages: string[];
  flag: string;
};

export type MainTableProps = {
  countries: Country;
};

export type ReceiveDataAction = {
  type: typeof FETCH_CHARACTER_SUCCESS;
  payload: {
    countries: Country[];
  };
};

export type CountryActions = ReceiveDataAction;

export type CountryState = {
  countries: Country[];
  inCart: Country[];
  loading: boolean;
  error: string;
  counter: number;
};

export type AppState = {
  countries: CountryState;
  filter: "";
  theme: any;
};

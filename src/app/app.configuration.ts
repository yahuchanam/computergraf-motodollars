import { environment } from 'src/environments/environment';

export const APP_SETTINGS = {
  CEP_API: environment.searchCEPAPI,
  KM_DISTANCE_API: environment.distanceCalcAPI,
  DOLLAR_CALCULATE_API: environment.dollarRateAPI,
  START_LOCATION: environment.startLocation,
  BING_KEY: environment.bingKey
};

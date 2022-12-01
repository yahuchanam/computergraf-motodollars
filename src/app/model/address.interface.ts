export interface Address {
  address: string;
  district: string;
  city: string;
  state: string;
  postalCode: string;
  addressNumber?: string;
  extra?: string;
  kmDistance?: number;
}

export interface OrderPayload {
  name: string;
  address: string;
  addressNumber: string;
  extra?: string;
  district: string;
  city: string;
  state: string;
  postalCode: string;
  kmDistance: number;
  usd: number;
  createAt?: string;
}

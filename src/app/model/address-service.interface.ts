import { Observable } from 'rxjs';
import { Address } from './address.interface';

export abstract class AddressService {
  abstract retrieveByPostalCode: (postalCode: string) => Observable<Address>;
  abstract retrieveDistanceForDelivery: (
    address: Address
  ) => Observable<number>;
}

import { Observable } from 'rxjs';
import { Address } from './address.interface';

export interface AddressService {
  retrieveByPostalCode: (postalCode: string) => Observable<Address>;
  retrieveDistanceForDelivery: (address: Address) => Observable<number>;
}

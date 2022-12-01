import { Observable } from 'rxjs';
import { Address } from './address.interface';

export interface AddressService {
  retriveByPostalCode: (postalCode: string) => Observable<Address>;
  retriveDistanceForDelivery: (address: Address) => Observable<number>;
}

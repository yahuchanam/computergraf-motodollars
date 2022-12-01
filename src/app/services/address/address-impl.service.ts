import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { APP_SETTINGS } from 'src/app/app.configuration';
import { Address, PostalCodePayload, AddressService } from 'src/app/model';

const { CEP_API, KM_DISTANCE_API, START_LOCATION, BING_KEY } = APP_SETTINGS;

@Injectable({
  providedIn: 'root'
})
export class AddressImplService implements AddressService {
  constructor(private http: HttpClient) {}

  retriveByPostalCode(postalCode: string): Observable<Address> {
    return this.http.get<PostalCodePayload>(`${CEP_API}/${postalCode}`).pipe(
      map((payload) => ({
        address: payload.logradouro,
        district: payload.bairro,
        city: payload.cidade,
        state: payload.estado,
        postalCode: payload.cep
      }))
    );
  }

  retriveDistanceForDelivery(address: Address): Observable<number> {
    const addressFormated = this.addressToString(address);
    const htttParamsBuilder: HttpParams = new HttpParams();
    const params = htttParamsBuilder
      .append('o', 'json')
      .append('wp.0', addressFormated)
      .append('vwp.1', addressFormated)
      .append('wp.2', START_LOCATION)
      .append('avoid', 'minimizeTolls')
      .append('key', BING_KEY);

    return this.http.get<any>(`${KM_DISTANCE_API}`, { params }).pipe(
      map(({ resourceSets }) => {
        return resourceSets[0].travelDistance;
      })
    );
  }

  addressToString(address: Address): string {
    const addressArr = [
      address.address,
      address.addressNumber ?? '',
      address.city,
      address.state,
      'Brasil'
    ];
    return addressArr.filter((addressPart) => !!addressPart.trim()).join(', ');
  }
}

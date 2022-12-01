import { DBConfig } from 'ngx-indexed-db';

export const MotoDollarsDatabaseConfig: DBConfig = {
  name: 'MotoDollarsDB',
  version: 1,
  objectStoresMeta: [
    {
      store: 'Orders',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'address', keypath: 'address', options: { unique: false } },
        {
          name: 'addressNumber',
          keypath: 'addressNumber',
          options: { unique: false }
        },
        { name: 'extra', keypath: 'extra', options: { unique: false } },
        { name: 'district', keypath: 'district', options: { unique: false } },
        { name: 'city', keypath: 'city', options: { unique: false } },
        { name: 'state', keypath: 'state', options: { unique: false } },
        {
          name: 'postalCode',
          keypath: 'postalCode',
          options: { unique: false }
        },
        {
          name: 'kmDistance',
          keypath: 'kmDistance',
          options: { unique: false }
        },
        { name: 'usd', keypath: 'usd', options: { unique: false } },
        { name: 'createAt', keypath: 'createAt', options: { unique: false } }
      ]
    }
  ]
};

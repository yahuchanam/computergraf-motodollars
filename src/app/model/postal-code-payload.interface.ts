export interface PostalCodePayload {
  bairro: string;
  cidade: string;
  logradouro: string;
  estado_info: PostalCodeStatePayload;
  cep: string;
  cidade_info: PostalCodeCityPayload;
  estado: string;
}

export interface PostalCodeStatePayload {
  area_km2: string;
  codigo_ibge: string;
  nome: string;
}

export interface PostalCodeCityPayload {
  area_km2: string;
  codigo_ibge: string;
}

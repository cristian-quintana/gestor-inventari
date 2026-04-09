import { ElementApiResponse, ElementCataleg } from '../models/element.model';

export function adaptarElementApi(
  apiResponse: ElementApiResponse,
): ElementCataleg {
  return {
    id: apiResponse.id,
    titol: apiResponse.nom,
    descripcio: apiResponse.descripcio,
    categoria: apiResponse.categoria,
    preu: apiResponse.preu,
    imatgeUrl: apiResponse.imatge,
    esPopular: apiResponse.popular,
    unitats: apiResponse.stock,
  };
}

export function adaptarElementsApi(
  apiResponses: ElementApiResponse[],
): ElementCataleg[] {
  return apiResponses.map(adaptarElementApi);
}

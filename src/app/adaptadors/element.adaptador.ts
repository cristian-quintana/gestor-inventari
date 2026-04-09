import { ElementApiResponse, ElementCataleg } from '../models/element.model';

export function adaptarElementApi(
  apiResponse: ElementApiResponse,
): ElementCataleg {
  return {
    id: apiResponse.id,
    nom: apiResponse.nom,
    descripcio: apiResponse.descripcio,
    categoria: apiResponse.categoria,
    preu: apiResponse.preu,
    imatge: apiResponse.imatge,
    esPopular: apiResponse.popular,
    stock: apiResponse.stock,
  };
}

export function adaptarElementsApi(
  apiResponses: ElementApiResponse[],
): ElementCataleg[] {
  return apiResponses.map(adaptarElementApi);
}

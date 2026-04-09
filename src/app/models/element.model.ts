export interface ElementApiResponse {
  id: string;
  nom: string;
  descripcio: string;
  categoria?: string;
  preu: number;
  imatge: string;
  popular: boolean;
  stock: number;
}

export interface ElementCataleg {
  id: string;
  nom: string;
  descripcio: string;
  categoria?: string;
  preu: number;
  imatge: string;
  esPopular: boolean;
  stock: number;
}
export interface ElementsCercaResponse {
  elements: ElementApiResponse[];
  total: number;
}
export type EstatServei = 'inicial' | 'carregant' | 'exit' | 'error';

export interface EstatElements {
  estat: EstatServei;
  elements: ElementCataleg[];
  error?: string;
}

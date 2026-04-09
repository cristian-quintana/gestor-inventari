import { adaptarElementApi, adaptarElementsApi } from './element.adaptador';
import { ElementApiResponse } from '../models/element.model';

const mockApiElement: ElementApiResponse = {
  id: 'test-001',
  nom: 'Element de prova',
  descripcio: 'Descripció de prova',
  categoria: 'Test',
  preu: 10.5,
  imatge: 'https://exemple.com/test.jpg',
  popular: true,
  stock: 25,
};

const elementAdaptat = adaptarElementApi(mockApiElement);
console.log('Element adaptat:', elementAdaptat);
console.log('Camp esPopular:', elementAdaptat.esPopular);

const mockApiElements = [mockApiElement, { ...mockApiElement, id: 'test-002' }];
const elementsAdaptats = adaptarElementsApi(mockApiElements);
console.log('Elements adaptats:', elementsAdaptats.length);

# Models i adaptadors

## Interfícies principals

### ElementCataleg (model intern)

Model utilitzat dins l'aplicació Angular:

```typescript
interface ElementCataleg {
  id: string;
  nom: string;
  descripcio: string;
  categoria: string;
  preu: number;
  imatge: string;
  esPopular: boolean; // ← Convenció camelCase
  stock: number; // ← Camp afegit
}
```

### ElementApiResponse (resposta API)

Format de les dades que retorna l'API:

```typescript
interface ElementApiResponse {
  id: string;
  nom: string;
  descripcio: string;
  categoria: string;
  preu: number;
  imatge: string;
  popular: boolean; // ← Nom diferent
  stock: number;
}
```

## Adaptadors

### adaptarElementApi()

Transforma un element de l'API al format intern:

nom → titol
imatge → imatgeUrl
popular → esPopular
stock → unitats

### ElementApiResponse

Representa exactament l'estructura JSON que retorna l'API.

### ElementCataleg

Representa el model intern de l'aplicació.

## Mapeig de camps

| Camp API     | Camp intern  | Tipus   | Transformació |
| ------------ | ------------ | ------- | ------------- |
| `id`         | `id`         | string  | Cap           |
| `nom`        | `titol`      | string  | Renombrat     |
| `descripcio` | `descripcio` | string  | Cap           |
| `categoria`  | `categoria`  | string  | Cap           |
| `preu`       | `preu`       | number  | Cap           |
| `imatge`     | `imatgeUrl`  | string  | Renombrat     |
| `popular`    | `esPopular`  | boolean | Renombrat     |
| `stock`      | `unitats`    | number  | Renombrat     |

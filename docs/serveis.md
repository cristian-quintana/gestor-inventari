# Configuració de serveis

## API Mock (desenvolupament)

### Arrencar el servidor

```bash
json-server --watch tools/api/cataleg.json --port 4301 --delay 600
```

### Endpoints disponibles

- `GET /elements` - Retorna tots els elements
- `GET /elements?popular=true` - Filtra elements populars
- `GET /elements?q=Arduino` - Cerca elements per nom
- `GET /elements/:id` - Obté un element per ID

### Configuració

- **Port:** 4301
- **Latència simulada:** 600ms
- **Fitxer de dades:** `tools/api/cataleg.json`

## Canviar a API real

Per utilitzar una API real, modifiqueu `src/environments/environment.development.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: "https://api.exemple.com",
  apiKey: "LA_VOSTRA_CLAU_API", // Si cal autenticació
};
```

## ElementService

### Responsabilitats

- Comunicació HTTP amb l'API de catàleg
- Gestió d'estats (inicial, carregant, èxit, error)
- Transformació de respostes amb adaptadors
- Gestió centralitzada d'errors

### Mètodes públics

#### obtenirPopulars(): void

Carrega elements populars del catàleg.

**Flux:**

1. Canvia estat a `'carregant'`
2. Fa petició GET a `/elements?popular=true`
3. Adapta resposta amb `adaptarElementsApi`
4. Actualitza signals amb dades i estat `'exit'`
5. En cas d'error, actualitza error i estat `'error'`

#### cercar(terme: string): void

Cerca elements per terme de cerca.

**Paràmetres:**

- `terme`: Text a cercar (mínim 1 caràcter)

**Comportament:**

- Si terme buit: carrega populars
- Si terme vàlid: cerca amb `/elements?q={terme}`

#### codiDisponible(codi: string): Promise<boolean>

Comprova si un codi d'element està disponible (no existeix).

**Ús:** Validador asíncron per formularis

**Retorna:** `true` si el codi està disponible, `false` si ja existeix

#### reiniciar(): void

Neteja estat i elements del servei.

### Signals exposades (només lectura)

- `elements()`: Array d'elements actuals
- `estat()`: Estat actual del servei
- `error()`: Missatge d'error (si n'hi ha)

### Gestió d'errors

Errors HTTP es transformen en missatges comprensibles:

| Codi   | Missatge                             |
| ------ | ------------------------------------ |
| 0      | "No es pot connectar al servidor..." |
| 404    | "Endpoint no trobat..."              |
| 500    | "Error intern del servidor"          |
| Altres | "Error desconegut (XXX)..."          |

### Exemple d'ús

```typescript
constructor(private elementService: ElementService) {}

ngOnInit() {
  // Carregar populars
  this.elementService.obtenirPopulars();

  // Observar estat
  effect(() => {
    console.log('Estat:', this.elementService.estat());
    console.log('Elements:', this.elementService.elements());
  });
}
```

## PreferitsService

### Responsabilitats

- Gestiona els productes preferits.
- Desa preferits i notes a localStorage.
- Exposa signals reactives per consultar preferits i total.

### Clau de persistència

- `preferits-cataleg`

### Estructura guardada

```ts
interface PreferitsStorage {
  preferits: ElementCataleg[];
  notesPerPreferit: Record<string, string[]>;
}
```

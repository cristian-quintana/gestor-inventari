# Gestor d'Inventari - Cristian Quintana

## 1. Descripció:

Aplicació per gestionar un inventari, veure productes, afegir-ne, editar, eliminar, filtrar per categories, avís de stock baix, estadistiques..

Aquest projecte forma part d'una pràctica del CFGS de DAM a l'IOC.

## 2. Stack Tècnic:

- Angular CLI 18.2.21
- SCSS
- Standalone Components
- Node.js v22.16.0
- NPM 11.6.0


## 3. Mapa de rutes

| Path          | Component / càrrega                      | Accés  | Descripció                                      |
| ------------- | ----------------------------------------- | ------ | ----------------------------------------------- |
| `/`           | Redirecció a `/cataleg`                   | Públic | Redirigeix a la pàgina principal                |
| `/cataleg`    | `CatalegPageComponent`                    | Públic | Llistat principal d'elements                    |
| `/cerca`      | `CercaComponent`                          | Públic | Vista de cerca                                  |
| `/detall/:id` | `DetallComponent`                         | Públic | Vista de detall d'un element segons l'id de URL |
| `/preferits`  | `PreferitsComponent` amb `loadComponent`  | Privat | Secció de preferits protegida amb `authGuard`   |
| `/login`      | `LoginComponent`                          | Públic | Formulari d'autenticació simulada               |
| `**`          | Redirecció a `/cataleg`                   | Públic | Gestiona URLs no reconegudes                    |

## 4. Instruccions d'execució en local

```bash
git clone [url-repositori]
cd gestor-inventari
npm install
npm start
```

Després obriu el navegador a:

```txt
http://localhost:4200
```

Si es fa servir `json-server` per a l'API mock, cal tenir-lo actiu segons la configuració del projecte.

## 5. Build de producció

Per generar el paquet de producció:

```bash
npm run build -- --configuration production
```

Angular genera els fitxers dins de la carpeta:

```
dist/
```

Després d'executar el build, cal adjuntar una captura de la terminal on es vegi la taula de mides del bundle, incloent els fitxers inicials i els lazy chunks.

**Mida aproximada del bundle:** el build de producció ha generat un `Initial total` de **387.78 kB** en mida raw i **103.28 kB** de mida estimada de transferència.
## 6. Credencials de prova

Per accedir a la ruta protegida `/preferits`, utilitzeu:

| Camp        | Valor            |
| ----------- | ---------------- |
| Email       | `admin@test.com` |
| Contrasenya | `1234`           |


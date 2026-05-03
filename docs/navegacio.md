# Navegació de l'aplicació

## Mapa de rutes

| Path        | Component             | Accés  |
| ----------- | --------------------- | ------ |
| /           | Redirecció a /cataleg | Públic |
| /cataleg    | CatalegPageComponent  | Públic |
| /cerca      | CercaComponent        | Públic |
| /detall/:id | DetallComponent       | Públic |
| /preferits  | PreferitsComponent    | Privat |
| /login      | LoginComponent        | Públic |
| \*\*        | Redirecció a /cataleg | Públic |

## Configuració de routing

Les rutes de l'aplicació s'han definit a `src/app/app.routes.ts` mitjançant una constant `routes` de tipus `Routes`.

A `src/app/app.config.ts` s'ha configurat `provideRouter(routes)` per activar el sistema de rutes de l'aplicació.

A `AppComponent` s'ha afegit `<router-outlet></router-outlet>`, que és el punt on Angular carrega el component corresponent segons la URL.

El component de navegació utilitza `routerLink` per navegar entre vistes sense recarregar la pàgina i `routerLinkActive` per marcar visualment la ruta activa.

La ruta `/detall/:id` utilitza `ActivatedRoute` per llegir el paràmetre `id` de la URL.

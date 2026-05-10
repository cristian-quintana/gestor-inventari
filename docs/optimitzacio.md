# Optimització de rendiment

## ChangeDetectionStrategy.OnPush

S'ha aplicat `ChangeDetectionStrategy.OnPush` als components següents:

| Component                | Motiu                                                                                              |
| ------------------------ | -------------------------------------------------------------------------------------------------- |
| TargetaProducteComponent | És un component presentacional que rep el producte per `@Input()` i només mostra dades.            |
| DetallComponent          | Mostra informació basada en el paràmetre de ruta i no necessita comprovacions constants de canvis. |

Amb `OnPush`, Angular només revisa el component quan canvien les seves entrades o quan es produeix un esdeveniment rellevant. Això ajuda a reduir comprovacions innecessàries.

## Virtualització de la llista

S'ha utilitzat `CdkVirtualScrollViewport` del paquet `@angular/cdk/scrolling` a la vista principal del catàleg.

Configuració utilitzada:

| Propietat         | Valor                |
| ----------------- | -------------------- |
| Component         | CatalegPageComponent |
| Directiva         | `*cdkVirtualFor`     |
| itemSize          | `420`                |
| Nombre d'elements | `60`                 |

La virtualització permet renderitzar només els elements visibles dins del viewport, en lloc de pintar tota la llista al DOM. Això millora el rendiment quan hi ha molts elements.

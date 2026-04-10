# Formularis

## FormulariCercaComponent

### Funcionalitat

Formulari reactiu per cercar productes del catàleg consultant l’API.

### Camp del formulari

- `termeCerca`

### Validacions sincrones

- `minLength(2)` → el terme ha de tenir almenys 2 caràcters
- `maxLength(50)` → el terme no pot superar els 50 caràcters

### Validació asincrona

- `codiDisponibleValidator`
- Espera 500 ms abans de consultar l’API
- Si no hi ha resultats, retorna:
  - `{ sensResultats: true }`

### Debounce

- La cerca automàtica es fa amb `'debounceTime(400)`
- Evita massa peticions mentre lusuari escriu

### Comportament

- El botó **Netejar** només es mostra quan el camp conté text
- Durant la validació asíncrona es mostra un indicador visual ("Validant...")
- Els errors només es mostren quan el camp ha estat tocat (`touched`)

### Missatges d’error

- "El terme de cerca ha de tenir almenys 2 caràcters."
- "El terme de cerca no pot superar els 50 caràcters."
- "No s’han trobat resultats per aquest terme."

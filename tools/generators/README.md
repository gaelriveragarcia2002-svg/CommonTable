# Generators de `libs/shared`

Comandos rápidos para generar artefactos Angular directamente en la librería compartida.
Todos los artefactos se crean como **standalone**, con **inline template y styles**, sin archivo de spec.

---

## Comandos disponibles

```bash
# Componente → libs/shared/src/lib/components/<name>/<name>.ts
pnpm nx g @org/generators:shared-component <name>

# Pipe → libs/shared/src/lib/pipes/<name>/<name>-pipe.ts
pnpm nx g @org/generators:shared-pipe <name>

# Directiva → libs/shared/src/lib/directives/<name>/<name>.ts
pnpm nx g @org/generators:shared-directive <name>
```

Todos actualizan `libs/shared/src/index.ts` automáticamente con el export correspondiente.

Agrega `--dry-run` a cualquier comando para previsualizar los archivos que se crearían sin escribirlos.

---

## Agregar un nuevo generator (ejemplo: guard)

### 1. Crear el generator con Nx

```bash
pnpm nx g @nx/plugin:generator tools/generators/src/generators/shared-guard --name=shared-guard --unitTestRunner=none
```

Esto crea:
```
tools/generators/src/generators/shared-guard/
  shared-guard.ts     ← lógica del generator
  schema.json         ← opciones del CLI
  schema.d.ts         ← tipos TypeScript del schema
```

Y registra el generator en `tools/generators/generators.json`.

### 2. Actualizar `generators.json` para apuntar al código fuente

El comando anterior genera las rutas apuntando a `./dist/...`. Cámbialas a `./src/...`:

```json
"shared-guard": {
  "factory": "./src/generators/shared-guard/shared-guard",
  "schema": "./src/generators/shared-guard/schema.json",
  "description": "Genera un guard en libs/shared"
}
```

### 3. Editar `shared-guard.ts`

```typescript
import { formatFiles, Tree } from '@nx/devkit';
import { guardGenerator } from '@nx/angular/generators';
import { SharedGuardGeneratorSchema } from './schema';

export async function sharedGuardGenerator(
  tree: Tree,
  options: SharedGuardGeneratorSchema,
) {
  await guardGenerator(tree, {
    path: `libs/shared/src/lib/guards/${options.name}/${options.name}`,
    skipTests: true,
  });

  await formatFiles(tree);
}

export default sharedGuardGenerator;
```

### 4. Editar `schema.json`

```json
{
  "$schema": "https://json-schema.org/schema",
  "$id": "SharedGuard",
  "title": "Genera un guard en libs/shared",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Nombre del guard",
      "$default": { "$source": "argv", "index": 0 },
      "x-prompt": "¿Nombre del guard?"
    }
  },
  "required": ["name"]
}
```

### 5. Editar `schema.d.ts`

```typescript
export interface SharedGuardGeneratorSchema {
  name: string;
}
```

### 6. Eliminar la carpeta `files/` generada automáticamente

```bash
rm -rf tools/generators/src/generators/shared-guard/files
```

### 7. Verificar con dry-run

```bash
pnpm nx g @org/generators:shared-guard my-auth --dry-run
```

---

## Generators de Angular disponibles en `@nx/angular/generators`

| Artefacto   | Import                                          |
|-------------|--------------------------------------------------|
| Componente  | `componentGenerator`                             |
| Pipe        | `pipeGenerator`                                  |
| Directiva   | `directiveGenerator`                             |
| Guard       | `guardGenerator`                                 |
| Interceptor | `interceptorGenerator`                           |
| Service     | `serviceGenerator`                               |
| Resolver    | `resolverGenerator`                              |

Para ver las opciones disponibles de cualquier generator nativo de Nx:

```bash
pnpm nx g @nx/angular:<tipo> --help
```

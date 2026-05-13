#!/usr/bin/env node
/**
 * Propaga las <trans-unit> nuevas del archivo fuente (messages.xlf)
 * a cada archivo de traducción (messages.*.xlf) sin sobreescribir
 * las traducciones existentes.
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { resolve, basename } from 'path';

const I18N_DIR = resolve('libs/i18n');
const SOURCE_FILE = 'messages.xlf';

// TODO: Al agregar un nuevo idioma al proyecto:
// 1. Crear libs/i18n/messages.<locale>.xlf con la estructura base
// 2. Agregar el locale en web-app/project.json → i18n.locales
// 3. Agregar el locale en desktop-app/project.json → i18n.locales
// 4. Agregar configuraciones "fr"/"de"/etc. en build.configurations y serve.configurations de ambos project.json
// Este script detecta automáticamente todos los messages.*.xlf del directorio,
// por lo que no necesitas modificarlo al agregar nuevos idiomas.

function extractUnits(content) {
  const map = new Map();
  const rx = /<trans-unit\s[^>]*id="([^"]+)"[\s\S]*?<\/trans-unit>/g;
  let m;
  while ((m = rx.exec(content)) !== null) {
    map.set(m[1], m[0]);
  }
  return map;
}

function addNewTarget(unit) {
  const sourceText = unit.match(/<source>([\s\S]*?)<\/source>/)?.[1] ?? '';
  return unit.replace(
    /(<source>[\s\S]*?<\/source>)/,
    `$1\n        <target state="new">${sourceText}</target>`
  );
}

const sourceContent = readFileSync(resolve(I18N_DIR, SOURCE_FILE), 'utf-8');
const sourceUnits = extractUnits(sourceContent);

const translationFiles = readdirSync(I18N_DIR).filter(
  (f) => f.startsWith('messages.') && f !== SOURCE_FILE && f.endsWith('.xlf')
);

if (translationFiles.length === 0) {
  console.log('No se encontraron archivos de traducción.');
  process.exit(0);
}

for (const file of translationFiles) {
  const locale = basename(file, '.xlf').replace('messages.', '');
  const filePath = resolve(I18N_DIR, file);
  let content = readFileSync(filePath, 'utf-8');
  const existing = extractUnits(content);

  const missing = [...sourceUnits.entries()].filter(([id]) => !existing.has(id));
  const stale = [...existing.keys()].filter((id) => !sourceUnits.has(id));

  if (missing.length === 0 && stale.length === 0) {
    console.log(`[${locale}] Sin cambios.`);
    continue;
  }

  // Agregar unidades nuevas
  if (missing.length > 0) {
    const newUnits = missing
      .map(([, unit]) => `      ${addNewTarget(unit)}`)
      .join('\n');
    content = content.replace(/(\s*)<\/body>/, `\n${newUnits}\n    </body>`);
    console.log(`[${locale}] Se agregaron ${missing.length} unidad(es) nueva(s).`);
  }

  // Eliminar unidades huérfanas (ya no existen en el fuente)
  if (stale.length > 0) {
    for (const id of stale) {
      const rx = new RegExp(
        `\\s*<trans-unit\\s[^>]*id="${id}"[\\s\\S]*?<\\/trans-unit>`,
        'g'
      );
      content = content.replace(rx, '');
    }
    console.log(`[${locale}] Se eliminaron ${stale.length} unidad(es) huérfana(s): ${stale.join(', ')}.`);
  }

  writeFileSync(filePath, content, 'utf-8');
}

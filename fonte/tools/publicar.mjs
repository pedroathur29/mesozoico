// Copia o build (fonte/dist) para a raiz do repositório, que é o que o GitHub Pages publica.
// Uso: npm run publicar  (roda o build antes). Só apaga o que ele mesmo gera: index.html, favicon.svg e assets/.
import { cpSync, rmSync, existsSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const fonte = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const raiz = resolve(fonte, '..');
const dist = resolve(fonte, 'dist');
if (!existsSync(resolve(dist, 'index.html'))) throw new Error('dist/index.html não existe: rode o build antes.');
for (const alvo of ['index.html', 'favicon.svg', 'assets']) rmSync(resolve(raiz, alvo), { recursive: true, force: true });
cpSync(dist, raiz, { recursive: true });
writeFileSync(resolve(raiz, '.nojekyll'), '');
console.log('Site copiado para', raiz);

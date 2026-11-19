import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const rootDir = path.resolve(import.meta.dirname, '..');

const app = require(path.join(rootDir, 'app.js'));
const html = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(rootDir, 'styles.css'), 'utf8');
const jsSource = fs.readFileSync(path.join(rootDir, 'app.js'), 'utf8');
const cname = fs.readFileSync(path.join(rootDir, 'CNAME'), 'utf8').trim();
const proposito = fs.readFileSync(path.join(rootDir, 'proposito.md'), 'utf8');

test('arquivos obrigatórios de site e deploy existem', () => {
  const requiredFiles = [
    'index.html',
    'styles.css',
    'app.js',
    'CNAME',
    '.nojekyll',
    '.gitignore',
    'package.json',
    '.github/workflows/static.yml',
  ];
  for (const rel of requiredFiles) {
    assert.ok(fs.existsSync(path.join(rootDir, rel)), `Arquivo ausente: ${rel}`);
  }
  assert.equal(cname, 'ussecajui.narosco.com');
});

test('todos os caminhos de imagens e links locais em index.html existem no workspace', () => {
  const assetRefs = [...html.matchAll(/(?:src|href)="(assets\/[^"]+|[^"]+\.pdf)"/g)].map((m) => m[1]);
  assert.ok(assetRefs.length >= 15, 'Esperava ao menos 15 referências de ativos locais');

  for (const ref of assetRefs) {
    const decoded = decodeURIComponent(ref);
    const fullPath = path.join(rootDir, decoded);
    assert.ok(fs.existsSync(fullPath), `Ativo local não encontrado: ${decoded} (${ref})`);
  }

  for (const piece of Object.values(app.CATALOG_ITEMS)) {
    for (const photo of piece.photos) {
      assert.ok(
        fs.existsSync(path.join(rootDir, photo.src)),
        `Foto do catálogo ausente: ${photo.src}`,
      );
    }
  }
});

test('identidade visual oficial (paleta e tipografia Quicksand) está aplicada', () => {
  const requiredHexColors = [
    '#F7EEDF',
    '#EFDEC2',
    '#D9744A',
    '#EFAF41',
    '#878E5D',
    '#6E929E',
    '#EB8285',
  ];
  for (const hex of requiredHexColors) {
    assert.match(css, new RegExp(hex, 'i'), `Cor oficial ausente no CSS: ${hex}`);
  }
  assert.match(html, /Quicksand/i, 'Fonte Quicksand deve ser carregada em index.html');
  assert.match(css, /'Quicksand'/i, 'Fonte Quicksand deve estar definida em styles.css');
});

test('conformidade integral com propósito, coleção, contatos e ortografia', () => {
  const manifestoPhrases = [
    'A Cajuí nasceu com o propósito de resgatar a beleza da infância através da roupa.',
    'Criamos roupas infantis com conforto, identidade e encanto',
    'Mais do que vestir crianças, queremos criar memórias.',
    'A Cajuí é sobre celebrar a infância, valorizar nossas raízes',
  ];
  for (const phrase of manifestoPhrases) {
    assert.ok(proposito.includes(phrase), 'Frase ausente no proposito.md');
    assert.ok(html.includes(phrase), `Frase do manifesto ausente no HTML: ${phrase}`);
  }

  assert.ok(html.includes('Roupa para viver a infância.'));
  assert.ok(html.includes('Feita com amor ♡'));
  assert.ok(html.includes('@ussecajui'));
  assert.ok(html.includes('(81) 99906-4218'));
  assert.ok(html.includes('https://wa.me/5581999064218'));
  assert.ok(html.includes('3 dias úteis'));

  assert.equal(app.CATALOG_ITEMS['bata-short'].price, '110,90');
  assert.equal(app.CATALOG_ITEMS['macacao-over'].price, '129,90');
  assert.equal(app.CATALOG_ITEMS['blusa-pantalona'].price, '149,90');
  assert.ok(html.includes('110,90'));
  assert.ok(html.includes('129,90'));
  assert.ok(html.includes('149,90'));

  const forbiddenTypos = [/Conjuto/i, /Gelia/i, /Na Caju(?!í)/i];
  for (const pattern of forbiddenTypos) {
    assert.doesNotMatch(html, pattern, `Erro ortográfico encontrado no HTML: ${pattern}`);
    assert.doesNotMatch(jsSource, pattern, `Erro ortográfico encontrado no JS: ${pattern}`);
  }
});

test('tabela de medidas oficial tem 16 linhas e valores exatos de 2 a 12 anos', () => {
  assert.deepEqual(app.AGE_COLUMNS, ['2', '4', '6', '8', '10', '12']);
  assert.equal(app.MEASURES_TABLE.length, 16);

  const busto = app.MEASURES_TABLE.find((r) => r.label === 'Busto');
  const cava = app.MEASURES_TABLE.find((r) => r.label === 'Altura da Cava');
  const mangaCurta = app.MEASURES_TABLE.find((r) => r.label === 'Altura da Manga Curta');
  const tornozelo = app.MEASURES_TABLE.find((r) => r.label === 'Altura da Cintura até o Tornozelo');

  assert.deepEqual(busto?.values, { '2': '58', '4': '60', '6': '64', '8': '70', '10': '74', '12': '78' });
  assert.equal(cava?.values['8'], '15,9');
  assert.equal(mangaCurta?.values['8'], '12,5');
  assert.equal(mangaCurta?.values['10'], '12,5');
  assert.deepEqual(tornozelo?.values, { '2': '48', '4': '56', '6': '64', '8': '72', '10': '80', '12': '88' });
});

test('regras de segurança e sanitização do pedido', () => {
  assert.match(html, /http-equiv="Content-Security-Policy"/i, 'CSP meta tag ausente');
  assert.match(html, /name="referrer"\s+content="strict-origin-when-cross-origin"/i, 'Referrer policy ausente');

  assert.doesNotMatch(jsSource, /\beval\s*\(/, 'Uso proibido de eval()');
  assert.doesNotMatch(jsSource, /\.innerHTML\s*=/, 'Uso proibido de innerHTML');
  assert.doesNotMatch(html, /\son(?:click|load|error|input|submit)\s*=/i, 'Handler inline proibido no HTML');

  const blankTargetTags = html.match(/<a\b[^>]*target="_blank"[^>]*>/gi) || [];
  assert.ok(blankTargetTags.length >= 2);
  for (const tag of blankTargetTags) {
    assert.match(tag, /rel="noopener noreferrer"/i, `Link externo sem noopener noreferrer: ${tag}`);
  }

  const secretPatterns = [
    /ghp_[A-Za-z0-9]{20,}/,
    /github_pat_[A-Za-z0-9_]{20,}/,
    /AIza[0-9A-Za-z_-]{25,}/,
    /sk-[A-Za-z0-9]{20,}/,
  ];
  for (const content of [html, css, jsSource]) {
    for (const pat of secretPatterns) {
      assert.doesNotMatch(content, pat, 'Possível segredo detectado no código fonte');
    }
  }

  const sanitized = app.sanitizeNote('<script>alert(1)</script>\n\tEstampa   de  sois\u0007 ' + 'a'.repeat(250));
  assert.ok(!sanitized.includes('<') && !sanitized.includes('>'));
  assert.equal(sanitized.length, 200);

  const waUrl = app.buildWhatsappUrl('macacao-over', '8', 'Estampa margaridas');
  assert.ok(waUrl.startsWith('https://wa.me/5581999064218?text='));
  assert.ok(decodeURIComponent(waUrl).includes('Macacão Over'));
  assert.ok(decodeURIComponent(waUrl).includes('8 anos'));
});

test('todos os seletores DOM referenciados em app.js existem em index.html', () => {
  const idMatches = [...jsSource.matchAll(/getElementById\(['"]([^'"]+)['"]\)/g)].map((m) => m[1]);
  assert.ok(idMatches.length >= 15);
  for (const id of idMatches) {
    assert.match(html, new RegExp(`id="${id}"`), `ID referenciado no JS ausente no HTML: #${id}`);
  }
});

test('hero exibe as três modelos da galeria, varal usa os três mockups fiéis e rodapé menciona a Narosco', () => {
  const heroPhotos = [
    'assets/galeria-modelo-bata-short.jpg',
    'assets/galeria-modelo-macacao.jpg',
    'assets/galeria-modelo-pantalona.jpg',
  ];
  for (const src of heroPhotos) {
    assert.ok(html.includes(src), `Foto da galeria ausente no HTML: ${src}`);
    assert.ok(fs.existsSync(path.join(rootDir, src)), `Arquivo ausente: ${src}`);
  }

  const varalMockups = [
    'assets/mockup-camisa-short.png',
    'assets/mockup-macacao-over.png',
    'assets/mockup-blusa-pantalona.png',
  ];
  for (const src of varalMockups) {
    assert.ok(html.includes(src), `Mockup fiel ausente no varal do HTML: ${src}`);
    assert.ok(fs.existsSync(path.join(rootDir, src)), `Arquivo ausente: ${src}`);
  }

  assert.match(
    html,
    /<a\b[^>]*href="https:\/\/narosco\.com"[^>]*rel="noopener noreferrer"[^>]*>Narosco<\/a>/i,
    'Menção de criação à Narosco com link seguro deve estar presente no rodapé',
  );
});

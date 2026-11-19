'use strict';

const WHATSAPP_NUMBER = '5581999064218';
const WHATSAPP_DISPLAY = '(81) 99906-4218';

const AGE_COLUMNS = ['2', '4', '6', '8', '10', '12'];

const CATALOG_ITEMS = {
  'bata-short': {
    id: 'bata-short',
    name: 'Conjunto Bata + Short',
    price: '110,90',
    fabricBadge: 'Viscose & Viscolinho',
    description:
      'Leve, confortável e cheio de charme, este conjunto foi pensado para acompanhar a infância com liberdade e delicadeza.',
    bullets: [
      'Bata em viscose leve e fresca com duas fileiras de elástico no busto (franzido delicado)',
      'Alças com amarração em laço para caimento personalizado',
      'Short em viscolinho com cós de elástico e recorte oval nas laterais',
      'Modelagem confortável para brincar, passear e viver a infância com liberdade',
    ],
    photos: [
      {
        src: 'assets/galeria-modelo-bata-short.jpg',
        alt: 'Modelo vestindo o Conjunto Bata + Short da Coleção Geleia de Maçã',
      },
      {
        src: 'assets/galeria-bata-laco-detalhe.jpg',
        alt: 'Detalhe das alças com amarração em laço da bata em viscose',
      },
      {
        src: 'assets/galeria-short-caju-detalhe.jpg',
        alt: 'Detalhe do short em viscolinho com aplicação de cajuzinho em crochê',
      },
      {
        src: 'assets/galeria-tres-modelos-juntas.jpg',
        alt: 'As três modelos da Cajuí juntas com a Coleção Geleia de Maçã',
      },
    ],
  },
  'macacao-over': {
    id: 'macacao-over',
    name: 'Macacão Over',
    price: '129,90',
    fabricBadge: 'Viscose leve e fresca',
    description:
      'Conforto, liberdade e estilo para acompanhar cada descoberta da infância. Com corte reto e caimento leve, acompanha os movimentos durante as brincadeiras.',
    bullets: [
      'Corte reto em viscose leve e fresca',
      'Alças com elástico para melhor ajuste ao corpo e praticidade',
      'Modelo balão com elástico nas pernas para regulagem e mobilidade no dia a dia',
    ],
    photos: [
      {
        src: 'assets/galeria-modelo-macacao.jpg',
        alt: 'Modelo usando o Macacão Over estampado da Coleção Geleia de Maçã',
      },
      {
        src: 'assets/galeria-macacao-oculos.jpg',
        alt: 'Macacão Over com modelagem balão confortável para brincar',
      },
      {
        src: 'assets/galeria-macacao-cabide.jpg',
        alt: 'Macacão Over pendurado mostrando a estampa Geleia de Maçã e alças com elástico',
      },
      {
        src: 'assets/galeria-macacao-detalhe-busto.jpg',
        alt: 'Detalhe do decote franzido, alças com elástico e cajuzinho no Macacão Over',
      },
    ],
  },
  'blusa-pantalona': {
    id: 'blusa-pantalona',
    name: 'Conjunto Blusa + Calça Pantalona',
    price: '149,90',
    fabricBadge: 'Viscose leve e fresca',
    description:
      'Um conjunto leve e elegante, pensado para trazer conforto, fluidez e movimento para diferentes momentos da infância.',
    bullets: [
      'Blusa em corte reto com decote arredondado na frente e nas costas e caimento soltinho',
      'Calça modelo pantalona ampla e confortável',
      'Elástico de regulagem na cintura para melhor ajuste e praticidade no dia a dia',
    ],
    photos: [
      {
        src: 'assets/galeria-modelo-pantalona.jpg',
        alt: 'Modelo vestindo o Conjunto Blusa + Calça Pantalona da Coleção Geleia de Maçã',
      },
      {
        src: 'assets/galeria-pantalona-2.jpg',
        alt: 'Retrato do Conjunto Blusa + Calça Pantalona com detalhes da peça',
      },
      {
        src: 'assets/foto-pantalona-detalhe.jpg',
        alt: 'Detalhe da modelagem ampla e regulagem na cintura da calça pantalona',
      },
    ],
  },
};

const MEASURES_TABLE = [
  { label: 'Busto', values: { '2': '58', '4': '60', '6': '64', '8': '70', '10': '74', '12': '78' } },
  { label: 'Cintura', values: { '2': '54', '4': '56', '6': '58', '8': '60', '10': '62', '12': '70' } },
  { label: 'Quadris', values: { '2': '60', '4': '64', '6': '68', '8': '72', '10': '76', '12': '80' } },
  { label: 'Largura das Costas', values: { '2': '22', '4': '24', '6': '26', '8': '28', '10': '30', '12': '32' } },
  { label: 'Altura Blusa na Frente', values: { '2': '27', '4': '30', '6': '32', '8': '34', '10': '37', '12': '39' } },
  { label: 'Altura da Cava', values: { '2': '12', '4': '13', '6': '14', '8': '15,9', '10': '16,5', '12': '18' } },
  { label: 'Largura do Braço', values: { '2': '17,5', '4': '19', '6': '20,5', '8': '22', '10': '23,5', '12': '25' } },
  { label: 'Altura da Manga Comprida', values: { '2': '31', '4': '36', '6': '41', '8': '46', '10': '51', '12': '56' } },
  { label: 'Largura do Punho', values: { '2': '12,6', '4': '13,2', '6': '13,8', '8': '14,4', '10': '15', '12': '15,6' } },
  { label: 'Altura da Manga Curta', values: { '2': '11', '4': '11,5', '6': '12', '8': '12,5', '10': '12,5', '12': '13' } },
  { label: 'Altura do Quadris', values: { '2': '11', '4': '12', '6': '13', '8': '14', '10': '15', '12': '16' } },
  { label: 'Altura do Gancho', values: { '2': '16', '4': '17,5', '6': '19', '8': '20,5', '10': '22', '12': '23,5' } },
  { label: 'Altura do Joelho', values: { '2': '29', '4': '34', '6': '37', '8': '41', '10': '46', '12': '52' } },
  { label: 'Largura do Joelho', values: { '2': '25', '4': '27', '6': '29', '8': '31', '10': '33', '12': '35' } },
  { label: 'Largura do Tornozelo', values: { '2': '15,6', '4': '16,4', '6': '17,2', '8': '18', '10': '18,8', '12': '19,6' } },
  { label: 'Altura da Cintura até o Tornozelo', values: { '2': '48', '4': '56', '6': '64', '8': '72', '10': '80', '12': '88' } },
];

const HIGHLIGHT_INDICES = [0, 1, 2, 4, 15];

function sanitizeNote(rawNote) {
  if (typeof rawNote !== 'string') return '';
  const cleaned = rawNote
    .replace(/[\u0000-\u001F\u007F<>]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return cleaned.slice(0, 200);
}

function buildWhatsappMessage(pieceId, age, rawNote) {
  const piece = CATALOG_ITEMS[pieceId] || CATALOG_ITEMS['bata-short'];
  const validAge = AGE_COLUMNS.includes(String(age)) ? String(age) : '6';
  const note = sanitizeNote(rawNote);

  let message =
    `Olá, Cajuí! Gostaria de pedir a peça *${piece.name}* (R$ ${piece.price}) ` +
    `da Coleção Geleia de Maçã no tamanho *${validAge} anos*.`;

  if (note) {
    message += ` Observação: ${note}`;
  }

  return message;
}

function buildWhatsappUrl(pieceId, age, rawNote) {
  const text = buildWhatsappMessage(pieceId, age, rawNote);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function initSite() {
  const state = {
    selectedPiece: 'bata-short',
    selectedAge: '6',
    showAllNotebookMeasures: false,
    activeModalPiece: null,
  };

  // 1. Mobile Navigation Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('nav-principal');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const nextOpen = !mainNav.classList.contains('is-open');
      mainNav.classList.toggle('is-open', nextOpen);
      menuToggle.setAttribute('aria-expanded', String(nextOpen));
    });

    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Hero Polaroid Lightbox
  const photoDialog = document.getElementById('photo-dialog');
  const photoDialogImg = document.getElementById('photo-dialog-img');
  const photoDialogCaption = document.getElementById('photo-dialog-caption');
  const photoDialogClose = document.getElementById('photo-dialog-close');

  document.querySelectorAll('.polaroid').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!photoDialog || !photoDialogImg || !photoDialogCaption) return;
      const src = btn.getAttribute('data-photo');
      const caption = btn.getAttribute('data-caption') || '';
      if (!src) return;
      photoDialogImg.src = src;
      photoDialogImg.alt = caption;
      photoDialogCaption.textContent = caption;
      if (typeof photoDialog.showModal === 'function') {
        photoDialog.showModal();
      } else {
        photoDialog.setAttribute('open', 'true');
      }
    });
  });

  if (photoDialog && photoDialogClose) {
    photoDialogClose.addEventListener('click', () => {
      if (typeof photoDialog.close === 'function') photoDialog.close();
      else photoDialog.removeAttribute('open');
    });
    photoDialog.addEventListener('click', (event) => {
      if (event.target === photoDialog && typeof photoDialog.close === 'function') {
        photoDialog.close();
      }
    });
  }

  // 3. Clothesline View Switcher (Illustrated vs Real Photos)
  const clotheslineStage = document.querySelector('.clothesline-stage');
  const switchBtns = document.querySelectorAll('[data-view-mode]');

  switchBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-view-mode');
      if (!mode || !clotheslineStage) return;
      clotheslineStage.setAttribute('data-view', mode);
      switchBtns.forEach((item) => {
        const isCurrent = item === btn;
        item.classList.toggle('is-active', isCurrent);
        item.setAttribute('aria-pressed', String(isCurrent));
      });
    });
  });

  // 4. Piece Detail Modal
  const pieceDialog = document.getElementById('piece-dialog');
  const dialogMainImg = document.getElementById('dialog-main-img');
  const dialogThumbs = document.getElementById('dialog-thumbs');
  const dialogFabricBadge = document.getElementById('dialog-fabric-badge');
  const dialogTitle = document.getElementById('dialog-title');
  const dialogPrice = document.getElementById('dialog-price');
  const dialogDesc = document.getElementById('dialog-desc');
  const dialogBullets = document.getElementById('dialog-bullets');
  const dialogCloseBtn = document.getElementById('dialog-close-btn');
  const dialogSelectBtn = document.getElementById('dialog-select-btn');

  function openPieceDialog(pieceId) {
    const piece = CATALOG_ITEMS[pieceId];
    if (!piece || !pieceDialog) return;

    state.activeModalPiece = pieceId;
    dialogFabricBadge.textContent = piece.fabricBadge;
    dialogTitle.textContent = piece.name;
    dialogPrice.textContent = `R$ ${piece.price}`;
    dialogDesc.textContent = piece.description;

    const bulletNodes = piece.bullets.map((text) => {
      const li = document.createElement('li');
      li.textContent = text;
      return li;
    });
    dialogBullets.replaceChildren(...bulletNodes);

    const firstPhoto = piece.photos[0];
    dialogMainImg.src = firstPhoto.src;
    dialogMainImg.alt = firstPhoto.alt;

    const thumbNodes = piece.photos.map((photo, index) => {
      const thumbBtn = document.createElement('button');
      thumbBtn.type = 'button';
      thumbBtn.className = index === 0 ? 'dialog-thumb-btn is-active' : 'dialog-thumb-btn';
      thumbBtn.setAttribute('aria-label', `Ver foto ${index + 1} de ${piece.name}`);

      const img = document.createElement('img');
      img.src = photo.src;
      img.alt = photo.alt;
      thumbBtn.appendChild(img);

      thumbBtn.addEventListener('click', () => {
        dialogMainImg.src = photo.src;
        dialogMainImg.alt = photo.alt;
        dialogThumbs.querySelectorAll('.dialog-thumb-btn').forEach((b) => {
          b.classList.toggle('is-active', b === thumbBtn);
        });
      });

      return thumbBtn;
    });
    dialogThumbs.replaceChildren(...thumbNodes);

    if (typeof pieceDialog.showModal === 'function') {
      pieceDialog.showModal();
    } else {
      pieceDialog.setAttribute('open', 'true');
    }
  }

  document.querySelectorAll('[data-open-detail]').forEach((btn) => {
    btn.addEventListener('click', () => {
      openPieceDialog(btn.getAttribute('data-open-detail'));
    });
  });

  if (pieceDialog && dialogCloseBtn) {
    dialogCloseBtn.addEventListener('click', () => {
      if (typeof pieceDialog.close === 'function') pieceDialog.close();
      else pieceDialog.removeAttribute('open');
    });
    pieceDialog.addEventListener('click', (event) => {
      if (event.target === pieceDialog && typeof pieceDialog.close === 'function') {
        pieceDialog.close();
      }
    });
  }

  // 5. Growth Ruler & Notebook Card + Full 16x6 Table
  const notebookTitle = document.getElementById('notebook-age-title');
  const notebookList = document.getElementById('notebook-measures-list');
  const toggleAllAgeBtn = document.getElementById('toggle-all-age-measures');
  const useSelectedAgeBtn = document.getElementById('use-selected-age-btn');
  const ageButtons = document.querySelectorAll('.age-btn');
  const fullTableWrap = document.getElementById('tabela-completa-wrap');
  const toggleFullTableBtn = document.getElementById('toggle-full-table');
  const closeFullTableBtn = document.getElementById('close-full-table');
  const fullMeasuresTbody = document.getElementById('full-measures-tbody');

  function renderFullTable() {
    if (!fullMeasuresTbody) return;
    const rows = MEASURES_TABLE.map((row) => {
      const tr = document.createElement('tr');
      const th = document.createElement('th');
      th.scope = 'row';
      th.textContent = row.label;
      tr.appendChild(th);

      AGE_COLUMNS.forEach((age) => {
        const td = document.createElement('td');
        td.textContent = row.values[age];
        tr.appendChild(td);
      });

      return tr;
    });
    fullMeasuresTbody.replaceChildren(...rows);
  }

  function renderNotebook() {
    if (!notebookTitle || !notebookList) return;
    const age = state.selectedAge;
    notebookTitle.textContent = `Medidas — ${age} anos`;
    if (useSelectedAgeBtn) {
      useSelectedAgeBtn.textContent = `Usar tamanho ${age} no pedido`;
    }

    const itemsToShow = state.showAllNotebookMeasures
      ? MEASURES_TABLE
      : HIGHLIGHT_INDICES.map((idx) => MEASURES_TABLE[idx]);

    const rows = itemsToShow.map((item) => {
      const div = document.createElement('div');
      div.className = 'measure-row';
      const dt = document.createElement('dt');
      dt.textContent = item.label;
      const dd = document.createElement('dd');
      dd.textContent = `${item.values[age]} cm`;
      div.append(dt, dd);
      return div;
    });

    notebookList.replaceChildren(...rows);

    if (toggleAllAgeBtn) {
      toggleAllAgeBtn.setAttribute('aria-expanded', String(state.showAllNotebookMeasures));
      toggleAllAgeBtn.textContent = state.showAllNotebookMeasures
        ? '− mostrar resumo principal'
        : '+ ver todas as 16 medidas desta idade';
    }
  }

  function setSelectedAge(age) {
    if (!AGE_COLUMNS.includes(String(age))) return;
    state.selectedAge = String(age);

    ageButtons.forEach((btn) => {
      const active = btn.getAttribute('data-age') === state.selectedAge;
      btn.classList.toggle('is-selected', active);
      btn.setAttribute('aria-checked', String(active));
    });

    document.querySelectorAll('[data-order-age]').forEach((btn) => {
      btn.classList.toggle('is-selected', btn.getAttribute('data-order-age') === state.selectedAge);
    });

    renderNotebook();
    syncOrderState();
  }

  ageButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      setSelectedAge(btn.getAttribute('data-age'));
    });
  });

  if (toggleAllAgeBtn) {
    toggleAllAgeBtn.addEventListener('click', () => {
      state.showAllNotebookMeasures = !state.showAllNotebookMeasures;
      renderNotebook();
    });
  }

  if (toggleFullTableBtn && fullTableWrap) {
    toggleFullTableBtn.addEventListener('click', () => {
      const isHidden = fullTableWrap.hasAttribute('hidden');
      if (isHidden) {
        fullTableWrap.removeAttribute('hidden');
      } else {
        fullTableWrap.setAttribute('hidden', '');
      }
      toggleFullTableBtn.setAttribute('aria-expanded', String(isHidden));
    });
  }

  if (closeFullTableBtn && fullTableWrap && toggleFullTableBtn) {
    closeFullTableBtn.addEventListener('click', () => {
      fullTableWrap.setAttribute('hidden', '');
      toggleFullTableBtn.setAttribute('aria-expanded', 'false');
    });
  }

  // 6. Order Sync & WhatsApp URL Builder
  const orderNoteInput = document.getElementById('order-note');
  const orderPreviewText = document.getElementById('order-preview-text');
  const whatsappCta = document.getElementById('whatsapp-cta');

  function setSelectedPiece(pieceId) {
    if (!CATALOG_ITEMS[pieceId]) return;
    state.selectedPiece = pieceId;

    document.querySelectorAll('.garment-card').forEach((card) => {
      const isChosen = card.getAttribute('data-garment-id') === pieceId;
      card.classList.toggle('is-chosen', isChosen);
      const selectBtn = card.querySelector('.btn-select-piece');
      if (selectBtn) {
        selectBtn.textContent = isChosen ? 'Peça escolhida ✓' : 'Escolher peça';
      }
    });

    document.querySelectorAll('[data-order-piece]').forEach((btn) => {
      btn.classList.toggle('is-selected', btn.getAttribute('data-order-piece') === pieceId);
    });

    syncOrderState();
  }

  function syncOrderState() {
    const rawNote = orderNoteInput ? orderNoteInput.value : '';
    const message = buildWhatsappMessage(state.selectedPiece, state.selectedAge, rawNote);
    const url = buildWhatsappUrl(state.selectedPiece, state.selectedAge, rawNote);

    if (orderPreviewText) {
      orderPreviewText.textContent = `Mensagem pronta para ${WHATSAPP_DISPLAY}: "${message}"`;
    }
    if (whatsappCta) {
      whatsappCta.setAttribute('href', url);
    }
  }

  document.querySelectorAll('[data-select-piece]').forEach((btn) => {
    btn.addEventListener('click', () => {
      setSelectedPiece(btn.getAttribute('data-select-piece'));
      const orderSection = document.getElementById('pedir');
      if (orderSection) {
        orderSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  if (dialogSelectBtn && pieceDialog) {
    dialogSelectBtn.addEventListener('click', () => {
      if (state.activeModalPiece) {
        setSelectedPiece(state.activeModalPiece);
      }
      if (typeof pieceDialog.close === 'function') pieceDialog.close();
      else pieceDialog.removeAttribute('open');
      const orderSection = document.getElementById('pedir');
      if (orderSection) {
        orderSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  if (useSelectedAgeBtn) {
    useSelectedAgeBtn.addEventListener('click', () => {
      const orderSection = document.getElementById('pedir');
      if (orderSection) {
        orderSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  document.querySelectorAll('[data-order-piece]').forEach((btn) => {
    btn.addEventListener('click', () => {
      setSelectedPiece(btn.getAttribute('data-order-piece'));
    });
  });

  document.querySelectorAll('[data-order-age]').forEach((btn) => {
    btn.addEventListener('click', () => {
      setSelectedAge(btn.getAttribute('data-order-age'));
    });
  });

  if (orderNoteInput) {
    orderNoteInput.addEventListener('input', syncOrderState);
  }

  renderFullTable();
  setSelectedPiece(state.selectedPiece);
  setSelectedAge(state.selectedAge);
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSite);
  } else {
    initSite();
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    WHATSAPP_NUMBER,
    WHATSAPP_DISPLAY,
    AGE_COLUMNS,
    CATALOG_ITEMS,
    MEASURES_TABLE,
    sanitizeNote,
    buildWhatsappMessage,
    buildWhatsappUrl,
  };
}

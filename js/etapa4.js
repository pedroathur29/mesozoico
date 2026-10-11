/* MESOZOICO · Etapa 4 — ajustes de composição que o CSS sozinho não resolve.
   Não altera textos, imagens nem a lógica das transições. */
(function () {
  'use strict';
  const mobile = window.matchMedia('(max-width: 700px)');

  // Convite do explorador: no mobile ele entra no fluxo rolável, depois da ficha científica
  // (regra aprovada na Etapa 3.1). No desktop volta ao lugar de origem.
  const moves = [];
  [['.panel--eoraptor-reconstruction', '.eoraptor-detail-layout']].forEach(([panelSel, hostSel]) => {
    const panel = document.querySelector(panelSel);
    const host = panel && panel.querySelector(hostSel);
    const chips = panel && panel.querySelector('.specimen-choices');
    if (!host || !chips) return;
    const marker = document.createComment('convite-do-explorador');
    chips.parentNode.insertBefore(marker, chips);
    moves.push({ host, chips, marker });
  });
  function place() {
    moves.forEach(({ host, chips, marker }) => {
      if (mobile.matches) { if (chips.parentNode !== host) host.appendChild(chips); chips.classList.add('is-in-flow'); }
      else if (chips.parentNode === host) { marker.parentNode.insertBefore(chips, marker.nextSibling); chips.classList.remove('is-in-flow'); }
    });
  }
  place();
  (mobile.addEventListener ? mobile.addEventListener('change', place) : mobile.addListener(place));
})();

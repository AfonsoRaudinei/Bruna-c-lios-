/* ============================================================
   APP — Stack de fotos arrastável + render dos links
   ============================================================ */

// === ÍCONES SVG ===
const ICONS = {
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.7-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3.9 2.6 1.1 2.8.1.2 1.8 2.7 4.3 3.8.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.4-.3zM12 2C6.5 2 2 6.5 2 12c0 1.7.4 3.3 1.2 4.7L2 22l5.4-1.4c1.4.7 2.9 1.1 4.6 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-.8-1.3-1.2-2.7-1.2-4.2 0-4.5 3.7-8.2 8.2-8.2s8.2 3.7 8.2 8.2-3.7 8-8.2 8z"/></svg>`,

  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>`,

  tiktok: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.6 6.8c-1.5 0-2.9-.7-3.9-1.8-.8-.9-1.3-2.1-1.4-3.4h-3.2v13.1c0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7 1.2-2.7 2.7-2.7c.3 0 .6 0 .9.1V8.7c-.3 0-.6-.1-.9-.1C5.1 8.6 2 11.7 2 15.5S5.1 22.4 8.9 22.4s6.9-3.1 6.9-6.9V9.2c1.3.9 2.9 1.5 4.6 1.5V7.5c-.3 0-.5-.3-.8-.7z"/></svg>`,

  shop: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h18l-1.5 12.5a2 2 0 0 1-2 1.5h-11a2 2 0 0 1-2-1.5L3 7z"/><path d="M8 7V5a4 4 0 0 1 8 0v2"/></svg>`,

  portfolio: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12c2-4 5.5-7 10-7s8 3 10 7c-2 4-5.5 7-10 7s-8-3-10-7z"/><circle cx="12" cy="12" r="3"/></svg>`,

  link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>`,

  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
};

// ============================================================
// RENDER LINKS
// ============================================================
const linksContainer = document.getElementById("links");
LINKS.forEach((link) => {
  const a = document.createElement("a");
  a.href = link.href;
  a.className = "link-card" + (link.highlight ? " highlight" : "");
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.innerHTML = `
    <span class="link-icon">${ICONS[link.icon] || ICONS.link}</span>
    <span class="link-text">
      <span class="link-title">${link.title}</span>
      ${link.subtitle ? `<span class="link-subtitle">${link.subtitle}</span>` : ""}
    </span>
    <span class="link-arrow">${ICONS.arrow}</span>
  `;
  linksContainer.appendChild(a);
});

// ============================================================
// PHOTO STACK — arrastar para revelar próxima
// ============================================================
const stackEl = document.getElementById("photoStack");
let order = [...PHOTOS.keys()]; // [0,1,2,3]

function renderStack() {
  stackEl.innerHTML = "";
  // Renderiza de trás pra frente: a última do array vira a do topo
  order.forEach((idx, i) => {
    const photo = PHOTOS[idx];
    const card = document.createElement("div");
    card.className = "photo-card";
    card.style.zIndex = order.length - i;
    // Aplica leve offset/rotação para cards atrás
    const depth = i; // 0 = topo
    const rotate = depth === 0 ? 0 : (depth % 2 === 0 ? -2 : 2);
    const scale  = 1 - depth * 0.04;
    const ty     = depth * 8;
    card.style.transform = `translateY(${ty}px) scale(${scale}) rotate(${rotate}deg)`;
    card.style.opacity = depth > 3 ? 0 : 1;
    card.innerHTML = `<img src="${photo.src}" alt="${photo.alt || ''}" loading="${depth === 0 ? 'eager' : 'lazy'}" />`;
    stackEl.appendChild(card);
  });
}
renderStack();

// Interação: arrastar / swipe / clique para passar
let startX = 0, startY = 0, currentX = 0, currentY = 0, dragging = false;

function getTopCard() {
  return stackEl.querySelector(".photo-card");
}

function onStart(e) {
  if (PHOTOS.length < 2) return;
  dragging = true;
  const t = e.touches ? e.touches[0] : e;
  startX = t.clientX; startY = t.clientY;
  const card = getTopCard();
  if (card) card.style.transition = "none";
}

function onMove(e) {
  if (!dragging) return;
  const t = e.touches ? e.touches[0] : e;
  currentX = t.clientX - startX;
  currentY = t.clientY - startY;
  const card = getTopCard();
  if (card) {
    const rot = currentX / 20;
    card.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${rot}deg)`;
  }
}

function onEnd() {
  if (!dragging) return;
  dragging = false;
  const card = getTopCard();
  if (!card) return;

  const threshold = 80;
  if (Math.abs(currentX) > threshold || Math.abs(currentY) > threshold) {
    // Joga o card pra fora
    const dir = currentX > 0 ? 1 : -1;
    card.style.transition = "transform 0.6s var(--ease), opacity 0.6s var(--ease)";
    card.style.transform = `translate(${dir * 600}px, ${currentY + 100}px) rotate(${dir * 30}deg)`;
    card.style.opacity = "0";
    setTimeout(() => {
      // Move primeiro pro final
      order.push(order.shift());
      renderStack();
    }, 500);
  } else {
    // Volta pro lugar
    card.style.transition = "transform 0.5s var(--ease)";
    card.style.transform = "translateY(0) scale(1) rotate(0)";
  }
  currentX = 0; currentY = 0;
}

// Mouse
stackEl.addEventListener("mousedown", onStart);
window.addEventListener("mousemove", onMove);
window.addEventListener("mouseup", onEnd);

// Touch
stackEl.addEventListener("touchstart", onStart, { passive: true });
window.addEventListener("touchmove", onMove, { passive: true });
window.addEventListener("touchend", onEnd);

// Auto-rotate suave a cada 6s, se o usuário não estiver interagindo
let autoTimer;
function scheduleAuto() {
  clearTimeout(autoTimer);
  autoTimer = setTimeout(() => {
    if (!dragging && PHOTOS.length > 1) {
      const card = getTopCard();
      if (card) {
        card.style.transition = "transform 0.9s var(--ease), opacity 0.9s var(--ease)";
        card.style.transform = "translate(-600px, 80px) rotate(-25deg)";
        card.style.opacity = "0";
        setTimeout(() => {
          order.push(order.shift());
          renderStack();
          scheduleAuto();
        }, 700);
      }
    } else {
      scheduleAuto();
    }
  }, 6000);
}

// Só liga auto-rotate se o usuário não tiver preferência por reduced motion
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  scheduleAuto();
}

// Pausar autoTimer quando aba não está visível (economia)
document.addEventListener("visibilitychange", () => {
  if (document.hidden) clearTimeout(autoTimer);
  else scheduleAuto();
});

// === Footer year
document.getElementById("year").textContent = new Date().getFullYear();

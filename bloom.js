// Сардаана: цветок раскрывается при прокрутке
(function () {
  const section = document.querySelector(".bloom");
  if (!section) return;
  const svg = section.querySelector(".bloom__svg");
  const NS = "http://www.w3.org/2000/svg";
  const PETALS = 6;

  const petalsBox = svg.querySelector(".bloom__petals");
  const stamensBox = svg.querySelector(".bloom__stamens");
  const petals = [];
  const stamens = [];

  // крапинки у основания лепестка, как у настоящей сардааны
  const SPOTS = [[-4, -38], [5, -46], [-7, -55], [3, -62], [-2, -72], [7, -30], [-9, -44]];

  for (let i = 0; i < PETALS; i++) {
    const g = document.createElementNS(NS, "g");
    const inner = i % 2 === 1; // внутренний круг лепестков чуть уже
    g.innerHTML = `
      <path class="petal__shape" fill="url(#petalGrad)"
        d="M0 0 C 26 -34, ${inner ? 34 : 42} -100, 4 -165 Q 0 -172 -4 -165 C ${inner ? -34 : -42} -100, -26 -34, 0 0 Z"/>
      <path class="petal__rib" d="M0 -6 C 2 -60, 1 -110, 0 -158" />
      ${SPOTS.map(([x, y]) => `<circle class="petal__spot" cx="${x}" cy="${y}" r="${1.6 + Math.abs(x) / 6}"/>`).join("")}
    `;
    petalsBox.appendChild(g);
    petals.push({ el: g, angle: i * 60 + (inner ? 0 : 0), inner });

    const s = document.createElementNS(NS, "g");
    const len = 70 + (i % 3) * 8;
    s.innerHTML = `<line class="stamen__line" x1="0" y1="0" x2="0" y2="${-len}"/>
                   <ellipse class="stamen__head" cx="0" cy="${-len}" rx="4" ry="9"/>`;
    stamensBox.appendChild(s);
    stamens.push({ el: s, angle: i * 60 + 30 });
  }

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ease = (t) => t * t * (3 - 2 * t);
  const clamp = (v) => Math.min(1, Math.max(0, v));

  function render(p) {
    const e = ease(p);
    petals.forEach(({ el, angle, inner }, i) => {
      // бутон: лепестки собраны и закручены; цветок: раскрыты звездой
      const delay = inner ? 0.08 : 0;
      const t = ease(clamp((p - delay) / (1 - delay)));
      const rot = angle * t + (1 - t) * (i * 6 - 15);
      const sy = 0.35 + 0.65 * t;
      const sx = 0.45 + 0.55 * t;
      el.setAttribute("transform", `rotate(${rot}) scale(${sx} ${sy})`);
      el.style.opacity = 0.6 + 0.4 * t;
    });
    stamens.forEach(({ el, angle }) => {
      const t = ease(clamp((p - 0.45) / 0.55));
      el.setAttribute("transform", `rotate(${angle * t}) scale(${t})`);
      el.style.opacity = t;
    });
    svg.querySelector(".bloom__flower").setAttribute("transform", `translate(200 200) rotate(${-40 + 40 * e}) scale(${0.7 + 0.3 * e})`);
    section.style.setProperty("--p", e.toFixed(3));
  }

  if (reduce) { render(1); return; }

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const r = section.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      render(clamp(-r.top / (total * 0.8)));
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
})();

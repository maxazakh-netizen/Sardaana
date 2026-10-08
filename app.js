const root = document.getElementById("categories");

for (const cat of CATEGORIES) {
  const models = MODELS.filter((m) => m.category === cat.id);
  if (!models.length) continue;

  const section = document.createElement("section");
  section.className = "category";
  section.id = cat.id;
  section.innerHTML = `
    <div class="category__head">
      <h3>${cat.title}</h3>
      <p>${cat.text}</p>
    </div>
    <div class="carousel">
      <button class="carousel__btn carousel__btn--prev" aria-label="Назад">←</button>
      <div class="grid"></div>
      <button class="carousel__btn carousel__btn--next" aria-label="Вперёд">→</button>
    </div>
    <div class="carousel__dots"></div>
  `;

  const grid = section.querySelector(".grid");
  for (const m of models) {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card__photo">
        ${m.photo
          ? `<img src="${m.photo}" alt="${m.name}" loading="lazy">`
          : `<span class="card__placeholder">Фото скоро</span>`}
      </div>
      <div class="card__body">
        <h4>${m.name}</h4>
        <p class="card__meta">Размеры ${SIZES}</p>
        <p class="card__price">${PRICE}</p>
        <a class="card__order" target="_blank" rel="noopener"
           href="${whatsappLink(`Здравствуйте! Хочу заказать унтоваленки ${m.name}. Размер: `)}">Заказать в WhatsApp</a>
      </div>
    `;
    grid.appendChild(card);
  }
  root.appendChild(section);
  setupCarousel(section, models.length);
}

function setupCarousel(section, count) {
  const grid = section.querySelector(".grid");
  const prev = section.querySelector(".carousel__btn--prev");
  const next = section.querySelector(".carousel__btn--next");
  const dotsBox = section.querySelector(".carousel__dots");
  const dots = Array.from({ length: count }, () => dotsBox.appendChild(document.createElement("span")));

  const step = () => grid.querySelector(".card").offsetWidth + 14;
  prev.addEventListener("click", () => grid.scrollBy({ left: -step(), behavior: "smooth" }));
  next.addEventListener("click", () => grid.scrollBy({ left: step(), behavior: "smooth" }));

  const update = () => {
    const i = Math.round(grid.scrollLeft / step());
    dots.forEach((d, j) => d.classList.toggle("is-active", j === i));
    prev.disabled = grid.scrollLeft < 4;
    next.disabled = grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 4;
  };
  grid.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

// Блок «Как заказать»
const phoneLink = document.getElementById("phone-link");
phoneLink.href = whatsappLink("Здравствуйте! Хочу заказать детские унтоваленки.");
phoneLink.querySelector(".phone__number").textContent = PHONE_DISPLAY;

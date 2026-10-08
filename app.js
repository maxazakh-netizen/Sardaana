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
    <div class="grid"></div>
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
      </div>
    `;
    grid.appendChild(card);
  }
  root.appendChild(section);
}

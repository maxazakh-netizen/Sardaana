// Каталог моделей. Чтобы добавить фото, положите файл в папку photos/
// и укажите его имя в поле photo, например: photo: "photos/model-01.jpg"

const PRICE = "6 000 ₽";
const SIZES = "25–33";

const CATEGORIES = [
  {
    id: "wool",
    title: "Шерсть",
    text: "Цельновалянные модели из натуральной шерсти — максимум тепла и мягкости.",
  },
  {
    id: "wool-leather",
    title: "Шерсть, комбинированная с кожей",
    text: "Натуральная шерсть и натуральная кожа: тепло валенка и прочность кожаной отделки.",
  },
  {
    id: "wool-faux",
    title: "Шерсть, комбинированная с кожзамом",
    text: "Тёплая шерстяная основа и практичная отделка из кожзама, которая легко чистится.",
  },
];

// Распределение по категориям временное — уточним вместе с фабрикой.
const MODELS = [
  { name: "Синие с серой кожей", category: "wool-leather", photo: "photos/model-01.jpg" },
  { name: "Бордовые с бусинами", category: "wool-leather", photo: "photos/model-02.jpg" },
  { name: "Чёрные на липучке", category: "wool-leather", photo: "photos/model-03.jpg" },
  { name: "Чёрные с эмблемой", category: "wool-leather", photo: "photos/model-04.jpg" },
  { name: "Белые с бусинами", category: "wool-leather", photo: "photos/model-05.jpg" },
  { name: "Модель 6", category: "wool", photo: "" },
  { name: "Модель 7", category: "wool", photo: "" },
  { name: "Модель 8", category: "wool", photo: "" },
  { name: "Модель 9", category: "wool", photo: "" },
  { name: "Модель 10", category: "wool", photo: "" },
  { name: "Модель 11", category: "wool-leather", photo: "" },
  { name: "Модель 12", category: "wool-faux", photo: "" },
  { name: "Модель 13", category: "wool-faux", photo: "" },
  { name: "Модель 14", category: "wool-faux", photo: "" },
  { name: "Модель 15", category: "wool-faux", photo: "" },
  { name: "Модель 16", category: "wool-faux", photo: "" },
  { name: "Модель 17", category: "wool-faux", photo: "" },
];

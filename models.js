// Каталог моделей. Чтобы добавить фото, положите файл в папку photos/
// и укажите его имя в поле photo, например: photo: "photos/model-01.jpg"

const PRICE = "6 000 ₽";
const SIZES = "25–33";

// Телефон менеджера для заказов в WhatsApp
const PHONE_DISPLAY = "+7 914 114-33-66";   // как номер показывается на сайте
const PHONE_WHATSAPP = "79141143366";    // для ссылки: только цифры, начиная с 7

function whatsappLink(text) {
  return `https://wa.me/${PHONE_WHATSAPP}?text=${encodeURIComponent(text)}`;
}

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
  { name: "№1. Синие с серым носком", category: "wool-leather", photo: "photos/model-01.jpg" },
  { name: "№2. Бордовые с бусинами", category: "wool", photo: "photos/model-02.jpg" },
  { name: "№3. Чёрные на липучке", category: "wool", photo: "photos/model-03.jpg" },
  { name: "№4. Чёрные с эмблемой", category: "wool", photo: "photos/model-04.jpg" },
  { name: "№5. Белые с бусинами", category: "wool", photo: "photos/model-05.jpg" },
  { name: "№6. Бежевые с серебристой кожей", category: "wool-leather", photo: "photos/model-06.jpg" },
  { name: "№7. Серые с серой кожей", category: "wool-leather", photo: "photos/model-07.jpg" },
  { name: "№8. Чёрные на молнии", category: "wool", photo: "photos/model-08.jpg" },
  { name: "№9. Камуфляж с чёрной кожей", category: "wool-leather", photo: "photos/model-09.jpg" },
  { name: "№10. Бордовые с красной кожей", category: "wool-leather", photo: "photos/model-10.jpg" },
  { name: "№11. Коричневые на молнии", category: "wool-faux", photo: "photos/model-11.jpg" },
  { name: "№12. Серые с бусинами", category: "wool", photo: "photos/model-12.jpg" },
  { name: "№13. Камуфляж", category: "wool-faux", photo: "photos/model-13.jpg" },
];

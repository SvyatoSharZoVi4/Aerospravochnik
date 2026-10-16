const articles = [
  {id:"multirotor", number:"01", title:"Мультироторные БПЛА", subtitle:"Квадрокоптеры и гексакоптеры", category:"civil", categoryName:"Гражданские", type:"Мультиротор", tag:"ВЕРТИКАЛЬНЫЙ ВЗЛЁТ", summary:"Аппараты с несколькими несущими винтами: от компактной аэросъёмки до задач осмотра объектов.", purpose:"Аэросъёмка, инспекция инфраструктуры, обучение, поисково-спасательные работы и другие задачи, где важны зависание и манёвренность.", principle:"Подъёмная сила создаётся несколькими винтами. Изменяя скорость вращения отдельных роторов, система управления регулирует крен, тангаж, рыскание и высоту.", specs:[["Тип конструкции","Мультироторная"],["Взлёт и посадка","Вертикальные"],["Сильная сторона","Зависание и манёвренность"],["Ограничение","Обычно ограниченное время полёта"]], note:"Параметры сильно зависят от размера, аккумулятора, полезной нагрузки и конкретной модели."},
  {id:"fixedwing", number:"02", title:"БПЛА самолётного типа", subtitle:"Крыло для эффективного полёта", category:"research", categoryName:"Исследовательские", type:"Неподвижное крыло", tag:"АЭРОДИНАМИЧЕСКАЯ ЭФФЕКТИВНОСТЬ", summary:"Аппараты с неподвижным крылом, рассчитанные на эффективное движение вперёд и покрытие больших площадей.", purpose:"Картографирование, экологический мониторинг, геодезия, наблюдение за природными территориями и научные исследования.", principle:"Крыло создаёт подъёмную силу при движении относительно воздуха. В отличие от мультиротора, аппарат обычно не может долго зависать на одном месте.", specs:[["Тип конструкции","Неподвижное крыло"],["Полёт","Преимущественно поступательный"],["Сильная сторона","Эффективность на маршруте"],["Ограничение","Требования к запуску и посадке зависят от конструкции"]], note:"Существуют электрические и двигательные варианты, а также конструкции с вертикальным взлётом и посадкой."},
  {id:"vtol", number:"03", title:"Гибридные VTOL", subtitle:"Сочетание вертикального взлёта и крыла", category:"industrial", categoryName:"Промышленные", type:"Гибридный VTOL", tag:"ДВА РЕЖИМА ПОЛЁТА", summary:"Конструкции, объединяющие вертикальный взлёт и посадку с эффективным полётом на крыле.", purpose:"Инспекция протяжённых объектов, геодезия, мониторинг сельского хозяйства и доставка в местах с ограниченной инфраструктурой.", principle:"В зависимости от схемы отдельные роторы обеспечивают вертикальный режим, а крыло — горизонтальный полёт. Переход между режимами требует согласованного управления.", specs:[["Тип конструкции","Гибридная"],["Взлёт и посадка","Вертикальные"],["Крейсерский режим","Полёт на крыле"],["Компромисс","Более сложная механика и управление"]], note:"VTOL означает Vertical Take-Off and Landing — вертикальный взлёт и посадка. Разные схемы заметно различаются."},
  {id:"agriculture", number:"04", title:"Агродроны", subtitle:"Беспилотники для сельского хозяйства", category:"civil", categoryName:"Гражданские", type:"Прикладные", tag:"ТОЧНОЕ ЗЕМЛЕДЕЛИЕ", summary:"Аппараты и системы дистанционного зондирования, помогающие наблюдать за состоянием посевов и планировать работы.", purpose:"Аэрофотосъёмка полей, оценка неоднородности посевов, наблюдение за состоянием растений и, у специализированных моделей, внесение веществ при соблюдении местных правил.", principle:"Камеры и датчики собирают данные, которые затем анализируются для выявления изменений. Специализированные аппараты могут нести оборудование для обработки.", specs:[["Основные задачи","Мониторинг и агрооперации"],["Полезная нагрузка","Камеры, датчики или спецоборудование"],["Ценность данных","Выявление различий внутри поля"],["Важное условие","Соблюдение авиационных и экологических правил"]], note:"Не каждый агродрон выполняет распыление: многие предназначены только для съёмки и анализа."},
  {id:"recon", number:"05", title:"Разведывательные БПЛА", subtitle:"Дистанционное наблюдение и сбор данных", category:"military", categoryName:"Военные", type:"Наблюдение", tag:"СЕНСОРНЫЕ СИСТЕМЫ", summary:"Обобщённая категория беспилотных платформ, предназначенных для дистанционного наблюдения и получения информации.", purpose:"В зависимости от платформы могут применяться для наблюдения, картографирования, ситуационной осведомлённости и сбора данных. Военное применение регулируется отдельными нормами.", principle:"Платформа несёт сенсоры, например оптические или тепловизионные системы, а данные сохраняются на борту или передаются оператору — в зависимости от архитектуры.", specs:[["Ключевой компонент","Полезная нагрузка и сенсоры"],["Тип данных","Изображения и измерения"],["Варианты платформ","Мультироторные и самолётного типа"],["Зависимость возможностей","От сенсоров, связи и условий среды"]], note:"Это обзорная статья о классе техники, а не описание конкретной системы. Характеристики нельзя переносить с одной модели на другую."},
  {id:"loitering", number:"06", title:"Барражирующие боеприпасы", subtitle:"Отдельный класс военных систем", category:"military", categoryName:"Военные", type:"Военная система", tag:"ОБЗОР КЛАССА", summary:"Класс военных систем, в которых беспилотная платформа и боевой элемент объединены в одну систему.", purpose:"Применяются в военном контексте и связаны с серьёзными рисками для жизни и безопасности. Здесь рассматриваются только общая классификация и вопросы общественного значения.", principle:"В общих чертах система может находиться в воздухе в течение некоторого периода до завершения миссии. Конкретные режимы и возможности различаются по моделям.", specs:[["Категория","Военная система"],["Основная особенность","Платформа объединена с боевым элементом"],["Контекст","Военное применение"],["Важно","Высокие риски и строгие правовые ограничения"]], note:"Статья намеренно ограничена общим описанием класса и не содержит инструкций по применению, наведению или модификации."}
];
const illustrations = {
  multirotor:`<svg viewBox="0 0 240 100" aria-hidden="true"><g fill="none" stroke="#456c78" stroke-width="2.5"><path d="M65 25 L112 48 L175 25 M65 75 L112 52 L175 75"/><ellipse cx="50" cy="22" rx="25" ry="7"/><ellipse cx="190" cy="22" rx="25" ry="7"/><ellipse cx="50" cy="78" rx="25" ry="7"/><ellipse cx="190" cy="78" rx="25" ry="7"/></g><path d="M105 42 L137 42 L147 50 L137 58 L105 58 L95 50Z" fill="#183847"/><circle cx="120" cy="50" r="4" fill="#39c8b0"/></svg>`,
  fixedwing:`<svg viewBox="0 0 240 100" aria-hidden="true"><path d="M18 52 L101 43 L114 13 L126 13 L134 42 L217 48 L225 54 L133 58 L124 83 L115 83 L104 59 L18 58Z" fill="#698b99"/><path d="M18 52 L101 43 L114 13 L126 13 L134 42 L217 48 L225 54 L133 58 L124 83 L115 83 L104 59 L18 58Z" fill="none" stroke="#385d6a" stroke-width="1.5"/><path d="M120 16 L120 82" stroke="#d7e7e8" stroke-width="1.2"/><circle cx="129" cy="51" r="3" fill="#39c8b0"/></svg>`,
  vtol:`<svg viewBox="0 0 240 100" aria-hidden="true"><path d="M19 51 L105 44 L117 31 L128 31 L139 44 L221 49 L228 54 L138 59 L126 71 L117 71 L105 59 L19 57Z" fill="#7595a1" stroke="#456b77" stroke-width="1.5"/><path d="M65 42 L65 23 M177 46 L177 27 M65 60 L65 78 M177 62 L177 80" stroke="#456b77" stroke-width="3"/><g fill="none" stroke="#456b77" stroke-width="2"><ellipse cx="65" cy="22" rx="15" ry="4"/><ellipse cx="177" cy="26" rx="15" ry="4"/><ellipse cx="65" cy="79" rx="15" ry="4"/><ellipse cx="177" cy="81" rx="15" ry="4"/></g><circle cx="127" cy="52" r="3" fill="#39c8b0"/></svg>`,
  agriculture:`<svg viewBox="0 0 240 100" aria-hidden="true"><g stroke="#527d71" stroke-width="2.5" fill="none"><path d="M60 25 L111 48 L179 25 M60 75 L111 52 L179 75"/><ellipse cx="48" cy="22" rx="22" ry="6"/><ellipse cx="190" cy="22" rx="22" ry="6"/><ellipse cx="48" cy="78" rx="22" ry="6"/><ellipse cx="190" cy="78" rx="22" ry="6"/></g><path d="M102 42 L138 42 L148 50 L138 58 L102 58 L92 50Z" fill="#315b4c"/><path d="M115 57 L115 69 L125 69 L125 57" fill="#39a88c"/><path d="M110 70 L130 70 L135 76 L105 76Z" fill="#39a88c"/><circle cx="120" cy="50" r="3" fill="#a2e6a5"/></svg>`,
  recon:`<svg viewBox="0 0 240 100" aria-hidden="true"><path d="M18 51 L103 44 L117 19 L127 19 L136 43 L218 48 L226 53 L136 59 L126 78 L117 78 L103 59 L18 57Z" fill="#657f89" stroke="#3c5966" stroke-width="1.5"/><path d="M117 19 L127 19 L136 43 L218 48 L226 53 L136 59 L126 78 L117 78" fill="#8ca2a8"/><path d="M111 50 L132 50 L139 54 L132 58 L111 58 L104 54Z" fill="#203a47"/><circle cx="132" cy="53" r="3" fill="#d4b76a"/></svg>`,
  loitering:`<svg viewBox="0 0 240 100" aria-hidden="true"><path d="M18 52 L102 45 L116 23 L126 23 L137 44 L218 49 L226 54 L137 59 L126 77 L116 77 L103 60 L18 57Z" fill="#8b9693" stroke="#566d70" stroke-width="1.5"/><path d="M116 23 L126 23 L137 44 L218 49 L226 54 L137 59 L126 77 L116 77" fill="#aeb8b2"/><path d="M105 48 L133 48 L142 54 L133 59 L105 59 L98 54Z" fill="#354d54"/><circle cx="132" cy="53" r="3" fill="#c9a56b"/></svg>`
};
const grid = document.getElementById("article-grid");
const search = document.getElementById("search");
const emptyState = document.getElementById("empty-state");
const resultsLabel = document.getElementById("results-label");
const dialog = document.getElementById("article-dialog");
let selectedCategory = "all";

function renderArticles() {
  const term = search.value.trim().toLocaleLowerCase("ru");
  const filtered = articles.filter(a => {
    const categoryMatch = selectedCategory === "all" || a.category === selectedCategory;
    const text = [a.title,a.subtitle,a.summary,a.purpose,a.categoryName,a.type].join(" ").toLocaleLowerCase("ru");
    return categoryMatch && text.includes(term);
  });
  grid.innerHTML = filtered.map(a => `
    <article class="article-card" tabindex="0" role="button" aria-label="Открыть статью: ${a.title}" data-id="${a.id}">
      <div class="card-art"><span class="card-number">AS / ${a.number}</span><span class="card-type">${a.type.toUpperCase()}</span>${illustrations[a.id]}</div>
      <div class="card-body"><div class="card-meta"><span>●</span>${a.categoryName}</div><h3>${a.title}</h3><p>${a.summary}</p><div class="card-footer"><strong>Читать обзор</strong><span class="card-arrow">↗</span></div></div>
    </article>`).join("");
  emptyState.hidden = filtered.length !== 0;
  resultsLabel.textContent = `${filtered.length} ${pluralize(filtered.length, "материал", "материала", "материалов")}`;
  grid.querySelectorAll(".article-card").forEach(card => {
    const open = () => showArticle(card.dataset.id);
    card.addEventListener("click", open);
    card.addEventListener("keydown", e => { if(e.key === "Enter" || e.key === " ") {e.preventDefault();open();} });
  });
}
function pluralize(n, one, few, many) {
  const n10=n%10,n100=n%100;
  if(n10===1&&n100!==11)return one;
  if(n10>=2&&n10<=4&&(n100<12||n100>14))return few;
  return many;
}
function showArticle(id) {
  const a = articles.find(item => item.id === id);
  if(!a) return;
  document.getElementById("dialog-content").innerHTML = `
    <div class="dialog-category">${a.categoryName.toUpperCase()} · СПРАВОЧНАЯ СТАТЬЯ ${a.number}</div>
    <h2>${a.title}</h2><p class="dialog-intro">${a.summary}</p>
    <div class="dialog-section"><h3>Назначение</h3><p>${a.purpose}</p></div>
    <div class="dialog-section"><h3>Общий принцип работы</h3><p>${a.principle}</p></div>
    <div class="dialog-section"><h3>Ключевые особенности</h3><table class="spec-table"><tbody>${a.specs.map(s=>`<tr><td>${s[0]}</td><td>${s[1]}</td></tr>`).join("")}</tbody></table></div>
    <div class="source-note"><strong>Редакционное примечание.</strong> ${a.note}<br>Это обзор класса аппаратов, а не техническая спецификация конкретной модели. Перед публикацией добавьте ссылки на первичные источники и дату проверки.</div>`;
  dialog.showModal();
}
search.addEventListener("input", renderArticles);
document.querySelectorAll(".category-chip").forEach(button => button.addEventListener("click", () => {
  selectedCategory = button.dataset.category;
  document.querySelectorAll(".category-chip").forEach(b => b.classList.toggle("active", b === button));
  renderArticles();
}));
document.getElementById("reset-search").addEventListener("click", () => {
  search.value = "";
  selectedCategory = "all";
  document.querySelectorAll(".category-chip").forEach(b => b.classList.toggle("active", b.dataset.category === "all"));
  renderArticles();
});
document.getElementById("dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", e => { if(e.target === dialog) dialog.close(); });
document.getElementById("to-top").addEventListener("click", e => { e.preventDefault(); window.scrollTo({top:0,behavior:"smooth"}); });
renderArticles();

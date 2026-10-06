// Чистые функции рендера: принимают данные, возвращают DOM-элемент.
// innerHTML не используется — только createElement и textContent.

function statusClass(status) {
  const map = {
    "Завершён": "badge--success",
    "Выпущен": "badge--success",
    "Активен": "badge--info",
    "В работе": "badge--info",
    "Тестируется": "badge--warning",
    "Планируется": "badge--warning",
    "Запланирован": "badge--warning",
    "Черновик": "badge--error",
    "Отпуск": "badge--warning",
    "Больничный": "badge--error"
  };
  return map[status] || "";
}

function badge(status) {
  const span = document.createElement("span");
  span.className = "badge " + statusClass(status);
  span.textContent = status;
  return span;
}

function timeEl(isoDate) {
  const t = document.createElement("time");
  t.setAttribute("datetime", isoDate);
  t.textContent = isoDate;
  return t;
}

// Карточка спринта
export function renderSprint(sprint) {
  const article = document.createElement("article");
  article.className = "card";

  const h3 = document.createElement("h3");
  h3.textContent = sprint.title;
  article.append(h3);

  const goal = document.createElement("p");
  goal.textContent = "Цель: " + sprint.goal;
  article.append(goal);

  const status = document.createElement("p");
  status.append("Статус: ", badge(sprint.status));
  article.append(status);

  const dates = document.createElement("p");
  dates.append("Период: ", timeEl(sprint.startDate), " — ", timeEl(sprint.endDate));
  article.append(dates);

  const points = document.createElement("p");
  points.textContent = `Story points: ${sprint.storyPoints} • Прогресс: ${sprint.progress}%`;
  article.append(points);

  if (sprint.tasks.length) {
    const ul = document.createElement("ul");
    sprint.tasks.forEach((task) => {
      const li = document.createElement("li");
      li.textContent = "• " + task.name;
      ul.append(li);
    });
    article.append(ul);
  }
  return article;
}

// Строка таблицы релизов
export function renderReleaseRow(release) {
  const tr = document.createElement("tr");

  const version = document.createElement("th");
  version.setAttribute("scope", "row");
  version.textContent = release.version;
  tr.append(version);

  const name = document.createElement("td");
  name.textContent = release.name;
  tr.append(name);

  const status = document.createElement("td");
  status.append(badge(release.status));
  tr.append(status);

  const date = document.createElement("td");
  date.append(timeEl(release.releaseDate));
  tr.append(date);

  const env = document.createElement("td");
  env.textContent = release.environment;
  tr.append(env);

  return tr;
}

// Карточка сотрудника (нагрузка)
export function renderTeamMember(member) {
  const article = document.createElement("article");
  article.className = "card";

  const h3 = document.createElement("h3");
  h3.textContent = member.fullName;
  article.append(h3);

  const role = document.createElement("p");
  role.textContent = "Роль: " + member.role;
  article.append(role);

  const status = document.createElement("p");
  status.append("Статус: ", badge(member.status));
  article.append(status);

  const hired = document.createElement("p");
  hired.append("В команде с: ", timeEl(member.hiredAt));
  article.append(hired);

  const load = document.createElement("p");
  load.textContent = `Загрузка: ${member.assigned} / ${member.capacity} ч`;
  article.append(load);

  const ul = document.createElement("ul");
  member.skills.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = "• " + skill;
    ul.append(li);
  });
  article.append(ul);

  return article;
}

export function renderSummary(sprints, releases, team) {
  const p = document.createElement("p");
  p.textContent = `Спринтов: ${sprints.length}, релизов: ${releases.length}, сотрудников: ${team.length}`;
  return p;
}
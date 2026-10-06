import { sprints, releases, teamLoad } from "./data.js";
import {
  renderSprint,
  renderReleaseRow,
  renderTeamMember,
  renderSummary
} from "./render.js";

// Рендер списка спринтов
const sprintsList = document.querySelector('[data-list="sprints"]');
sprints.forEach((s) => sprintsList.append(renderSprint(s)));

// Рендер списка команды
const teamList = document.querySelector('[data-list="team"]');
teamLoad.forEach((m) => teamList.append(renderTeamMember(m)));

// Рендер таблицы релизов
const releaseBody = document.querySelector('[data-table="releases"]');
releases.forEach((r) => releaseBody.append(renderReleaseRow(r)));

// Итоговая сводка в aside
const summarySlot = document.querySelector('[data-summary="total"]');
summarySlot.append(renderSummary(sprints, releases, teamLoad));
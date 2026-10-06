// 3 сущности: спринты, релизы, сотрудники (нагрузка)
// У каждой: id, 2 поля заголовка/описания, статус, дата ISO, вложенный массив/объект. По 15 записей.

export const sprints = [
  { id: "s1",  title: "Спринт 1",  goal: "Настроить репозиторий и CI",       status: "Завершён",  startDate: "2024-01-08", endDate: "2024-01-19", tasks: [{ id: "t1", name: "Git init" }, { id: "t2", name: "CI setup" }], storyPoints: 21, team: "Alpha", progress: 100 },
  { id: "s2",  title: "Спринт 2",  goal: "Авторизация и регистрация",         status: "Завершён",  startDate: "2024-01-22", endDate: "2024-02-02", tasks: [{ id: "t3", name: "Login API" }, { id: "t4", name: "JWT" }],       storyPoints: 34, team: "Alpha", progress: 100 },
  { id: "s3",  title: "Спринт 3",  goal: "Личный кабинет пользователя",       status: "Завершён",  startDate: "2024-02-05", endDate: "2024-02-16", tasks: [{ id: "t5", name: "Profile UI" }],                             storyPoints: 28, team: "Alpha", progress: 100 },
  { id: "s4",  title: "Спринт 4",  goal: "Каталог товаров",                   status: "Завершён",  startDate: "2024-02-19", endDate: "2024-03-01", tasks: [{ id: "t6", name: "Catalog API" }],                           storyPoints: 40, team: "Beta",  progress: 100 },
  { id: "s5",  title: "Спринт 5",  goal: "Корзина и оформление заказа",       status: "Завершён",  startDate: "2024-03-04", endDate: "2024-03-15", tasks: [{ id: "t7", name: "Cart" }],                                  storyPoints: 45, team: "Beta",  progress: 100 },
  { id: "s6",  title: "Спринт 6",  goal: "Платёжный шлюз",                    status: "Активен",   startDate: "2024-03-18", endDate: "2024-03-29", tasks: [{ id: "t8", name: "Stripe" }],                                storyPoints: 38, team: "Beta",  progress: 60  },
  { id: "s7",  title: "Спринт 7",  goal: "Админ-панель",                      status: "Активен",   startDate: "2024-04-01", endDate: "2024-04-12", tasks: [{ id: "t9", name: "Admin UI" }],                              storyPoints: 30, team: "Gamma", progress: 40  },
  { id: "s8",  title: "Спринт 8",  goal: "Уведомления и email-рассылки",      status: "Планируется", startDate: "2024-04-15", endDate: "2024-04-26", tasks: [],                                                          storyPoints: 26, team: "Gamma", progress: 0   },
  { id: "s9",  title: "Спринт 9",  goal: "Аналитика и отчёты",                status: "Планируется", startDate: "2024-04-29", endDate: "2024-05-10", tasks: [],                                                          storyPoints: 42, team: "Gamma", progress: 0   },
  { id: "s10", title: "Спринт 10", goal: "Оптимизация производительности",    status: "Планируется", startDate: "2024-05-13", endDate: "2024-05-24", tasks: [],                                                          storyPoints: 33, team: "Alpha", progress: 0   },
  { id: "s11", title: "Спринт 11", goal: "Мобильная адаптация",               status: "Черновик",  startDate: "2024-05-27", endDate: "2024-06-07", tasks: [],                                                          storyPoints: 29, team: "Beta",  progress: 0   },
  { id: "s12", title: "Спринт 12", goal: "Интеграция с 1С",                   status: "Черновик",  startDate: "2024-06-10", endDate: "2024-06-21", tasks: [],                                                          storyPoints: 50, team: "Gamma", progress: 0   },
  { id: "s13", title: "Спринт 13", goal: "Мультиязычность",                   status: "Черновик",  startDate: "2024-06-24", endDate: "2024-07-05", tasks: [],                                                          storyPoints: 24, team: "Alpha", progress: 0   },
  { id: "s14", title: "Спринт 14", goal: "Логирование и мониторинг",          status: "Планируется", startDate: "2024-07-08", endDate: "2024-07-19", tasks: [],                                                          storyPoints: 31, team: "Beta",  progress: 0   },
  { id: "s15", title: "Спринт 15", goal: "Подготовка к релизу 2.0",           status: "Планируется", startDate: "2024-07-22", endDate: "2024-08-02", tasks: [],                                                          storyPoints: 36, team: "Gamma", progress: 0   }
];

export const releases = [
  { id: "r1",  version: "v0.1.0", name: "Первый прототип",   status: "Выпущен",   releaseDate: "2024-01-20", notes: "Базовая структура проекта",       features: ["Каркас", "CI"],        environment: "dev" },
  { id: "r2",  version: "v0.2.0", name: "Альфа-версия",      status: "Выпущен",   releaseDate: "2024-02-05", notes: "Авторизация готова",              features: ["Login", "JWT"],        environment: "dev" },
  { id: "r3",  version: "v0.3.0", name: "Личный кабинет",    status: "Выпущен",   releaseDate: "2024-02-18", notes: "Профиль пользователя",            features: ["Profile"],             environment: "dev" },
  { id: "r4",  version: "v0.4.0", name: "Каталог",           status: "Выпущен",   releaseDate: "2024-03-02", notes: "Каталог товаров",                 features: ["Catalog"],             environment: "stage" },
  { id: "r5",  version: "v0.5.0", name: "Корзина",           status: "Выпущен",   releaseDate: "2024-03-16", notes: "Оформление заказа",               features: ["Cart", "Checkout"],    environment: "stage" },
  { id: "r6",  version: "v1.0.0", name: "Первый мажор",      status: "Выпущен",   releaseDate: "2024-03-30", notes: "Оплата работает",                 features: ["Stripe"],              environment: "prod" },
  { id: "r7",  version: "v1.1.0", name: "Админка",           status: "Тестируется", releaseDate: "2024-04-14", notes: "Панель администратора",          features: ["Admin UI"],            environment: "stage" },
  { id: "r8",  version: "v1.2.0", name: "Уведомления",       status: "В работе",  releaseDate: "2024-04-28", notes: "Email-рассылки",                  features: ["Email"],               environment: "dev" },
  { id: "r9",  version: "v1.3.0", name: "Аналитика",         status: "В работе",  releaseDate: "2024-05-12", notes: "Отчёты и графики",                features: ["Reports"],             environment: "dev" },
  { id: "r10", version: "v1.4.0", name: "Производительность", status: "Запланирован", releaseDate: "2024-05-26", notes: "Ускорение работы",             features: ["Cache"],               environment: "dev" },
  { id: "r11", version: "v1.5.0", name: "Мобильная версия",  status: "Запланирован", releaseDate: "2024-06-09", notes: "Адаптив",                     features: ["Responsive"],          environment: "dev" },
  { id: "r12", version: "v1.6.0", name: "Интеграция 1С",     status: "Запланирован", releaseDate: "2024-06-23", notes: "Обмен данными",               features: ["1C API"],              environment: "dev" },
  { id: "r13", version: "v1.7.0", name: "Мультиязычность",   status: "Запланирован", releaseDate: "2024-07-07", notes: "i18n",                        features: ["i18n"],                environment: "dev" },
  { id: "r14", version: "v1.8.0", name: "Мониторинг",        status: "Запланирован", releaseDate: "2024-07-21", notes: "Логи и метрики",              features: ["Monitoring"],          environment: "dev" },
  { id: "r15", version: "v2.0.0", name: "Большой релиз",     status: "Запланирован", releaseDate: "2024-08-04", notes: "Мажорное обновление",         features: ["Major"],               environment: "prod" }
];

export const teamLoad = [
  { id: "u1",  fullName: "Иван Петров",     role: "Frontend",  status: "Активен",   hiredAt: "2022-03-01", email: "ivan@team.io",  skills: ["React", "CSS"],        capacity: 40, assigned: 38 },
  { id: "u2",  fullName: "Анна Смирнова",   role: "Backend",   status: "Активен",   hiredAt: "2021-07-15", email: "anna@team.io",  skills: ["Node", "SQL"],         capacity: 40, assigned: 42 },
  { id: "u3",  fullName: "Олег Кузнецов",   role: "QA",        status: "Активен",   hiredAt: "2022-09-10", email: "oleg@team.io",  skills: ["Testing"],             capacity: 40, assigned: 30 },
  { id: "u4",  fullName: "Мария Иванова",   role: "DevOps",    status: "Активен",   hiredAt: "2020-11-05", email: "maria@team.io", skills: ["Docker", "CI"],        capacity: 40, assigned: 35 },
  { id: "u5",  fullName: "Дмитрий Волков",  role: "Frontend",  status: "Отпуск",    hiredAt: "2023-01-20", email: "dmitry@team.io",skills: ["Vue"],                 capacity: 0,  assigned: 0  },
  { id: "u6",  fullName: "Елена Соколова",  role: "Backend",   status: "Активен",   hiredAt: "2021-05-30", email: "elena@team.io", skills: ["Java", "Spring"],      capacity: 40, assigned: 40 },
  { id: "u7",  fullName: "Сергей Морозов",  role: "Designer",  status: "Активен",   hiredAt: "2022-02-14", email: "sergey@team.io",skills: ["Figma"],               capacity: 40, assigned: 25 },
  { id: "u8",  fullName: "Ольга Новикова",  role: "PM",        status: "Активен",   hiredAt: "2019-08-01", email: "olga@team.io",  skills: ["Scrum"],               capacity: 40, assigned: 20 },
  { id: "u9",  fullName: "Павел Зайцев",    role: "Frontend",  status: "Активен",   hiredAt: "2023-04-12", email: "pavel@team.io", skills: ["Angular"],             capacity: 40, assigned: 44 },
  { id: "u10", fullName: "Наталья Белова",  role: "QA",        status: "Активен",   hiredAt: "2022-06-25", email: "natalia@team.io",skills: ["Autotests"],          capacity: 40, assigned: 33 },
  { id: "u11", fullName: "Артём Орлов",     role: "Backend",   status: "Больничный",hiredAt: "2021-12-01", email: "artem@team.io", skills: ["Python"],              capacity: 0,  assigned: 0  },
  { id: "u12", fullName: "Юлия Крылова",    role: "DevOps",    status: "Активен",   hiredAt: "2023-03-08", email: "yulia@team.io", skills: ["K8s"],                 capacity: 40, assigned: 28 },
  { id: "u13", fullName: "Роман Гусев",     role: "Frontend",  status: "Активен",   hiredAt: "2022-10-17", email: "roman@team.io", skills: ["React", "TS"],         capacity: 40, assigned: 39 },
  { id: "u14", fullName: "Ксения Фомина",   role: "Designer",  status: "Активен",   hiredAt: "2023-07-22", email: "ksenia@team.io",skills: ["UX"],                  capacity: 40, assigned: 27 },
  { id: "u15", fullName: "Виктор Лебедев",  role: "PM",        status: "Активен",   hiredAt: "2020-01-15", email: "viktor@team.io",skills: ["Agile"],               capacity: 40, assigned: 22 }
];
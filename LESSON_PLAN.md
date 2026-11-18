# MAXA React Intensive — жалпы Lesson Plan

**Мақсат:** 4 аптада Angular тәжірибесінен (3–5 жыл, TS, RxJS, NgRx) React бойынша Middle деңгейіне жету және MAXA Tech LLP-дегі **Frontend Developer (React)** вакансиясының техникалық сұхбатынан өту.

**Вакансия талаптары → оқу тақырыптары**

| Вакансияда | Қай жерде өтеміз |
|---|---|
| React + TypeScript | 1–2-апта |
| Redux Toolkit | 2-апта |
| Canvas / Fabric.js графикалық редактор | 3-апта + финалдық жоба |
| Feature-Sliced Design, легасиді көшіру | 3-апта |
| MJML email редакторы | 4-апта |
| HTML/CSS/SCSS, адаптив, Figma | 4-апта |
| REST API (Rails backend) | 2-апта (RTK Query) |
| Git, Chrome DevTools, code review | 4-апта + әр сабақтағы review |
| English, AI tools (Claude Code) | күн сайын 20 мин + жоба барысында |

**Формат:** күніне 2–3 сағат · қазақша, терминдер ағылшынша · Angular-мен салыстыру.

**Күнделікті құрылым:** Теория 40 мин → Live coding 60 мин → Тапсырма 30 мин → Interview сұрақтары 30 мин → English терминдер 20 мин.

**Финалдық жоба:** `mini-design-studio/` — React + TS + Redux Toolkit + Fabric.js + FSD. GitHub-қа жарияланып, откликке сілтеме ретінде қосылады.

---

## 1-апта — React Core

| # | Сабақ | Тақырыптар | Практика / қабылдау критерийі |
|---|---|---|---|
| 01 | React Architecture ✅ *(ChatGPT-та өтілді)* | Vite жобасы, Virtual DOM, reconciliation, Functional Components, JSX, Props, `useState`, conditional rendering, lists & `key` | Мини-редактордың UI қаңқасы: Toolbar / Canvas / PropertiesPanel, объект қосу/таңдау |
| 02 | Компоненттер коммуникациясы | Parent→Child (props), Child→Parent (callback), Sibling (lifting state up), event handlers типизациясы, `children`, composition vs inheritance. Angular `@Input/@Output` салыстыру | Sibling компоненттер ортақ state арқылы байланысады; prop drilling 3 деңгейден аспайды |
| 03 | Side effects | `useEffect` (синхрондау ретінде), dependency array, cleanup, StrictMode double-mount, data fetching, race condition. `ngOnInit/ngOnDestroy`-мен айырмашылығы | API-ден тізім алу: loading / error / abort controller |
| 04 | Refs және Context | `useRef` (DOM + mutable value), `forwardRef`/ref as prop (React 19), `useContext`, Context-тің re-render салдары. Angular DI салыстыру | Theme + Selected object Context; canvas DOM-ға ref |
| 05 | Complex state | `useReducer`, immutable updates, derived state, discriminated union actions. NgRx reducer салыстыру | Редактор state-ін `useReducer`-ге көшіру: add / update / remove / select |
| 06 | Custom Hooks | Логиканы шығару, hook ережелері, `useDebounce`, `useLocalStorage`, `useKeyboardShortcut`. Angular Service салыстыру | 3 custom hook + редакторға Delete/Ctrl+Z hotkeys |
| 07 | Performance + апта қорытындысы | Rendering моделі, `memo`, `useMemo`, `useCallback` (қашан **керек емес**), React DevTools Profiler, list virtualization | **CRUD жүйесі:** қосу, өзгерту, жою, іздеу, фильтрлеу + mock interview (React core) |

## 2-апта — TypeScript + Redux Toolkit + API

| # | Сабақ | Тақырыптар | Практика / қабылдау критерийі |
|---|---|---|---|
| 08 | React + TypeScript | Props/children/event типтері, `ComponentProps<'button'>`, discriminated unions, `as const`, utility types | Барлық компоненттер strict, `any` жоқ |
| 09 | Generic Components | `List<T>`, `Select<T>`, `Table<T>`, render props, polymorphic `as` prop | Типтелген `Select<T>` + `Table<T>` (sort) |
| 10 | Redux Toolkit негіздері | `configureStore`, `createSlice`, typed hooks (`useAppSelector`), Immer. NgRx Store/Actions салыстыру | Редактор state-ін RTK-ге көшіру |
| 11 | Selectors және async | `createSelector` (memoization), `createAsyncThunk`, loading/error state. NgRx Effects/Selectors салыстыру | Мемоизацияланған selectors + async thunk |
| 12 | RTK Query | `createApi`, queries/mutations, cache tags, invalidation, optimistic update | REST API-мен CRUD (json-server немесе public API) |
| 13 | Routing + Forms | React Router (layout, loaders, protected routes ~ Angular Guards), controlled forms, React Hook Form + Zod | Login + protected Dashboard беті |
| 14 | Апта қорытындысы | Error boundaries, API error handling, ортақ рефакторинг | **Dashboard:** REST API + RTK + routing + mock interview (TS + Redux) |

## 3-апта — FSD + Canvas/Fabric.js (MAXA ерекшелігі)

| # | Сабақ | Тақырыптар | Практика / қабылдау критерийі |
|---|---|---|---|
| 15 | Feature-Sliced Design | Layers, slices, segments, public API, импорт ережелері, легасиді біртіндеп көшіру стратегиясы | `mini-design-studio/` жобасын FSD құрылымымен бастау |
| 16 | Canvas API | 2D context, координаттар, `devicePixelRatio`, redraw циклы, hit-testing. Неге Fabric.js керек? | Таза Canvas API-мен фигура салу + drag |
| 17 | Fabric.js негіздері | `Canvas`, `Rect`/`Circle`/`Textbox`/`FabricImage`, React-та init/dispose, events | Canvas-қа фигура, мәтін, сурет қосу |
| 18 | React ↔ Fabric синхрондау | Source of truth, selection → Redux, Properties panel → `obj.set()`, тұрақты `id` | Properties panel: түс, өлшем, позиция, font |
| 19 | Трансформация және қабаттар | Drag, resize, rotate, z-index (bring forward/back), Layers panel, snapping (бонус) | Layers panel + қабат ретін өзгерту |
| 20 | Undo/Redo + Save/Load | History стегі, `toObject`/`loadFromJSON`, localStorage, автосақтау (debounce) | Ctrl+Z / Ctrl+Shift+Z, перезагрузкадан кейін дизайн қалпына келеді |
| 21 | Export + апта қорытындысы | PNG (`multiplier`), SVG, JSON; FSD review | **Mini Design Studio v1** + mock interview (Canvas + FSD) |

## 4-апта — Production + Interview

| # | Сабақ | Тақырыптар | Практика / қабылдау критерийі |
|---|---|---|---|
| 22 | MJML Email | MJML құрылымы, email client шектеулері, `mjml-browser`, блоктық редактор идеясы | Мини email-конструктор: блоктар → MJML → iframe preview |
| 23 | HTML/CSS терең | Flex/Grid, адаптив, SCSS (modules, mixins), CSS Modules, Figma-дан верстка, кросс-браузерлік | Редакторды адаптивті ету (mobile layout) |
| 24 | Testing | Vitest + React Testing Library, hooks/reducer тесттері, user-event | Reducer + 3 компонентке тест |
| 25 | Performance + DevTools | Chrome DevTools (Performance, Memory, Network), React Profiler, code splitting, `lazy`/`Suspense` | Profiler арқылы 1 нақты оптимизация |
| 26 | Git + Code Review | Conventional commits, rebase vs merge, PR сипаттамасы, review жасау және қабылдау | Жобаға PR жасап, өзіңе review жаса |
| 27 | Interview марафоны | JS core, React, TS, Redux, FSD, Canvas сұрақтары; live coding; ағылшынша self-intro | Толық mock interview (hire / no-hire бағасы) |
| 28 | Финал | README (скриншот, стек, архитектура), деплой (Vercel/Netlify), GitHub портфолио, отклик хаты («Привет, MAXA!») | Жария жоба сілтемесі + отклик жіберілді |

---

## Skills (`.claude/skills/`)

| Skill | Қашан |
|---|---|
| `react-mentor` | «5-сабақты баста», «келесі сабақ» |
| `code-review-middle` | «тапсырманы тексер» |
| `interview-sim` | «mock interview», «сұрақ қой» |
| `fsd-architecture` | FSD құрылымы, импорт ережелерін тексеру |
| `fabric-editor` | Fabric.js / Mini Design Studio |
| `mjml-email` | MJML, email конструктор |

## Ресурстар
- https://react.dev/learn
- https://www.typescriptlang.org/docs/
- https://redux-toolkit.js.org/
- https://feature-sliced.design/
- https://fabricjs.com/
- https://mjml.io/

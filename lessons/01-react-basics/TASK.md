# 01 — Мини-редактордың UI қаңқасы

## Мақсат
React-тың негізгі ұғымдарын бір жерде қолдану: Functional Components, JSX, Props, `useState`, conditional rendering, lists & `key`.

## Не жасау керек
```
┌──────────────────────────────────────────────┐
│ Toolbar:  [+ Rect] [+ Circle] [+ Text]       │
├───────────────────────────┬──────────────────┤
│ Canvas (жай div)          │ PropertiesPanel  │
│  ▭ rect-1                 │ id: rect-1       │
│  ● circle-1  ← selected   │ type: circle     │
│  T text-1                 │ x: 40  y: 80     │
│                           │ fill: #4f46e5    │
└───────────────────────────┴──────────────────┘
```

1. `Toolbar` — 3 батырма: Rect / Circle / Text қосады.
2. `Canvas` — объектілерді тізім ретінде көрсетеді (әзірге Fabric жоқ, жай `div`-тер, `position: absolute` болса — бонус).
3. Объектіні басқанда — ол **selected** болады (визуалды ерекшеленеді).
4. `PropertiesPanel` — таңдалған объектінің қасиеттерін көрсетеді. Ештеңе таңдалмаса — «Объект таңдалмаған».

## Қабылдау критерийлері
- [ ] Vite + React + TypeScript жобасы, `strict: true`, `any` жоқ
- [ ] Объект типі: `type ShapeType = 'rect' | 'circle' | 'text'` және `interface EditorObject { id; type; x; y; fill }`
- [ ] State **бір жерде** (`App`): `objects` және `selectedId` (`string | null`)
- [ ] `selectedObject` state-те **сақталмайды** — `objects` + `selectedId`-ден есептеледі (derived state)
- [ ] Әр компонентке Props типі жазылған (`ToolbarProps`, т.б.)
- [ ] Тізімде `key={obj.id}` (index емес), id бірегей
- [ ] State immutable жаңартылады (`push` жоқ)
- [ ] Conditional rendering: бос canvas және таңдалмаған panel жағдайлары

## Hints (керек болса ғана оқы)
<details><summary>Hint 1 — id қалай жасау</summary>

`crypto.randomUUID()` немесе `` `${type}-${Date.now()}` ``.
</details>

<details><summary>Hint 2 — неге selectedObject-ті state-ке салмаймыз</summary>

Екі state бір дерекке қарап тұрса — синхрон бұзылады (объект өзгерді, ал «selected копиясы» ескі). Angular-да да `selected$ = combineLatest(objects$, selectedId$)` деп шығарар едің — React-та бұл жай render ішіндегі `objects.find(...)`.
</details>

<details><summary>Hint 3 — Child → Parent</summary>

Angular `@Output() add = new EventEmitter<ShapeType>()` → React-та жай callback prop: `onAdd: (type: ShapeType) => void`.
</details>

## Тапсырған соң
«тексер» деп жаз — `code-review-middle` форматында review жасаймын.

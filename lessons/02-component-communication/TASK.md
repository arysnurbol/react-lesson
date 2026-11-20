# 02 — Компоненттер коммуникациясы: Layers + Properties + Layout

Бастапқы код: `editor/` (live coding нәтижесі). Барлығын осы жерде жаз.

## Мақсат
Sibling компоненттерді ортақ state арқылы байланыстыру, callback API-ді дұрыс жобалау, `children`/slot props арқылы composition.

## Не жасау керек
```
┌────────────────────────────────────────────────────┐
│ Toolbar: [+ Rect] [+ Circle] [+ Text]              │
├──────────────────────────────┬─────────────────────┤
│ Canvas                       │ Layers              │
│   ▭ Rectangle                │  ● Text      [🗑]   │ ← жоғарғы қабат бірінші
│        ● Circle  ← selected  │  ● Circle    [🗑]   │ ← selected (ерекшеленген)
│   T Text                     │  ● Rectangle [🗑]   │
│                              ├─────────────────────┤
│                              │ Properties  [Delete]│
│                              │ name:  [Circle    ] │
│                              │ x: [64]   y: [64]   │
│                              │ color: [■]          │
└──────────────────────────────┴─────────────────────┘
```

1. **`LayersPanel`** (жаңа sibling) — объектілер тізімі, **соңғы қосылған жоғарыда**. Жолды басу → объект таңдалады. Әр жолда 🗑 батырмасы → сол объектіні өшіреді (таңдалған болмаса да).
2. **Selection синхроны** — Canvas-та, Layers-те басқанда да үш компонент (Canvas, Layers, Properties) бірдей таңдалған объектіні көрсетеді.
3. **`PropertiesPanel`** — `name` (text), `x`, `y` (number) өрістері қосылады. Барлығы **controlled input**, барлығы бір `onChange(patch)` арқылы.
4. **`EditorLayout`** — slot props арқылы layout: `toolbar`, `canvas`, `sidebar`. Layout дерек туралы ештеңе білмейді (prop-тары тек `ReactNode`).

## Қабылдау критерийлері
- [ ] `strict: true`, `any` жоқ, `tsc -b` және `npm run lint` таза
- [ ] State тек `App`-та: `objects`, `selectedId`. Жаңа state қосылмаған (Layers-тің ретін **есептеп** шығар)
- [ ] `LayersPanel` пен `Canvas` бір `onSelect` арқылы `selectedId`-ті өзгертеді — sibling-тер бір-бірін білмейді
- [ ] Layers-тегі 🗑 басу объектіні **таңдамайды** (event қай жерде тоқтайды — ойлан)
- [ ] Callback-тар domain API: `onDelete(id: string)`, `onChange(patch)` — DOM event parent-ке берілмейді, `setObjects` child-қа берілмейді
- [ ] Кемінде бір **атаулы** handler қолмен типтелген: `handleXChange = (e: React.ChangeEvent<HTMLInputElement>) => ...`
- [ ] `x`/`y` бос немесе қате мән болғанда state-ке `NaN` жазылмайды
- [ ] `EditorLayout` slot props қолданады; prop drilling **≤ 3 деңгей** (`App → X → Y` — одан терең емес)
- [ ] Layers және Properties — `Panel` компонентін қайта қолданады
- [ ] Мутация жоқ (`reverse()` массивті мутациялайтынын ұмытпа)

## Бонус
- Properties-те **Duplicate** батырмасы (`actions` slot-ында): көшірме +20px ығысады және таңдалады.
- Layers-те **double click** → name-ді inline өзгерту (local state қай жерде тұруы керек?).

## Hints (керек болса ғана)
<details><summary>Hint 1 — тізімді керісінше көрсету</summary>

`objects.toReversed()` (ES2023) немесе `[...objects].reverse()`. Бұл — derived data, state емес.
</details>

<details><summary>Hint 2 — 🗑 басқанда жол неге таңдалып қалады</summary>

Click event жоғары қарай **bubble** болады: button → жолдың `div`-і. `e.stopPropagation()` — немесе басқа шешім: жолдың өзін емес, ішіндегі атауды `<button>` етіп жаса (accessibility үшін де жақсы).
</details>

<details><summary>Hint 3 — number input</summary>

`e.target.valueAsNumber` → бос болса `NaN`. `Number.isNaN(...)` тексер. Angular-дағы `type="number"` + `ngModel` автоматты түрлендіруі React-та жоқ.
</details>

<details><summary>Hint 4 — EditorLayout</summary>

```tsx
type EditorLayoutProps = { toolbar: ReactNode; canvas: ReactNode; sidebar: ReactNode };
```
`App` ішінде: `<EditorLayout toolbar={<Toolbar ... />} canvas={<Canvas ... />} sidebar={<>...</>} />`.
Сонда props `App`-тан тікелей компоненттерге барады — Layout арқылы өтпейді.
</details>

## Тапсырған соң
«тексер» деп жаз — `code-review-middle` форматында review жасаймын. Содан кейін Interview + English блоктары.

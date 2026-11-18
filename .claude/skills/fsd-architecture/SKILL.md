---
name: fsd-architecture
description: Feature-Sliced Design (FSD) архитектурасы бойынша React жобасын құру, slice/segment ашу және layer ережелерін тексеру. "FSD", "архитектура", "қай папкаға", "slice", "layer" дегенде немесе mini-design-studio құрылымын өзгерткенде қолдан.
---

# Feature-Sliced Design

Ресми құжат: https://feature-sliced.design/

## Layers (жоғарыдан төменге)
`app` → `pages` → `widgets` → `features` → `entities` → `shared`
(`processes` — deprecated, қолданба.)

**Негізгі ереже:** модуль тек өзінен **төмен** тұрған layer-лерден импорт жасай алады. Бір layer ішіндегі slice-тар бір-бірін импорттамайды (cross-import жоқ).
`app` және `shared` — slice-сыз, тікелей segment-терге бөлінеді.

## Segments (slice ішінде)
- `ui/` — компоненттер
- `model/` — state (RTK slice, selectors, types, hooks)
- `api/` — backend сұраулары (RTK Query endpoints)
- `lib/` — slice-қа тән көмекші функциялар
- `config/` — тұрақтылар

## Public API
Әр slice-тың `index.ts` файлы болады. Сырттан тек сол арқылы импорт: `import { AddTextButton } from '@/features/add-text'`.
Ішкі файлға тікелей импорт (`@/features/add-text/ui/Button`) — бұзушылық.

## Mini Design Studio үшін ұсынылған құрылым
```
src/
├── app/        providers/ (StoreProvider), styles/, store.ts
├── pages/      editor/
├── widgets/    editor-toolbar/, canvas-workspace/, properties-panel/, layers-panel/
├── features/   add-text/, add-shape/, add-image/, change-color/, undo-redo/, export-design/, save-load/
├── entities/   canvas-object/, design/
└── shared/     ui/, lib/ (fabric helpers), api/, config/
```

## Тексеру кезінде
1. Барлық `import`-тарды тексер: төменнен жоғарыға импорт жоқ па, cross-import жоқ па, public API айналып өтілмеген бе.
   Жылдам тексеру: `grep -rn "from '@/" src/<layer>` және layer-ді салыстыр.
2. Бизнес логика `ui/` ішінде емес, `model/`-де ме.
3. `shared` ішінде бизнес-домен (design, canvas object) жоқ па.
4. Нұсқа ретінде `@feature-sliced/steiger` линтерін ұсынуға болады (`npx steiger src`) — пайдаланушы келіссе ғана орнат.

Бұзушылықтарды `file:line — ереже — түзету жолы` форматында көрсет.

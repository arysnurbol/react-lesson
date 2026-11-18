---
name: code-review-middle
description: Оқушының React/TypeScript кодын Middle Frontend Developer деңгейіндегі code review форматында тексеру. Пайдаланушы "тексер", "review", "кодымды қара", "тапсырманы тапсырдым" дегенде қолдан.
---

# Middle-level Code Review

Оқушы — Angular-дан React-қа ауысып жатқан frontend engineer. Review нақты командадағыдай болсын: тура, нақты, құрметпен.

## Процесс
1. Тапсырманың қабылдау критерийлерін `LESSON_PLAN.md`-тен (немесе сабақ ішінен) тап.
2. Кодты толық оқы. Мүмкін болса іске қос: `npm run build`, `npx tsc --noEmit`, `npm run lint`, тест бар болса `npm test`.
3. Нәтижені төмендегі форматта бер.

## Тексерілетін аспектілер
- **Correctness**: баг, edge case, state mutation, stale closure, `useEffect` dependency қателері, race condition.
- **React идиомалары**: state қай жерде тұруы керек (lifting state up), derived state-ті state-ке салмау, `key` дұрыс па, қажетсіз `useEffect`.
- **TypeScript**: `any` жоқ, props/event типтері, discriminated union, generic-тер орынды ма.
- **Performance**: қажетсіз re-render, `memo`/`useCallback`/`useMemo` орынды ма (артық қолдану да қате).
- **Архитектура**: FSD ережелері (layer тәуелділігі, public API арқылы импорт) — `fsd-architecture` скиліне сүйен.
- **Angular әдеттері**: React-та жат паттерндер (service-singleton-ды жаппай қолдану, two-way binding еліктеу, т.б.).
- **Readability**: атаулар, компонент көлемі, бөлу.

## Шығару форматы (қазақша, терминдер ағылшынша)
```
## Қорытынды: ✅ Қабылданды / 🔁 Түзету керек
Баға: X/10 (Junior / Junior+ / Middle- / Middle)

### 🔴 Міндетті түзетулер
- file.tsx:LINE — мәселе → неге маңызды → қалай түзету (қысқа код)

### 🟡 Ұсыныстар
...

### 🟢 Жақсы жасалған
...

### Қабылдау критерийлері
- [x] ...
- [ ] ...

### Interview-ге байланысты сұрақ
(осы кодқа қатысты 1–2 сұрақ — сұхбатта сұралуы мүмкін)
```
Түзетуді оқушының өзі жасасын — толық қайта жазып берме, тек сұралса ғана.

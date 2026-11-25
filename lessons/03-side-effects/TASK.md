# 03 — Side effects: Users тізімі + Posts (loading / error / abort)

Бастапқы код: `users-app/` (live coding нәтижесі). Барлығын осы жерде жаз.
API: `https://jsonplaceholder.typicode.com` — `/users`, `/posts?userId=N`.

## Мақсат
`useEffect`-ті **синхрондау** ретінде қолдану: data fetching, cleanup, race condition-нан қорғау (`AbortController`), loading/error күйлерін дұрыс модельдеу. Сондай-ақ effect **керек емес** жерді ажырату.

## Не жасау керек
```
┌──────────────────────┬──────────────────────────────────┐
│ [🔍 search...      ] │ Leanne Graham                    │
│                      │ 📧 Sincere@april.biz             │
│ ● Leanne Graham  ←   │ ──────────────────────────────── │
│ ● Ervin Howell       │ Posts (10)                       │
│ ● Clementine Bauch   │  • sunt aut facere repellat...   │
│ ...                  │  • qui est esse                  │
│                      │  ...                             │
└──────────────────────┴──────────────────────────────────┘
 Loading → «Loading…»  ·  Error → хабарлама + [Retry]
```

1. **`UserList`** — `App`-тағы қолмен жазылған `USER_IDS` орнына `/users`-тен тізімді жүкте. Loading, error (+ **Retry** батырмасы), success күйлері болсын.
2. **Search** — input арқылы тізімді `name` бойынша фильтрле (case-insensitive).
3. **`UserPosts`** — таңдалған user-дің посттары (`/posts?userId=N`). User тез ауысқанда ескі жауап жаңасының үстіне **жазылмауы** керек.
4. **`document.title`** — `"<таңдалған user аты> · Users"` болсын, ал user таңдалмаса `"Users"`.

## Қабылдау критерийлері
- [ ] `strict: true`, `any` жоқ, `tsc -b` және `npm run lint` таза (`react-hooks/exhaustive-deps` ескертуі жоқ, `eslint-disable` жоқ)
- [ ] Fetch state — **discriminated union**: `{ status: 'loading' } | { status: 'error'; error: string } | { status: 'success'; data: T }`. `isLoading` + `error` + `data` деген үш бөлек `useState` болмасын
- [ ] Әр fetch effect-те `AbortController` бар: cleanup-та `abort()`, ал `AbortError` қате ретінде **көрсетілмейді**
- [ ] User-лерді тез ауыстырғанда (1→2→3→4) экранда **әрқашан** соңғы таңдалған user-дің посттары тұрады
- [ ] StrictMode-та әр fetch-тің біреуі **cancelled** болады (DevTools → Network-те көрінеді), UI қатесіз
- [ ] **Search үшін effect жоқ**: фильтрленген тізім render кезінде есептеледі (derived data)
- [ ] Retry жаңа state-ті **қолдан жасамайды**: effect-ті қайта іске қосатын мән өзгереді (қандай мән? ойлан)
- [ ] `api.ts`-тегі функциялар `signal: AbortSignal` қабылдайды, `res.ok` тексеріледі
- [ ] Effect callback `async` емес (async функцияны effect ішінде жариялап, шақыр)

## Бонус
- Search-ке **debounce** (300 ms) — `setTimeout` + cleanup арқылы, кітапханасыз. Бұл жерде effect керек пе, керек емес пе — неге?
- Error-ды тексеру үшін: `api.ts`-ке `?fail=1` URL параметрі болса, әдейі `throw` ететін логика қос.

## Hints (керек болса ғана)
<details><summary>Hint 1 — AbortController</summary>

```ts
useEffect(() => {
  const controller = new AbortController();
  // fetch(url, { signal: controller.signal }) ...
  return () => controller.abort();
}, [userId]);
```
Angular баламасы: `switchMap` ескі сұранысты өзі unsubscribe етеді. Мұнда cleanup дәл сол рөлді атқарады.
</details>

<details><summary>Hint 2 — AbortError-ды ажырату</summary>

`catch (e)` ішінде `e instanceof DOMException && e.name === 'AbortError'` болса, `return`. TS-те `e` типі — `unknown`, сондықтан алдымен тексеріп, сосын қолдан.
</details>

<details><summary>Hint 3 — Retry</summary>

`const [reloadKey, setReloadKey] = useState(0)` → deps-ке қос → Retry: `setReloadKey(k => k + 1)`.
</details>

<details><summary>Hint 4 — Union-ды render-де қолдану</summary>

```tsx
if (state.status === 'loading') return <p>Loading…</p>;
if (state.status === 'error') return <ErrorView message={state.error} onRetry={...} />;
// осы жерде TS state.data бар екенін біледі (narrowing)
```
</details>

## Тапсырған соң
«тексер» деп жаз, `code-review-middle` форматында review жасаймын. Содан кейін Interview + English блоктары.

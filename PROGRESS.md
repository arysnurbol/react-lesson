# Прогресс

| Күні | Сабақ | Статус | Әлсіз тұстар / ескертпе |
|---|---|---|---|
| 2026-11-18 | 01 — React Architecture, Virtual DOM, Components, Props, State | Теория өтілді (ChatGPT) | — |
| 2026-11-20 | 01 — тапсырма: мини-редактор UI қаңқасы (`lessons/01-react-basics/editor`) | ✅ Қабылданды, 8/10 (Middle-), 4 review итерациясы | Union типті қайталау; бір дерек екі өрісте (`color`/`fill`) → source of truth; `screenX` global-ын абайсыз қолдану (TS ұстамайды). Interview 1/6: batching (2 render деп ойлады, render/commit фазаларын шатастырды), index-key (сұрақты түсінбеді), globals (жартылай) |
| 2026-11-20 | 02 — Компоненттер коммуникациясы: теория + live coding (`lessons/02-component-communication/editor`) | ✅ Өтілді | Разминка: batching 8/10 (automatic batching 18+ айтылмады); index-key 3/10 — DOM node reuse механизмін түсіндіре алмады |
| 2026-11-24 | 02 — тапсырма: LayersPanel + Properties өрістері + EditorLayout | ✅ Қабылданды (көп итерация, PropertiesPanel/NumberField-ті ментор жазды — оқушы сұрады) | Props типін бір өрістің/элементтің типімен шатастыру (2 рет: `EditorObject`, `ReactNode`); Angular `(click)="f(x)"` әдеті → `onClick={f(x)}`; кодты дұрыс емес компонентке жазу (жауапкершілік); callback сигнатурасы parent/child арасында сәйкес келмеу (Vite типті тексермейді → `tsc` іске қоспайды); сұрақтарды өткізіп жібереді. Күшті жақтары: `stopPropagation`, `[...arr].reverse()`, NaN guard, `axis` union |
| 2026-11-24 | 02 — Interview | 22/60 (~3.7/10) | С1 controlled input 3, С2 data flow 7, С3 key reset 4, С4 prop drilling 2, С5 callback API (domain value vs DOM event) 2, С6 state colocation 4. Практикада қолданады, бірақ сөзбен «неге»-ні айта алмайды; жауаптар бір сөйлемге қысқарады → Не/Неге/Мысал құрылымын үйрету |

**Келесі қадам:** 02 English (10 термин берілді, 2–3 сөйлем жазу) → 03-сабақ (side effects). 03 басында index-key, prop drilling, callback API-ді қайта сұра.

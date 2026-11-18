---
name: fabric-editor
description: Fabric.js + React + TypeScript арқылы графикалық редактор (Mini Design Studio) жасау — canvas инициализация, объектілер, selection, React/Redux синхрондау, undo/redo, JSON save/load, PNG/SVG export. "Fabric", "canvas", "редактор", "Mini Design Studio" дегенде қолдан.
---

# Fabric.js Editor (React + TS)

Ресми құжат: https://fabricjs.com/ — v6+ қолдан (ES modules, TypeScript типтері ішінде). Ескі v5 API-ін (`new fabric.Canvas`, callback-ты `loadFromJSON`) ұсынба.

## Негізгі паттерндер
**1. Canvas-ты бір рет құру және тазалау**
```tsx
import { Canvas } from 'fabric';
import { useEffect, useRef } from 'react';

export function useFabricCanvas(width: number, height: number) {
  const elRef = useRef<HTMLCanvasElement>(null);
  const canvasRef = useRef<Canvas | null>(null);
  useEffect(() => {
    if (!elRef.current) return;
    const canvas = new Canvas(elRef.current, { width, height, preserveObjectStacking: true });
    canvasRef.current = canvas;
    return () => { void canvas.dispose(); canvasRef.current = null; };
  }, [width, height]);
  return { elRef, canvasRef };
}
```
StrictMode екі рет mount жасайды — `dispose()` cleanup міндетті.

**2. Source of truth.** Fabric объектілері mutable, Redux state immutable. Ұсыныс:
- Fabric — нақты canvas күйі; Redux-та тек UI-ға керегі: `selectedObjectId`, таңдалған объектінің serializable props (fill, fontSize, left, top...), `history`.
- Fabric event-тері (`selection:created`, `selection:updated`, `selection:cleared`, `object:modified`) → `dispatch`.
- Properties panel өзгерісі → Fabric объектісіне `obj.set({...}); canvas.requestRenderAll();` → `object:modified`.
- Fabric объектісін Redux-қа ешқашан салма (serializable емес).
- Әр объектіге тұрақты `id` бер (custom property; JSON-ға шығу үшін `toObject(['id'])`).

**3. Undo/Redo.** `object:added/modified/removed` кейін `canvas.toObject(['id'])` snapshot → `past/present/future` стек (лимит ~50). Undo кезінде `await canvas.loadFromJSON(json); canvas.requestRenderAll();` — жүктеу кезінде history-ге жазуды уақытша өшір (flag).

**4. Save/Load.** `JSON.stringify(canvas.toObject(['id']))` → localStorage; жүктеу — `await canvas.loadFromJSON(...)`.

**5. Export.** PNG: `canvas.toDataURL({ format: 'png', multiplier: 2 })`; SVG: `canvas.toSVG()`.

**6. Негізгі объектілер:** `Rect`, `Circle`, `Textbox` (өңделетін мәтін), `FabricImage.fromURL(url)` (async).

## Жиі қателер
- Әр render-де жаңа `Canvas` құру; event listener-ді `off` жасамау.
- Selection-ды React state-те ғана сақтап, Fabric-пен рассинхрон алу.
- `renderAll()`-ды цикл ішінде шақыру — `requestRenderAll()` қолдан.
- API-ге сенімсіз болсаң — орнатылған нұсқаның типтерін (`node_modules/fabric/dist/index.d.ts`) тексер.

Архитектуралық орналасу — `fsd-architecture` скилін қара (canvas хуктары `shared/lib/fabric`, объект типтері `entities/canvas-object`).

import { useState } from "react";

import { Toolbar } from "./components/Toolbar";
import { Canvas } from "./components/Canvas";
import { PropertiesPanel } from "./components/PropertiesPanel";

import type { EditorObject } from "./types/editor.types";

function App() {
  const [objects, setObjects] = useState<EditorObject[]>([]);

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedObject =
      objects.find(object => object.id === selectedId) ?? null;

  const addObject = (type: "rectangle" | "text" | "circle") => {
    const newObject: EditorObject = {
      id: crypto.randomUUID(),
      type,
      name: type === "rectangle" ? "Rectangle" : type === "circle" ? "circle" : "Text",
      color: "#3B82F6"
    };

    setObjects(prev => [...prev, newObject]);
    setSelectedId(newObject.id);
  };

  const deleteObject = () => {
    if (!selectedId) return;

    setObjects(prev =>
        prev.filter(object => object.id !== selectedId)
    );

    setSelectedId(null);
  };

  const changeColor = (color: string) => {
    setObjects(prev =>
        prev.map(object =>
            object.id === selectedId
                ? { ...object, color }
                : object
        )
    );
  };

  return (
      <div>
        <h1>MAXA Mini Editor</h1>

        <Toolbar onAdd={addObject} />

        <Canvas
            objects={objects}
            selectedId={selectedId}
            onSelect={setSelectedId}
        />

        <PropertiesPanel
            selectedObject={selectedObject}
            onChangeColor={changeColor}
            onDelete={deleteObject}
        />

        <p>Total objects: {objects.length}</p>
      </div>
  );
}

export default App;
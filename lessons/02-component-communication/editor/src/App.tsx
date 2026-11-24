import { useState } from "react";

import type { EditorObject, EditorObjectPatch, ObjectType } from "./types/editor.types";
import { Toolbar } from "./components/Toolbar";
import { EditorLayout } from "./components/EditorLayout";
import { Canvas } from "./components/Canvas";
import { LayersPanel } from "./components/LayersPanel";
import { PropertiesPanel } from "./components/PropertiesPanel";

const DEFAULT_NAMES: Record<ObjectType, string> = { rectangle: "Rectangle", circle: "Circle", text: "Text" };

function App() {
    const [objects, setObjects] = useState<EditorObject[]>([]);
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const selectedObject = objects.find(object => object.id === selectedId) ?? null;

    const addObject = (type: ObjectType) => {
        const offset = objects.length * 24;
        const newObject: EditorObject = {
            id: crypto.randomUUID(),
            type,
            name: DEFAULT_NAMES[type],
            color: "#3B82F6",
            x: 40 + offset,
            y: 40 + offset,
        };

        setObjects(prev => [...prev, newObject]);
        setSelectedId(newObject.id);
    };

    const updateObject = (id: string, patch: EditorObjectPatch) => {
        setObjects(prev => prev.map(object => (object.id === id ? { ...object, ...patch } : object)));
    };

    const deleteObject = (id: string) => {
        setObjects(prev => prev.filter(object => object.id !== id));
        setSelectedId(current => (current === id ? null : current));
    };

    return (
        <EditorLayout 
        toolbar={<Toolbar onAdd={addObject} />}
        canvas={
        <Canvas objects={objects} selectedId={selectedId} onSelect={setSelectedId}/>
    }
    sidebar={
        <>
        <LayersPanel 
            objects={objects} 
            selectedId={selectedId} 
            onSelect={setSelectedId}
            onDelete={deleteObject}
            />
            <PropertiesPanel
                selectedObject={selectedObject}
                onChange={patch => selectedObject && updateObject(selectedObject.id, patch)}
                onDelete={() => selectedObject && deleteObject(selectedObject.id)}
            />
        </>
            
    }
        />
    );
}

export default App;

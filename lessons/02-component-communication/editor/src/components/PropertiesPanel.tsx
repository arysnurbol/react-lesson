import type { EditorObject, EditorObjectPatch } from "../types/editor.types";
import { Panel } from "./Panel";
import type React from "react";

type PropertiesPanelProps = {
    selectedObject: EditorObject | null;
    onChange: (id: string, patch: EditorObjectPatch) => void;
    onDelete: () => void;
};

export function PropertiesPanel({ selectedObject, onChange, onDelete }: PropertiesPanelProps) {
    if (!selectedObject) {
        return (
            <Panel title="Properties">
                <p>Select an object</p>
            </Panel>
        );
    }

    const handlePositionChange = (id: string,
                                  e: React.ChangeEvent<HTMLInputElement>,
                                  axis: "x" | "y"
    ) => {
        const value = e.target.valueAsNumber;
        if (Number.isNaN(value)) return;

        onChange(id,{ [axis]: value });
    };

    return (
        <Panel
            title="Properties"
            actions={<button onClick={onDelete}>Delete</button>}
        >
            <p>id: {selectedObject.id.slice(0, 8)}</p>
            <p>type: {selectedObject.type}</p>
            <p>x: {selectedObject.x} y: {selectedObject.y}</p>

            <label>
                color{" "}
                <input
                    type="color"
                    value={selectedObject.color}
                    onChange={event => onChange(selectedObject.id, {color: event.target.value})}
                />
            </label>

            <input
                            type="text"
                            value={selectedObject.name}
                            onChange={event => onChange(selectedObject.id, {name: event.target.value})}
                        />

            <div style={{display: "flex", gap: "10px"}}>
                <label onClick={(e) => e.stopPropagation()}>
                    X:
                    <input
                        name="x"
                        type="number"
                        value={selectedObject.x}
                        onChange={(e) => handlePositionChange(selectedObject.id, e, "x")}
                    />
                </label>
            </div>
            <div style={{display: "flex", gap: "10px"}}>
                <label onClick={(e) => e.stopPropagation()}>
                    Y:
                    <input
                        type="number"
                        value={selectedObject.y}
                        onChange={(e) => handlePositionChange(selectedObject.id, e, "y")}
                    />
                </label>
            </div>
        </Panel>
    );
}

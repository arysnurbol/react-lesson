import type { EditorObject, EditorObjectPatch } from "../types/editor.types";
import { Panel } from "./Panel";

type PropertiesPanelProps = {
    selectedObject: EditorObject | null;
    onChange: (patch: EditorObjectPatch) => void;
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
                    onChange={event => onChange({ color: event.target.value })}
                />
            </label>
        </Panel>
    );
}

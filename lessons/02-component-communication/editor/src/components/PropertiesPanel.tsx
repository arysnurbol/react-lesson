import type { EditorObject, EditorObjectPatch } from "../types/editor.types";
import { Panel } from "./Panel";
import { NumberField } from "./NumberField";

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
            actions={<button type="button" onClick={onDelete}>Delete</button>}
        >
            <p>id: {selectedObject.id.slice(0, 8)}</p>
            <p>type: {selectedObject.type}</p>

            <div className="fields">
                <label>
                    name{" "}
                    <input
                        type="text"
                        value={selectedObject.name}
                        onChange={e => onChange({ name: e.target.value })}
                    />
                </label>

                <NumberField
                    key={`${selectedObject.id}-x`}
                    label="x"
                    value={selectedObject.x}
                    onChange={x => onChange({ x })}
                />
                <NumberField
                    key={`${selectedObject.id}-y`}
                    label="y"
                    value={selectedObject.y}
                    onChange={y => onChange({ y })}
                />

                <label>
                    color{" "}
                    <input
                        type="color"
                        value={selectedObject.color}
                        onChange={e => onChange({ color: e.target.value })}
                    />
                </label>
            </div>
        </Panel>
    );
}

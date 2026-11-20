import type { EditorObject } from "../types/editor.types";

type PropertiesPanelProps = {
    selectedObject: EditorObject | null;
    onChangeColor: (color: string) => void;
    onDelete: () => void;
};

export function PropertiesPanel({
                                    selectedObject,
                                    onChangeColor,
                                    onDelete
                                }: PropertiesPanelProps) {
    if (!selectedObject) {
        return <p>Select an object</p>;
    }

    return (
        <div>
            <h2>Properties</h2>

            <p>Selected object name: {selectedObject.name}</p>
            <p>x: {selectedObject.x} </p>
            <p>y: {selectedObject.y} </p>

            <input
                type="color"
                value={selectedObject.color}
                onChange={event => onChangeColor(event.target.value)}
            />

            <button onClick={onDelete}>
                Delete
            </button>
        </div>
    );
}
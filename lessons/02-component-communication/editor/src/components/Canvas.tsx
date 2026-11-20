import type { EditorObject } from "../types/editor.types";
import { CanvasObject } from "./CanvasObject";

type CanvasProps = {
    objects: EditorObject[];
    selectedId: string | null;
    onSelect: (id: string) => void;
};

export function Canvas({ objects, selectedId, onSelect }: CanvasProps) {
    return (
        <div className="canvas">
            {objects.length === 0 && <p style={{ padding: 12 }}>Please add object.</p>}

            {objects.map(object => (
                <CanvasObject
                    key={object.id}
                    object={object}
                    isSelected={object.id === selectedId}
                    onSelect={onSelect}
                />
            ))}
        </div>
    );
}

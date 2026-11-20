import type { EditorObject } from "../types/editor.types";

type CanvasProps = {
    objects: EditorObject[];
    selectedId: string | null;
    onSelect: (id: string) => void;
};

export function Canvas({
                           objects,
                           selectedId,
                           onSelect
                       }: CanvasProps) {
    return (
        <div>
            <h2>Canvas</h2>

            {objects.map(object => (
                <div
                    key={object.id}
                    onClick={() => onSelect(object.id)}
                    style={{
                        backgroundColor: object.color,
                        padding: "12px",
                        margin: "8px",
                        border: selectedId === object.id
                            ? "3px solid black"
                            : "1px solid gray",
                        cursor: "pointer"
                    }}
                >
                    Object name: {object.name}
                </div>
            ))}
        </div>
    );
}
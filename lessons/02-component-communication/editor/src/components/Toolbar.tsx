import type {ObjectType} from "../types/editor.types.ts";

type ToolbarProps = {
    onAdd: (type: ObjectType) => void;
};

export function Toolbar({ onAdd }: ToolbarProps) {
    return (
        <div className="toolbar">
            <button onClick={() => onAdd("rectangle")}>
                Add Rectangle
            </button>

            <button onClick={() => onAdd("circle")}>Add circle</button>

            <button onClick={() => onAdd("text")}>
                Add Text
            </button>
        </div>
    );
}
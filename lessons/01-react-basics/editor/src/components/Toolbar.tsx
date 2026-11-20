type ToolbarProps = {
    onAdd: (type: "rectangle" | "text" | "circle") => void;
};

export function Toolbar({ onAdd }: ToolbarProps) {
    return (
        <div>
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
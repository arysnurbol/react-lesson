import type { CSSProperties } from "react";
import type { EditorObject } from "../types/editor.types";

type CanvasObjectProps = {
    object: EditorObject;
    isSelected: boolean;
    onSelect: (id: string) => void;
};

export function CanvasObject({ object, isSelected, onSelect }: CanvasObjectProps) {
    const style: CSSProperties = {
        position: "absolute",
        left: object.x,
        top: object.y,
        width: 80,
        height: object.type === "text" ? "auto" : 80,
        borderRadius: object.type === "circle" ? "50%" : 0,
        backgroundColor: object.type === "text" ? "transparent" : object.color,
        color: object.type === "text" ? object.color : "#fff",
        outline: isSelected ? "2px solid #111" : "none",
        outlineOffset: 2,
        cursor: "pointer",
        display: "grid",
        placeItems: "center",
        fontSize: 12,
    };

    return (
        <div style={style} onClick={() => onSelect(object.id)}>
            {object.name}
        </div>
    );
}

import type React from "react";
import {Panel} from "./Panel";
import type {EditorObject, EditorObjectPatch} from "../types/editor.types.ts";

type LayerPanelProps = {
    objects: EditorObject[];
    selectedId: string | null;
    onSelect: (id: string) => void;
    onDelete: (id: string) => void;
    onChange: (id: string, patch: EditorObjectPatch) => void;
}

export function LayersPanel({objects, selectedId, onSelect, onDelete, onChange}: LayerPanelProps) {
    const layers = [...objects].reverse();

    const handlePositionChange = (id,
        e: React.ChangeEvent<HTMLInputElement>,
        axis: "x" | "y"
    ) => {
        const value = e.target.valueAsNumber;
        if (Number.isNaN(value)) return;

        onChange(id,{ [axis]: value });
    };

    return (
        <Panel title="Layers">

            {layers.map((item) => {
                return (
                    <div key={item.id}
                         onClick={() => onSelect(item.id)}
                         style={{fontWeight: item.id === selectedId ? "bold" : "normal"}}
                         className="layer-item">
                        <div style={{display: "flex", gap: "10px"}}>
                            <p>{item.name}</p>
                            <button type={"button"}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onDelete(item.id);
                                    }}>Delete
                            </button>
                        </div>

                        <input
                            type="text"
                            value={item.name}
                            onChange={event => onChange(item.id, {name: event.target.value})}
                        />
                        <div style={{display: "flex", gap: "10px"}}>
                            <label onClick={(e) => e.stopPropagation()}>
                                X:
                                <input
                                    name="x"
                                    type="number"
                                    value={item.x}
                                    onChange={(e) => handlePositionChange(item.id, e, "x")}
                                />
                            </label>
                        </div>
                        <div style={{display: "flex", gap: "10px"}}>
                            <label onClick={(e) => e.stopPropagation()}>
                                Y:
                                <input
                                    type="number"
                                    value={item.y}
                                    onChange={(e) => handlePositionChange(item.id, e, "y")}
                                />
                            </label>
                        </div>
                    </div>
                )
            })}
        </Panel>
    )
}
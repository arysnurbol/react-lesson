import {Panel} from "./Panel";
import type {EditorObject} from "../types/editor.types.ts";

type LayerPanelProps = {
    objects: EditorObject[];
    selectedId: string | null;
    onSelect: (id: string) => void;
    onDelete: (id: string) => void;
}

export function LayersPanel({objects, selectedId, onSelect, onDelete}: LayerPanelProps) {
    const layers = [...objects].reverse();
    return (
        <Panel title="Layers">

            {layers.map((item) => {
                return (
                    <div key={item.id}
                         onClick={() => onSelect(item.id)}
                         style={{fontWeight: item.id === selectedId ? "bold" : "normal"}}
                        className="layer-item">
                        <p>{item.name}</p>
                        <button type={"button"} 
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete(item.id);
                            }}>Delete</button>
                    </div>
                )
            })}
        </Panel>
    )
}
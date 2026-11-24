import { Panel } from "./Panel";
import type { EditorObject } from "../types/editor.types";

type LayersPanelProps = {
    objects: EditorObject[];
    selectedId: string | null;
    onSelect: (id: string) => void;
    onDelete: (id: string) => void;
};

export function LayersPanel({ objects, selectedId, onSelect, onDelete }: LayersPanelProps) {
    // Derived data: соңғы қосылған (ең үстіңгі қабат) — бірінші. State мутацияланбайды.
    const layers = [...objects].reverse();

    return (
        <Panel title="Layers">
            {layers.map(item => (
                <div
                    key={item.id}
                    className="layer-item"
                    onClick={() => onSelect(item.id)}
                    style={{ fontWeight: item.id === selectedId ? "bold" : "normal" }}
                >
                    <span>{item.name}</span>
                    <button
                        type="button"
                        onClick={e => {
                            e.stopPropagation(); // жолдың onClick-іне bubble болмасын
                            onDelete(item.id);
                        }}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </Panel>
    );
}

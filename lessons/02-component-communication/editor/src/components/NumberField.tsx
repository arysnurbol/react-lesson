import { useState, type ChangeEvent } from "react";

type NumberFieldProps = {
    label: string;
    value: number;
    onChange: (value: number) => void;
};

// Input-тың уақытша мәтіні (draft) local state-те тұрады, сондықтан өрісті бос қалдыруға болады.
// App-қа тек дұрыс сан жіберіледі. Басқа объект таңдалғанда parent `key` арқылы бұл компонентті қайта жасайды.
export function NumberField({ label, value, onChange }: NumberFieldProps) {
    const [draft, setDraft] = useState(String(value));

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDraft(e.target.value);

        const next = e.target.valueAsNumber;
        if (!Number.isNaN(next)) onChange(next);
    };

    // Өрісті бос қалдырып шықса — соңғы дұрыс мәнді қайта көрсетеміз.
    const handleBlur = () => setDraft(String(value));

    return (
        <label>
            {label}{" "}
            <input type="number" value={draft} onChange={handleChange} onBlur={handleBlur} />
        </label>
    );
}

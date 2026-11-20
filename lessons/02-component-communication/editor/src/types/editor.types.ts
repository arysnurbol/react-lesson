export type ObjectType = "rectangle" | "text" | "circle";

export type EditorObject = {
    id: string;
    type: ObjectType;
    name: string;
    color: string;
    x: number;
    y: number;
};

export type EditorObjectPatch = Partial<Omit<EditorObject, "id" | "type">>;

export type ObjectType = "rectangle" | "text" | "circle";

export type EditorObject = {
    id: string;
    type: ObjectType;
    name: string;
    color: string;
};
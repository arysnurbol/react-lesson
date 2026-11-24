import type { ReactNode } from "react";

type EditorLayoutProps = {
    toolbar: ReactNode;
    canvas: ReactNode;
    sidebar: ReactNode;
}

export function EditorLayout({toolbar, canvas, sidebar}: EditorLayoutProps){
    return (
        <div className="editor">
            {toolbar}
            {canvas}
            <div className="sidebar">
                {sidebar}
            </div>
        </div>
    );
};

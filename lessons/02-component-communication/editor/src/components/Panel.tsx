import type { ReactNode } from "react";

type PanelProps = {
    title: string;
    actions?: ReactNode;
    children: ReactNode;
};

export function Panel({ title, actions, children }: PanelProps) {
    return (
        <section className="panel">
            <header className="panel__header">
                <h2 className="panel__title">{title}</h2>
                {actions}
            </header>
            {children}
        </section>
    );
}

import { SyntheticEvent, useState } from 'react';
import { iTask } from '../../../models/task';

export function Add({ handleAdd }: { handleAdd(task: iTask): void }) {
    const initialState: Partial<iTask> = { title: '', responsible: '' };
    const [formState, setFormState] = useState(initialState);

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleAdd({
            title: formState.title as string,
            responsible: formState.responsible as string,
            isCompleted: false,
        });
    };

    const handleChange = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormState({ ...formState, [element.name]: element.value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={formState.title}
                onChange={handleChange}
                placeholder="Describe la tarea"
                required
            />
            <input
                type="text"
                name="responsible"
                value={formState.responsible}
                onChange={handleChange}
                placeholder="Responsable de la tarea"
                required
            />
            <button type="submit">Guardar</button>
        </form>
    );
}

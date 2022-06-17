import { SyntheticEvent, useState } from 'react';
import { iTask, Task } from '../../../models/task';

export function Add() {
    const initialState: Partial<iTask> = { title: '', responsible: '' };
    const [formState, setFormState] = useState(initialState);

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        const task = new Task(
            formState.title as string,
            formState.responsible as string
        );
        console.log(task);
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
            />
            <input
                type="text"
                name="responsible"
                value={formState.responsible}
                onChange={handleChange}
                placeholder="Responsable de la tarea"
            />
            <button type="submit">Guardar</button>
        </form>
    );
}

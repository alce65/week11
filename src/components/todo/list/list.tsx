import { useEffect, useState } from 'react';
import { iTask } from '../../../models/task';
import { getTasks } from '../../../services/mock.api';
import { Add } from '../add/add';
import { Task } from '../task/task';

export function List() {
    // Model
    const initialState: Array<iTask> = [];
    const [tasks, setTasks] = useState(initialState);
    const [loading, setLoading] = useState(false);

    // Controller

    useEffect(() => {
        setLoading(true);
        getTasks().then((data) => {
            setTasks(data);
            setLoading(false);
        });
    }, []);

    const handleDelete = (id: number) => {
        setTasks(tasks.filter((item) => item.id !== id));
    };

    const handleComplete = (id: number) => {
        setTasks(
            tasks.map((item) =>
                item.id === id
                    ? { ...item, isCompleted: !item.isCompleted }
                    : item
            )
        );
    };

    return (
        // View
        <>
            <p>List</p>
            <Add></Add>
            {loading && <p>Loading</p>}
            <ul>
                {tasks.map((item) => (
                    <li key={item.id}>
                        <Task
                            task={item}
                            handleDelete={handleDelete}
                            handleComplete={handleComplete}
                        ></Task>
                    </li>
                ))}
            </ul>
        </>
    );
}

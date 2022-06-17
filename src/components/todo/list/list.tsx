import { useEffect, useState } from 'react';
import { iTask } from '../../../models/task';
import { getTasks } from '../../../services/mock.api';
import { Add } from '../add/add';
import { Task } from '../task/task';

export function List() {
    // Model
    const initialState: Array<iTask> = [];
    const [tasks, setTasks] = useState(initialState);

    // Controller

    useEffect(() => {
        getTasks().then((data) => setTasks(data));
    }, []);

    return (
        // View
        <>
            <p>List</p>
            <Add></Add>
            {tasks.length === 0 && <p>Loading</p>}
            <ul>
                {tasks.map((item) => (
                    <li key={item.id}>
                        <Task></Task>
                    </li>
                ))}
            </ul>
        </>
    );
}

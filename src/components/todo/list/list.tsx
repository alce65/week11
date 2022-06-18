import { useEffect, useState } from 'react';
import { iTask } from '../../../models/task';
import * as api from '../../../services/http-tasks';
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
        api.getAllTasks().then((data) => {
            setTasks(data);
            setLoading(false);
        });
    }, []);

    const handleAdd = (task: iTask) => {
        // Backend
        api.addTask(task).then((data) =>
            // estado
            setTasks([...tasks, data])
        );
    };

    const handleDelete = (id: number) => {
        api.deleteTask(id).then((resp) => {
            if (resp.ok) {
                setTasks(tasks.filter((item) => item.id !== id));
            }
        });
    };

    const handleComplete = (task: iTask) => {
        task.isCompleted = !task.isCompleted;
        api.updateTask(task).then((data) =>
            setTasks(tasks.map((item) => (item.id === task.id ? data : item)))
        );
    };

    return (
        // View
        <>
            <p>List</p>
            <Add handleAdd={handleAdd}></Add>
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

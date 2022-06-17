import { iTask } from '../../../models/task';

export function Task({
    task,
    handleDelete,
    handleComplete,
}: {
    task: iTask;
    handleDelete(id: number): void;
    handleComplete(id: number): void;
}) {
    const handleClick = () => {
        handleDelete(task.id);
    };
    const handleChange = () => {
        handleComplete(task.id);
    };
    return (
        <>
            <span>
                <input
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={handleChange}
                />
            </span>
            <span>{task.title}</span>
            <span> | </span>
            <span>{task.responsible}</span>
            <span role="button" className="button" onClick={handleClick}>
                🗑️
            </span>
        </>
    );
}

import { iTask } from '../../../models/task';

export function Task({
    task,
    handleDelete,
    handleComplete,
}: {
    task: iTask;
    handleDelete(id: number): void;
    handleComplete(task: iTask): void;
}) {
    const handleClick = () => {
        handleDelete(task.id as number);
    };
    const handleChange = () => {
        handleComplete(task);
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

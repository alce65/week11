export interface iTask {
    id: number;
    title: string;
    responsible: string;
    isCompleted: boolean;
}

export class Task implements iTask {
    id: number;
    isCompleted: boolean;
    static generateId() {
        return Math.floor(Math.random() * 100_000);
    }
    constructor(public title: string, public responsible: string) {
        this.id = Task.generateId();
        this.isCompleted = false;
    }
}

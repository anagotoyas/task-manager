export interface DashboardData {
    tasks: Task[];
}

export interface Task {
    id: string;
    name: string;
    assignee: Assignee;
    tags: string[];
    status: string;
    dueDate: string;
    position: number;
    pointEstimate: string;
}
export interface Assignee {
    id: string;
    avatar: string;
    fullName: string;
}
export interface User {
    id: string;
    avatar: string | null;
    fullName: string;
}


export interface GetTasksQuery {
    tasks: Task[];
}

export interface CreateTaskMutation {
    createTask: Task;
}

export interface DeleteTaskMutation {
    deleteTask: Task;
}
export interface UpdateTaskMutation {
    updateTask: Task;
}

export interface DeleteTaskInput {
    id: string;
}

export interface CreateTaskInput {
    name: string;
    assigneeId: string | undefined  ;
    tags: string[];
    status: string;
    dueDate: string | undefined;
    pointEstimate: string | undefined;
}

export interface UpdateTaskInput {
    id: string;
    name: string | undefined;
    assigneeId: string | undefined;
    tags: string[] | undefined;
    status: string | undefined;
    dueDate: string | undefined;
    pointEstimate: string | undefined  ;
}

export interface GetAllTasksQuery {
    tasks: Task[];
}


export interface TaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    initialData?: {
        id: string;
        title: string;
        pointValue: string  ;  
        user: User,
        tagsSelected: string[];
        dateSelected: string | null;
        status: string | null;
    };
}

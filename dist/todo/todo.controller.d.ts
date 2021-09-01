import { TodoService } from './todo.service';
import { Prisma, Todo } from '.prisma/client';
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    getAll(): Promise<Todo[]>;
    get(id: number): Promise<Todo>;
    createTodo(data: Prisma.TodoCreateInput): Promise<Todo>;
    updateTodo(id: number, data: Prisma.TodoUpdateInput): Promise<Todo>;
    deleteTodo(id: number): Promise<Todo>;
}

import { Todo, Prisma } from '.prisma/client';
import { PrismaService } from './prisma.service';
export declare class TodoService {
    private prisma;
    constructor(prisma: PrismaService);
    get(id: any): Promise<Todo>;
    getAll(): Promise<Todo[]>;
    createTodo(data: Prisma.TodoCreateInput): Promise<Todo>;
    updateTodo(id: number, data: Prisma.TodoUpdateInput): Promise<Todo>;
    deleteTodo(id: any): Promise<Todo>;
}

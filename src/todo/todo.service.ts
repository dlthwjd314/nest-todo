import { Injectable } from '@nestjs/common';
import { Todo, Prisma } from '.prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async get(id): Promise<Todo> {
    return await this.prisma.todo.findUnique({
      where: { id },
    });
  }

  async getAll(): Promise<Todo[]> {
    return await this.prisma.todo.findMany();
  }

  async createTodo(data: Prisma.TodoCreateInput): Promise<Todo> {
    return await this.prisma.todo.create({
      data,
    });
  }

  async updateTodo(id: number, data: Prisma.TodoUpdateInput): Promise<Todo> {
    return await this.prisma.todo.update({
      where: { id },
      data,
    });
  }

  async deleteTodo(id): Promise<Todo> {
    return await this.prisma.todo.delete({
      where: { id },
    });
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Prisma, Todo } from '.prisma/client';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  async getAll(): Promise<Todo[]> {
    return await this.todoService.getAll();
  }

  @Get('/:id')
  async get(@Param('id') id: number): Promise<Todo> {
    return await this.todoService.get(Number(id));
  }

  @Post()
  async createTodo(@Body() data: Prisma.TodoCreateInput): Promise<Todo> {
    return await this.todoService.createTodo(data);
  }

  @Put('/:id')
  async updateTodo(
    @Param('id') id: number,
    @Body() data: Prisma.TodoUpdateInput,
  ): Promise<Todo> {
    return await this.todoService.updateTodo(Number(id), data);
  }

  @Delete('/:id')
  async deleteTodo(@Param('id') id: number): Promise<Todo> {
    //return await this.todoService.deleteTodo({ id });
    return await this.todoService.deleteTodo(Number(id));
  }
}

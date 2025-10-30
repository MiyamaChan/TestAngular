import { Injectable } from '@angular/core';
import { Task } from '../interface/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [
    { id: 1, content: 'I will wake up at 8 in the morning', createAt: new Date() },
    { id: 2, content: 'I will practice html for 1 hour', createAt: new Date() },
    { id: 3, content: 'I will give time for 2 hours css', createAt: new Date() },
    { id: 4, content: 'Then I will have breakfast', createAt: new Date() },
  ];

  getTasks() {
    return this.tasks;
  }
  addTask(task: string) {
    const newTask = {
      id: this.tasks.length + 1,
      content: task,
      createAt: new Date(),
    };
    this.tasks.push(newTask);
  }
  deleteTask(id: number) {
    this.tasks = this.tasks.filter((item) => item.id !== id);
  }
}

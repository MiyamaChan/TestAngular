import { Component, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task';
import { Task } from '../../interface/task.interface';

@Component({
  selector: 'app-to-do',
  imports: [DatePipe, FormsModule],
  templateUrl: './to-do.html',
  styleUrl: './to-do.css',
})
export class ToDo {
  taskTitle = signal('ToDo List');
  tasks: Task[] = [];
  newToDo = '';

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  addTask() {
    if (this.newToDo.trim() !== '') {
      this.taskService.addTask(this.newToDo);
      this.newToDo = '';
    }
  }
  deleteTask(id: number) {
    this.taskService.deleteTask(id);
    this.ngOnInit();
  }
}

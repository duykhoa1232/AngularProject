import { Component, Input, inject } from '@angular/core';
import { type Task } from './task.model';
import { TasksService } from '../tasks.service';
import { DatePipe } from '@angular/common';
import { CardComponent } from '../../shard/card/card.component';

@Component({

  selector: 'app-task',   standalone: true, // ← Thêm dòng này

  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  imports: [CardComponent, DatePipe], // ← Thêm dòng này
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}


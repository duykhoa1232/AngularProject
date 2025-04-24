import { TasksService } from './../tasks.service';
import { Component,   Output,EventEmitter, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { title } from 'process';
@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Input({required:true}) userId!:string;
  @Output() close = new EventEmitter<void>();
  @Output() add=new EventEmitter<NewTaskData>();


  EnteredTitle = '';
  EnteredSummary = '';
  EnteredDate = '';
 private TasksService=inject(TasksService);

  onCancel(){
    this.close.emit();
  }
  onSubmit(){
   this.TasksService.addTask({
    title: this.EnteredTitle,
    summary: this.EnteredSummary,
    date: this.EnteredDate
   },this.userId);
    this.close.emit();
  }

}

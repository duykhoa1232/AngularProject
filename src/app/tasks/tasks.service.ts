import { type NewTaskData } from './task/task.model';
import { Injectable } from '@angular/core';
@Injectable({providedIn:'root'})
export class TasksService {
  private tasks=[
    {
    id: "1",
    UserId: "u1",
    title: "Master Angular",
    description: "Description of Task 1",
   dueDate: new Date("2023-10-01"),
  },
  {
    id: "2",
    UserId: "u2",
    title: "Master Angular",
    description: "Description of Task 1",
   dueDate: new Date("2023-10-01"),
  },
  {
    id: "3",
    UserId: "u3",
    title: "Master Angular",
    description: "Description of Task 1",
   dueDate: new Date("2023-10-01"),
  },
];
constructor() {
  const tasks=localStorage.getItem('tasks');
  if(tasks){
    this.tasks=JSON.parse(tasks);
  }

}

getUserTasks(userId:string){
  return  this.tasks.filter((task) => task.UserId === userId );
}
addTask(taskData: NewTaskData, userId: string) {
  this.tasks.unshift({
    id: new Date().getTime().toString(),
    UserId: userId,
    title: taskData.title,
    description: taskData.summary, // ✅ đổi lại cho đúng tên
    dueDate: new Date(taskData.date) // ✅ ép kiểu về Date
  });
  this.SaveLocalStorage();
}
  removeTask(id: string) {
    this.tasks=this.tasks.filter((task) => task.id !== id);
   this.SaveLocalStorage();
  }
  private SaveLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}

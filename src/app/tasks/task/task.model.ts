export interface Task {
  id: string;
  UserId: string;
  title: string;
  description: string;
  dueDate: Date;
}
export interface NewTaskData{
  title:string;
  summary:string;
  date:string;
}

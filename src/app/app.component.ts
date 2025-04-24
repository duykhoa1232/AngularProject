import { User } from './user/user.model';
// src/app/app.component.ts
import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent,UserComponent,TasksComponent], // Add your components here
  // imports: [HeaderComponent, UserComponent, TasksComponent, CardComponent], // Add your components here
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get SelectedUser() {
return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}

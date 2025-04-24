import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';

@Component({
  selector: 'app-user',

  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) selected!: boolean;
  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter();
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  //  selectUser=signal(DUMMY_USERS[MathRamdom]);
  //  imagePath= computed(() => 'assets/users/' + this.selectUser().avatar);
  // //  get imagePath(){
  // //   return 'assets/users/' + this.selectUser.avatar;
  // //  }
  //   SelectOnClick(){
  //     const MathRamdom =Math.floor(DUMMY_USERS.length * Math.random())
  //     this.selectUser.set(DUMMY_USERS[MathRamdom]);

  //  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }

}

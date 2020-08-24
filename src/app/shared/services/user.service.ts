import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users : BehaviorSubject<string[]> = new BehaviorSubject<string[]>(['Mounir']);

  //public user: BehaviorSubject<string> = new BehaviorSubject(this.users.value[0]);

  constructor() { }

  addUser(user : string) : void {
    this.users.next(this.users.getValue().concat([user]));
  }
}

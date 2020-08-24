import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users : BehaviorSubject<string[]> = new BehaviorSubject<string[]>(['Mounir']);

  constructor() { }

  addUser(user : string) : void {
    this.users.next(this.users.getValue().concat([user]));
  }
}

import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uid = of('123');
  isAdmin = of(true);

  constructor(
    private adAuth: AngularFireAuth
  ) { }

  login() {

  }

  Logout() {
    
  }
  
}

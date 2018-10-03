import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  //uid = of('123');
  uid = this.authenticator.authState.pipe(
    map(authState => {
      if (authState) {
        return authState.uid;
      } else {
        return null;
      }
    })
  );
  isAdmin = of(true);

  constructor(
    private authenticator: AngularFireAuth
  ) { }

  login() {
    this.authenticator.auth.signInWithPopup( new auth.GoogleAuthProvider() );
  }

  logout() {
    this.authenticator.auth.signOut();
  }
  
}

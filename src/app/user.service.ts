import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';


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

  //isAdmin = of(true);
  isAdmin: Observable<boolean> = this.uid.pipe(
    switchMap(uid => {
      if (uid) {
        return this.db.object<boolean>('/admin/' + uid).valueChanges();
      } else {
        return of(false);
      }
    })
  );

  constructor(
    private authenticator: AngularFireAuth,
    private db: AngularFireDatabase
  ) { }

  login() {
    this.authenticator.auth.signInWithPopup( new auth.GoogleAuthProvider() );
  }

  logout() {
    this.authenticator.auth.signOut();
  }
  
}

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBAuDbtqVgVC_n_RexpwtYJ6tnDFyUn55M",
    authDomain: "fir-users-auth.firebaseapp.com",
    databaseURL: "https://fir-users-auth.firebaseio.com",
    projectId: "fir-users-auth",
    storageBucket: "fir-users-auth.appspot.com",
    messagingSenderId: "534446412273"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

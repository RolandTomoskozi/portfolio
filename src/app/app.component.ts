import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import firebase from "firebase/compat";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'portfolio';

  testText$ : Observable<any>;

  public constructor(protected http: HttpClient) {
    const headers = new HttpHeaders({
      Accept: 'application/vnd.github.v3+json'
    });
    this.testText$ = this.http.get('https://api.github.com/users/RolandTomoskozi/repos', {headers})
  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyB_eJw2HxmSLSIwSDH9FjmwqffadFMxoU8",
      authDomain: "portfolio-bd11d.firebaseapp.com",
      projectId: "portfolio-bd11d",
      storageBucket: "portfolio-bd11d.appspot.com",
      messagingSenderId: "679069574719",
      appId: "1:679069574719:web:e04ad3b6d7608080663a8a",
      measurementId: "G-GLQHLW16FL"
    });
  }
}

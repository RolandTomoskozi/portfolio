import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

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



  }
}

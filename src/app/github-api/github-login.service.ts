import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch'

import { GithubUser } from './github-user.model';
import { GITHUB_API } from '../app.api'
import { ErrorHandler } from './github.error-handler';

@Injectable()
export class GithubLoginService  {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) :  Observable<GithubUser> {
    const auth = btoa(email + ":" + password)
    const myHeaders =  {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Basic ' + auth
    }

    return this.http.get<GithubUser>(GITHUB_API + '/user', {headers: myHeaders} )
      .catch(ErrorHandler.handleError)
  }

  getFolowers(user: GithubUser) :  Observable<GithubUser[]> {
    return this.http.get<GithubUser[]>(user.followers_url)
  }
}

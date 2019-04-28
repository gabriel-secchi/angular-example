import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { GithubUser } from '../github-api/github-user.model';
import { GithubLoginService } from '../github-api/github-login.service';

@Component({
  selector: 'comp-api-connect',
  templateUrl: './api-connect.component.html',
  styleUrls: ['./api-connect.component.css']
})
export class ApiConnectComponent implements OnInit {

  @ViewChild('email') email: ElementRef;
  @ViewChild('password') password: ElementRef;

  githubUser: GithubUser
  githubUserFollowers: GithubUser[]

  constructor(private githubLoginService: GithubLoginService) { }

  ngOnInit() {
  }

  githubLogin() {
    this.githubLoginService.login(this.email.nativeElement.value, this.password.nativeElement.value)
      .subscribe(githubUser => {
        this.githubUser = githubUser

        this.githubLoginService.getFolowers(githubUser).subscribe(followers => this.githubUserFollowers = followers)

      })
  }
}

import { Component, OnInit, Input } from '@angular/core';

import { GithubUser } from '../github-user.model';

@Component({
  selector: 'comp-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {

  @Input() user : GithubUser

  constructor() { }

  ngOnInit() {
  }

}

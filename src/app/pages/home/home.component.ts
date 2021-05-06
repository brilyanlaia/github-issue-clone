import { Component, OnInit } from '@angular/core';
import { GithubService } from '@shared/services';
import { PageTable } from '../../shared/models/pageTable';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  repoData: any = [];
  issueCount = null;

  constructor(private githubSrv: GithubService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.githubSrv.getData().subscribe((res) => {
      this.repoData = res;
      this.issueCount = this.repoData.open_issues_count;
      console.log('result', res);
    });
  }
}

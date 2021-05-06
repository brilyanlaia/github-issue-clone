import { Component, Input, OnInit } from '@angular/core';
import { GithubService } from '@shared/services/github.service';
import { PageTable } from '../../models/pageTable';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent implements OnInit {
  @Input() count = null;
  repoData: any = [];
  searchFilter = '';
  detail = false;
  detailData: any = [];

  page = new PageTable();

  constructor(private githubSrv: GithubService) {
    this.page.pageNumber = 0;

    // row size
    this.page.size = 10;
  }

  ngOnInit(): void {
    this.page.totalElements = this.count;
    console.log('count', this.count);
    this.getData();
  }

  getData(pageInfo = { offset: 0 }) {
    this.page.pageNumber = pageInfo.offset + 1;

    this.githubSrv.getDataList({ page: this.page.pageNumber, per_page: this.page.size }).subscribe((res) => {
      this.repoData = res;
      console.log('list', res);
    });
  }

  rowClicked(event) {
    if (event.type === 'click') {
      this.detail = true;
      this.getDetail(event.row.number);
      console.log('event', event);
    }
  }

  search(pageInfo = { offset: 0 }) {
    this.detail = false;

    this.page.pageNumber = pageInfo.offset + 1;

    this.githubSrv
      .getSearchList(this.searchFilter, { page: this.page.pageNumber, per_page: this.page.size })
      .subscribe((res) => {
        this.repoData = res.items;
        this.page.totalElements = this.repoData.length;

        this.page.totalElements = this.repoData.total_count;
        console.log('list', res);
      });
  }

  getByLabel(label, pageInfo = { offset: 0 }) {
    this.detail = false;
    const filter = {
      labels: label,
    };

    this.page.pageNumber = pageInfo.offset + 1;

    this.githubSrv
      .getDataList({ page: this.page.pageNumber, per_page: this.page.size }, null, filter)
      .subscribe((res) => {
        this.repoData = res;
        this.page.totalElements = this.repoData.length;

        console.log('list', res);
        this.searchFilter = label;
      });
  }

  clearFilter() {
    this.searchFilter = '';
    this.getData();
  }

  getDetail(id) {
    this.githubSrv.getDetails(id).subscribe((res) => {
      this.detailData = res;
    });
  }
}

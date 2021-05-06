import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { DatatableModule } from '../../shared/common/datatable/datatable.module';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: ':id',
    component: IssueDetailComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, IssueDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes), DatatableModule],
})
export class HomeModule {}

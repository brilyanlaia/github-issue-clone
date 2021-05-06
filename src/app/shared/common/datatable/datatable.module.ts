import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DatatableComponent],
  imports: [CommonModule, NgxDatatableModule, FormsModule],
  exports: [DatatableComponent],
})
export class DatatableModule {}

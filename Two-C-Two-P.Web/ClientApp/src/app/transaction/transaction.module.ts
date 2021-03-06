import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TransactionRoutingModule } from "./transaction-routing.module";

import { TransactionComponent } from './transaction.component';
import { ViewComponent } from './view/view.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [
    ViewComponent,
    UploadComponent,
    TransactionComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule
  ],
})
export class TransactionModule { }

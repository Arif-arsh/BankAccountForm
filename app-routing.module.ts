import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PickupDetailComponent } from './ViewDetails/pickup-detail/pickup-detail.component';

const routes: Routes = [
  {path: 'pickup-detail', component: PickupDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

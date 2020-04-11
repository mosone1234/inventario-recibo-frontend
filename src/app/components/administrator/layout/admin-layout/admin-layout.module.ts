import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutRoutes } from './admin-layout.router';
import { UserComponent } from '../../content/user/user.component';
import { AuthorityComponent } from '../../content/authority/authority.component';

@NgModule({
  declarations: [
    UserComponent,
    AuthorityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
  ]
})
export class AdminLayoutModule { }

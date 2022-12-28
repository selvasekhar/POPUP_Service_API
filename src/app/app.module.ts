import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomerComponent } from './customer/customer.component';
import { SupplierComponent } from './supplier/supplier.component';
import { AssociateComponent } from './associate/associate.component';
import { Components1Component } from './components1/components1.component';
import { Components2Component } from './components2/components2.component';
import { DirectivenameDirective } from './directivename.directive';
import { MasterDirective } from './master.directive';
import{HttpClientModule} from '@angular/common/http';
import { PopupComponent } from './popup/popup.component'
import { AdminRoutingModule } from './admin/admin-routing.module';
import { UserRoutingModule } from './user/user-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerComponent,
    SupplierComponent,
    AssociateComponent,
    Components1Component,
    Components2Component,
    DirectivenameDirective,
    MasterDirective,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, AdminRoutingModule, UserRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

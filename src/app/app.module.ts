import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from'@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FooterComponent } from './footer/footer.component';
import { SlidehomeComponent } from './slidehome/slidehome.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { ProductServiceService } from '.services/product-service.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,HttpClientModule],
  declarations: [ AppComponent, HelloComponent, FooterComponent, SlidehomeComponent, ListproductComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductServiceService]
})
export class AppModule { }

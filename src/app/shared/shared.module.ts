import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ColoumnOneComponent } from './layout/coloumn-one/coloumn-one.component';
import { AuthRoutingModule} from '../auth/auth-routing.module'


@NgModule({
  declarations: [HeaderComponent, ColoumnOneComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports:[
    ColoumnOneComponent
  ]
})
export class SharedModule { }

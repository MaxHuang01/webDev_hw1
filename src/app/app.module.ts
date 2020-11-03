import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TravleRequestComponent } from './travle-request/travle-request.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'about', component:AboutComponent},
  {path: 'flightPrice', component:TravleRequestComponent},
  {path: '', redirectTo: '/about', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    TravleRequestComponent,
      AboutComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

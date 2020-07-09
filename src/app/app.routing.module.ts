import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DocumentComponent } from './document/document.component';
import { PeopleComponent } from './people/people.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'people',
    component: PeopleComponent,
  },
   {
    path: 'document',
    component: DocumentComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
];

@NgModule({
  declarations: [ 
    HomeComponent, HeaderComponent, PeopleComponent, DocumentComponent, TestComponent
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}



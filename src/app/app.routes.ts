import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users.component';
import { homePageComponent } from './homePage/homePage.component';

export const routes: Routes = [

{
    path: 'users',
    component: UsersListComponent 
} , 
{
    path: '', 
    component: homePageComponent 
}


];

import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './page/page.component';
import { PageUserDetailsComponent } from './page-user-details/page-user-details.component';
export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "dashboard",
        component: PageComponent
    },
    {
        path: "user/:id",
        component: PageUserDetailsComponent
    },
    {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: 'full'
    }
];

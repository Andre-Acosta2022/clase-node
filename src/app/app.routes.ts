import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Inicio'
    },
    {
        path: 'post',
        component: PostsComponent,
        title: 'soy post'
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }


];

import { Routes } from '@angular/router';
import { TesteComponent } from './components/teste/teste.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { HomeComponent } from './components/home/home.component';
import { PostagemComponent } from './components/postagem/postagem.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'postagem', component: PostagemComponent},
    { path: '**', component: PageNotFoundComponentComponent }
];

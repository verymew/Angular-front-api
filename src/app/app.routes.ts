import { Routes } from '@angular/router';
import { TesteComponent } from './components/teste/teste.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';

export const routes: Routes = [
    { path: '', component: TesteComponent },
    { path: '**', component: PageNotFoundComponentComponent }
];

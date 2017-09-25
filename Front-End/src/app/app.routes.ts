import {Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {AlunosComponent} from './alunos/alunos.component';
import {CadastroComponent} from './alunos/cadastro/cadastro.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent}, // componente principal
  {path: 'about', component: AboutComponent},
  {path: 'alunos', component: AlunosComponent},
  {path: 'novo', component: CadastroComponent}
];
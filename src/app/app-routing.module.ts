import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainModule } from './core/main.module';
import { MainComponent } from './core/main/main.component';


const routes: Routes = [
  {
    path: 'nba',
    loadChildren: () => import('./core/main.module').then(m => m.MainModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

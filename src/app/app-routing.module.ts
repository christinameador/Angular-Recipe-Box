import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './pages/recipe-list/recipe-list.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
    { path: '', component: RecipeListComponent },
    { path: 'new', component: RecipeDetailsComponent },
    { path: ':id', component: RecipeDetailsComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
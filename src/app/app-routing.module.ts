import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsComponent } from './componentes/pokemons/pokemons.component';
import { MovesComponent } from './componentes/pokemons/moves/moves.component';
import { LoginComponent } from './componentes/login/login.component';
import { CatchsComponent } from './componentes/pokemons/catchs/catchs.component';


const routes: Routes = [
  {path:'',component:PokemonsComponent},
  {path:'moves',component:MovesComponent},
  {path:'login',component:LoginComponent},
  {path:'tuspokemons',component:CatchsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsComponent } from './componentes/pokemons/pokemons.component';
import { MovesComponent } from './componentes/pokemons/moves/moves.component';


const routes: Routes = [
  {path:'',component:PokemonsComponent},
  {path:'moves',component:MovesComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

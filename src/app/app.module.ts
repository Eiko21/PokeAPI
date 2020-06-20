import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './componentes/pokemons/pokemons.component';
import { SearchComponent } from './componentes/search/search.component';
import { MovesComponent } from './componentes/pokemons/moves/moves.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    SearchComponent,
    MovesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

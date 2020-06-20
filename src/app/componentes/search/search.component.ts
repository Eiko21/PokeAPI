import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/Pokemon';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  pokemon:string = "";

  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.currentPokemon.subscribe(p => this.pokemon == p);
  }

  searchPokemon():void{
    if(this.pokemon != "") this.pokemonService.searchingPokemon(this.pokemon);
    else this.pokemonService.searchingPokemon("");
  }

}

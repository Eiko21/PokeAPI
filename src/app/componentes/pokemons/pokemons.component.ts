import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/Pokemon';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons:Pokemon[] = [];
  pokemonsBuscados:Pokemon[] = [];
  pokemonsCapturados:Pokemon[] = [];
  p: number = 1;

  constructor(private pokemonService:PokemonService, private router:Router) { }

  ngOnInit(): void {    
    this.pokemonService.getPokemons().subscribe(pokemons => {  
      this.pokemons = pokemons;

      this.pokemons.forEach(pokemon => {
        this.pokemonService.getSpecificPokemon(pokemon.url).subscribe(p => {
          if(p['types'].length > 1){
            pokemon.type = p['types'].map(type => type.type.name).join();
          }else if(p['types'].length == 1) pokemon.type = p['types'][0].type.name;

          if(p['abilities'].length > 1){
            pokemon.ability = p['abilities'].map(ability => ability.ability.name).join();
          }else if(p['abilities'].length == 1) pokemon.ability = p['abilities'][0].ability.name;
          
          pokemon.move =p['moves'];
        });
      });

      this.pokemonService.currentPokemon.pipe(take(1)).subscribe(po => {
        this.pokemonsBuscados = this.pokemons.filter(pk => {
          return pk.name.includes(po.toLocaleLowerCase()) || pk.type.includes(po);
        });
      });    
    });
  }

  ngOnDestroy(): void {
    this.pokemonService.getPokemons().unsubscribe();
  }

  capturePokemon(pokemonName:string):void{
    this.pokemonService.setPokemonCaptureToTrue(pokemonName);
  }

}

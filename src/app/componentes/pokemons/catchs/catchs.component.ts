import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-catchs',
  templateUrl: './catchs.component.html',
  styleUrls: ['./catchs.component.css']
})
export class CatchsComponent implements OnInit {

  pokemons:Pokemon[] = [];

  constructor(private pokemonService:PokemonService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(pkm => {
      this.pokemons = pkm.filter(p => p.captured == true);
    });
  }

  capturePokemon(pokemonName:string):void{
    this.pokemonService.setPokemonCaptureToFalse(pokemonName);
  }
}

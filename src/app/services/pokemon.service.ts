import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import { Pokemon } from '../models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokeApiUrl:string = "https://pokeapi.co/api/v2/pokemon";
  offset="offset=0";
  limit="limit=40";

  private myPokemon = new BehaviorSubject<string>("");
  currentPokemon = this.myPokemon.asObservable();

  private myPokemons = new BehaviorSubject<Pokemon[]>([]);
  currentPokemons = this.myPokemon.asObservable();

  capturados:Pokemon[] = [];

  constructor(private http:HttpClient) {
    this.getAllPokemons().subscribe(pokemons => {
      pokemons['results'].forEach(pokemon => { pokemon.captured = false; });
      this.myPokemons.next(pokemons['results']);
    }); 
  }

  getAllPokemons():Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(`${this.pokeApiUrl}?${this.offset}&${this.limit}`);
  }

  getPokemons():BehaviorSubject<Pokemon[]>{
    return this.myPokemons;
  }

  getSpecificPokemon(url:string):Observable<any>{
    return this.http.get<any>(url);
  }

  searchingPokemon(pokemon:string){
    this.myPokemon.next(pokemon);
  }

  setPokemonCaptureToTrue(pokemonName:string):void{
    this.myPokemons.value.forEach(p => { if(p.name == pokemonName) p.captured = true; });
    this.myPokemons.next(this.myPokemons.value);
  }
  setPokemonCaptureToFalse(pokemonName:string):void{
    this.myPokemons.value.forEach(p => { if(p.name == pokemonName) p.captured = false; });
    this.myPokemons.next(this.myPokemons.value);
  }

}

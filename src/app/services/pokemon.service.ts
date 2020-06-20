import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
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

  constructor(private http:HttpClient) { }

  getAllPokemons():Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(`${this.pokeApiUrl}?${this.offset}&${this.limit}`);
  }

  getSpecificPokemon(url:string):Observable<any>{
    return this.http.get<any>(url);
  }

  searchingPokemon(pokemon:string){
    this.myPokemon.next(pokemon);
  }
}

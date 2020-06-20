import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.css']
})
export class MovesComponent implements OnInit {
  pokemon:Pokemon;
  p: number = 1;

  constructor() { }

  ngOnInit(): void {
    this.pokemon = history.state.pokemon;
  }

}

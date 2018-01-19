import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ['Finesse Shot', 'Long Shot Taker', 'Power Header'];

  model = new Hero(1, 'Leo Messi', this.powers[0], 'Team Player');

  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.model = new Hero(2, '', '');
  }
}

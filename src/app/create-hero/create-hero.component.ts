import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HeroInput } from '../interfaces/hero-input';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css']
})
export class CreateHeroComponent implements OnInit {
  name: string ="";
  power: string = "";

  onChangeName(event: Event) {
    const target = event.target as HTMLInputElement;
    this.name = target.value;
  }

  onChangePower(event: Event) {
    const target = event.target as HTMLInputElement;
    this.power = target.value;
  }

  
  constructor(private apiService: ApiService,
    private location: Location) { }


  onClickEvent() {
    const newHero: HeroInput = {
      name: this.name,
      power: this.power
    }

    this.apiService.createHeroes(newHero).subscribe(data=> {
      console.log(data); 
    });
    
    this.location.back(); 
  }
  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back(); 
  }

}

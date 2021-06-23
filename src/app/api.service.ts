import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from './interfaces/hero';
import { HeroInput } from './interfaces/hero-input';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getHeroes():Observable<any> {
    return this.http.get('http://localhost:4000/heroes'); 
  }

  createHeroes(hero: HeroInput):Observable<any>{
    let body = hero;
    console.log(hero); 
        return this.http.post('http://localhost:4000/heroes', body);
        
  }

  getHero(id: string): Observable<any> {
    return this.http.get(`http://localhost:4000/heroes/${id}`)
  } 

  deleteHero(id: string): Observable<any> {
    return this.http.delete(`http://localhost:4000/heroes/${id}`); 
  }

  updateHero(id: string, hero: HeroInput) {
    let body = hero
    return this.http.patch(`http://localhost:4000/heroes/${id}`, body );
  }

}

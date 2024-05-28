import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private http = inject(HttpClient);
  public nome: string;
  constructor(){
    this.nome = "";
    this.retornarAlgo();
  }
  retornarAlgo(): void{
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon/pikachu').subscribe(data => {
      this.nome = data.name;
      console.log(data.name);
    })
  }
}

import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private http = inject(HttpClient);
  public nome: string;

  constructor(){
    this.nome = "";
  }

  retornarAlgo(): void{
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon/pikachu').subscribe(data => {
      this.nome = data.name;
      console.log(data.name);
    })
  }
  algo(): void{
    console.log("Amem");
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css'
})
export class TesteComponent {
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

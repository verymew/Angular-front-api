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
  constructor(){
    this.retornarAlgo();
  }
  retornarAlgo(): void{
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon/pikachu').subscribe(data => {
      console.log(data.name);
    })
  }

}

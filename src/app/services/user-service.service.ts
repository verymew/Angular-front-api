import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private meuPokemon: string;
  private http = inject(HttpClient);
  constructor(){
    this.meuPokemon = '';
  }
  ngOnInit(): void{
    this.pegarNome();
  }
  pegarNome(): void{
    this.http.get('https://pokeapi.co/api/v2/pokemon/pikachu').subscribe((nome: any) =>{
      console.log(nome)
    })
  }
}

import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IPostagem } from '../../dtos/IPostagem';

@Component({
  selector: 'app-postagem',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './postagem.component.html',
  styleUrl: './postagem.component.css'
})
export class PostagemComponent {
  private postagem:string;
  private tokencsrf:string; 
  private cookie:string;
  private http = inject(HttpClient);
  formulario = new FormGroup({
    postage: new FormControl<string | null>(null, Validators.required)
  })

  constructor(){
    this.tokencsrf = '';
    this.cookie = '';
    this.postagem = '';
  }

  ngOnInit(): void {
    this.getCsrf();
  }

  getCsrf(): void{
    const resposta = this.http.get<any>('/api/csrf').subscribe(data => {
      this.tokencsrf = data.token;
    })
  };

  enviarPost(): void{
    this.getCsrf();
    if(this.formulario.value.postage){
      const body = {
        "message": this.formulario.value.postage
      }
      //Adicionando headers:
      this.http.post<string>('/api/oi', body, {
        headers: {
          'Content-Type': 'application/json',
          "X-CSRF-TOKEN": this.tokencsrf
        }
      }).subscribe(a => console.log(a))
    };
  };
}

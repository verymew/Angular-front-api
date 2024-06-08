import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from '../../services/http-service.service';

@Component({
  selector: 'app-postagem',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './postagem.component.html',
  styleUrl: './postagem.component.css'
})
export class PostagemComponent {
  private postagem:string;
  private cookie:string;
  private http = inject(HttpService);

  formulario = new FormGroup({
    postage: new FormControl<string | null>(null, Validators.required)
  })

  constructor(){
    this.cookie = '';
    this.postagem = '';
  };

  enviarPost(): void{
    if(this.formulario.value.postage){
      this.postagem = this.formulario.value.postage;
      console.log(this.postagem);
      this.http.post("/api/oi", this.postagem);
    };
  };  
};

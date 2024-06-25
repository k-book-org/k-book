import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  constructor(private userService: AuthService) { }

  miFormulario: FormGroup = new FormGroup({});

  name = new FormControl('');
  username = new FormControl('');
  email = new FormControl('');
  gradoEstudio = new FormControl('');
  birthday = new FormControl('');
  rol = new FormControl('');
  password = new FormControl('');
  password2 = new FormControl('');
  
  ngOnInit() {
    this.miFormulario = new FormGroup({
      name : this.name,
      username : this.username,
      email : this.email,
      gradoEstudio : this.gradoEstudio,
      birthday : this.birthday,
      rol : this.rol,
      password : this.password,
      password2 : this.password2,
    
    });
  }

  onSubmit():void {
    console.log(this.miFormulario.value);
    this.userService.registerUser(this.miFormulario.value).subscribe({
      next: (v) => {
        console.log(v);
      },
      error: (e) => {
        console.log(e);
      }
    })
  }
}

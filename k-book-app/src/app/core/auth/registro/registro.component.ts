import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { password2Validator } from './registro-custom-validators';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = new FormGroup({});

  name = new FormControl('');
  username = new FormControl('');
  email = new FormControl('');
  gradoEstudio = new FormControl('');
  birthday = new FormControl('');
  rol = new FormControl('');
  password = new FormControl('');
  password2 = new FormControl('');

  constructor(private userService: AuthService) { }

  ngOnInit() {
    this.name = new FormControl('', [Validators.required]);
    this.username = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.gradoEstudio = new FormControl('', [Validators.required]);
    this.birthday = new FormControl('', [Validators.required]);
    this.rol = new FormControl('');
    this.password = new FormControl('', [Validators.required, Validators.minLength(6)]);
    this.password2 = new FormControl('', [Validators.required, Validators.minLength(6), password2Validator]);

    this.miFormulario = new FormGroup({
      name: this.name,
      username: this.username,
      email: this.email,
      gradoEstudio: this.gradoEstudio,
      birthday: this.birthday,
      rol: this.rol,
      password: this.password,
      password2: this.password2
    });
  }

  get nameControl() {
    return this.miFormulario.get('name');
  }

  get usernameControl() {
    return this.miFormulario.get('username');
  }

  get emailControl() {
    return this.miFormulario.get('email');
  }

  get gradoEstudioControl() {
    return this.miFormulario.get('gradoEstudio');
  }

  get birthdayControl() {
    return this.miFormulario.get('birthday');
  }

  get rolControl() {
    return this.miFormulario.get('rol');
  }

  get passwordControl() {
    return this.miFormulario.get('password');
  }

  get password2Control() {
    return this.miFormulario.get('password2');
  }

  onSubmit(): void {
    if (this.miFormulario.valid) {
      console.log(this.miFormulario.value);
      this.userService.registerUser(this.miFormulario.value).subscribe({
        next: (v) => {
          console.log(v);
        },
        error: (e) => {
          console.log(e);
        }
      });
    } else {
      console.log('Formulario no válido');
    }
  }
}

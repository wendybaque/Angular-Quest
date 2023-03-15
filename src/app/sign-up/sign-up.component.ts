import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  // Tu instancies ton objet avec des valeurs initiales
  model: Order = new Order('', '', '', '');

  constructor() {}

  onSubmit(): void {
    // Formulaire envoyé
    console.log(this.model);
  }
}

export class Order {
  email: string;
  firstname: string;
  lastname: string;
  password: string;


  

  constructor(email: string, firstname: string,  lastname: string, password:string) {
    this.email = email;
    this.firstname = firstname;
    this.lastname = lastname;
    this.password = password;

  }
}

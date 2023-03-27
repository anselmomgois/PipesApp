import { genero } from './generos.interface';
import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  nombre: string = 'Anselmo';
  genero: string = 'masculino';
  generos: genero[] = [
    { name: 'Masculino', code: 'masculino' },
    { name: 'Feminino', code: 'femenino' },
  ];
  nomeModificado: string = '';
  generoModificado!: genero;


  invitacionMapa = {
    'masculino': 'convidalo',
    'femenino': 'convidala'
  }


  clientes: string[] = ['Maria', 'Pedro', 'Anselmo'];

  clientesMap = {
    '=0': 'nenhum cliente esperando',
    '=1': 'ha 1 cliente esperando',
    'other': 'ha # esperando'
  }

  cambiarCliente() {

    this.nombre = this.nomeModificado;
    this.genero = this.generoModificado.code;

  }

  borrarCliente() {

    if (this.clientes.length > 0) {
      //delete this.clientes[0];
      this.clientes.splice(0, 1);
      console.log(this.clientes);
    }
  }

  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canadá'

  }

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  miObservable = interval(5000);

  valorPromesa = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve('Fin de la promesa!');
    }, 3500);
  });
}

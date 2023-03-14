import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string= 'anselmo';
  nombreUpper: string= 'ANSELMO';
  nombreCompleto: string= 'AnSelMo MOuRa';

  fecha:Date= new Date();
}

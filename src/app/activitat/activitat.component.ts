import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-activitat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activitat.component.html',
  styleUrl: './activitat.component.css'
})
export class ActivitatComponent {
  private socket = io('http://192.168.56.1:8888', { transports : ['websocket'] });

  codigoGenerado: string|undefined;
  codigoCorrecto: boolean | undefined;
  constructor() {
    this.socket.on('hello', (args) => {
      console.log(args);
    });
    this.socket.on('nouCode', (code)=>{
      this.codigoGenerado=code
    })
    this.socket.on('codigoCorrecto', (correcto) => {
      this.codigoCorrecto = correcto;
      console.log('Código correcto:', correcto);
    });
  }

  generarCodi() {
    this.socket.emit('generarCodigo', '');

  }
}

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
  private socket = io('http://172.30.240.1:8888', { transports : ['websocket'] });

  codigoGenerado: string|undefined;

  constructor() {
    this.socket.on('hello', (args) => {
      console.log(args);
    });
  }

  generarCodigo() {
    this.socket.emit('generarCodigo', (args: any)=>{
      this.codigoGenerado=args
      console.log(args)
    } );
  }
}

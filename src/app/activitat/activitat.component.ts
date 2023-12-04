import { Component, OnInit } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Component({
  selector: 'app-activitat',
  templateUrl: './activitat.component.html',
  styleUrls: ['./activitat.component.css'],
})
export class ActivitatComponent implements OnInit {
  private socket: Socket;
  public videoSrc: string = '';
  public videos: any[] = [
    { name: 'Trailer Moana', path: 'video1' },
    { name: 'Trailer One Piece', path: 'video2' },
    { name: 'Trailer EndGame', path: 'video3' },
    { name: 'Trailer Piratas del caribe', path: 'video4' },

  ];
  public selectedVideo: any;

  constructor() {
    this.socket = io('http://localhost:3080');
  }

  ngOnInit(): void {
    this.socket.on('file-received', (fileInfo: any) => {
      console.log('Archivo recibido con éxito:', fileInfo);

      this.videoSrc = `data:${fileInfo.type};base64,${fileInfo.data}`;
    });
  }

  playSelectedVideo(): void {
    this.socket.emit('play-video', this.selectedVideo.path);
  }
}

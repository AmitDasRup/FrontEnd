import { Injectable } from '@angular/core';
import {Album} from './Album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() { }


  public album: Album[]=[{
    id:"1",
    name:"Album 1",
    coverPhotoUrl:"https://www.w3.org/MarkUp/Test/xhtml-print/20050519/tests/jpeg420exif.jpg",
  },
  {
  id:"2",
    name:"Album 2",
    coverPhotoUrl:"https://www.w3.org/MarkUp/Test/xhtml-print/20050519/tests/jpeg420exif.jpg",
  },
  {
  id:"3",
    name:"Album 3",
    coverPhotoUrl:"https://www.w3.org/MarkUp/Test/xhtml-print/20050519/tests/jpeg420exif.jpg",
  },

  ];

  public getAllAlbum(){

    var idToken = localStorage.getItem('idToken');
    console.log('Id token inside Album service', idToken);

    return this.album;
  }

  public getAlbumDetails(id){

    return this.album[id-1];
  }
}

import { Component, OnInit } from '@angular/core';
import {Album} from '../Album';
import {AlbumService} from '../album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  public myName="";

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

  constructor(
    private albumService: AlbumService,
  ) { }

  ngOnInit() {
  this.myName="Amit"
  }

}

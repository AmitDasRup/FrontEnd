import { Component, OnInit } from '@angular/core';
import {Album} from '../Album';
import {AlbumService} from '../album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  album: Album[]=[];
   
  constructor(
    private albumService: AlbumService,
  ) { }

  ngOnInit() {

  this.albumService.getMyAlbum()
  .subscribe(
    result => this.album = <Album[]>result,
    err => console.error("Got an error", + err),
    () => console.log("Got a complete notification")
  );
  }

}

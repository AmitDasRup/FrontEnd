import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {Photo} from './Photo';
import {Comment} from './Comment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  apiBaseUrl = "http://ec2-54-218-206-93.us-west-2.compute.amazonaws.com:7000/api";
  
  idToken = localStorage.getItem('idToken');

  
  constructor(private http: HttpClient) { }
  //constructor() { }

  
    
    //console.log('Id token inside Album service', idToken);

  public savePhoto(fileId, albumId){

    var fileUrl = this.apiBaseUrl + "/files/show/" + fileId;

    //var idToken = localStorage.getItem('idToken');
    console.log('Id token inside Photo service', this.idToken);
    console.log('File Url inside Photo service', fileUrl);
    console.log('Album Id inside Photo service', albumId);

    var photo: Photo= {
      id: "",
      albumId: albumId,
      fileId: "",
      thumbnailUrl: fileUrl,
      photoUrl: fileUrl,
      dateCreated: "",
      createdBy: "",
    }

    var headers = this.getHeaders();
    return this.http.post(this.apiBaseUrl + "/photos", photo, {headers});
    //console.log("Photo upload response", response)
//console.log('klkl', headers);​
​
    //return this.http.get(this.apiBaseUrl + "/albums", {headers})
    //return this.album
  }

  public saveComment(photoId, commentText, emailAddress){

    var commentData: Comment = {
      comment: commentText,
      createdBy: emailAddress,
      dateCreated: "",
      id: "",
      photoId: photoId,
    }

    var headers = this.getHeaders();
    return this.http.post(this.apiBaseUrl + "/photos/comments", commentData, {headers});
    //console.log("Photo upload response", response)
//console.log('klkl', headers);​
​
    //return this.http.get(this.apiBaseUrl + "/albums", {headers})
    //return this.album
  }


  public getAllComments(photoId){

    //var idToken = localStorage.getItem('idToken');
    //console.log('Id token inside Album service', this.idToken);

    var headers = this.getHeaders();
//console.log('klkl', headers);​
​
    return this.http.get(this.apiBaseUrl + "/photos/"+photoId+"/comments",{headers})
    //return this.album
  }


  public getHeaders(){
    var headers = {
      'idToken': this.idToken
    };
    return headers;
  }

}

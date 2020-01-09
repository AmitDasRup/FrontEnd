import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { UploadPhotosComponent } from './upload-photos/upload-photos.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { PhotoComponent } from './photo/photo.component';


const routes: Routes = [
        { path: '', component: FeedComponent },
        { path: 'profile/:userName', component: ProfileComponent },
        { path: 'album', component: AlbumComponent },
        { path: 'album/create', component: CreateAlbumComponent },
        { path: 'album/:albumId/:albumTitle', component: AlbumDetailsComponent },
        { path: 'upload-photo/:albumId/:albumTitle', component: UploadPhotosComponent },
        { path: 'photo/:photoId/:photoUrl', component: PhotoComponent },

      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

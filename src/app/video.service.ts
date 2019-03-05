import { Video } from './video';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable()
export class VideoService{

    private _getUrl = "http://127.0.0.1:3300/videos/videos";
    private _postUrl = "http://127.0.0.1:3300/videos/video";
    private _putUrl = "http://127.0.0.1:3300/videos/video/";
    private _deleteUrl = "http://127.0.0.1:3300/videos/video/";
    
    
    constructor(private _http: Http){}

    getVideos(){
        return this._http.get(this._getUrl)
        .pipe(map((response: any) => response.json()));
      }

    addVideo(video :Video){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._postUrl, JSON.stringify(video), options)
        .pipe(map((response: any) => response.json()));
      }

    updateVideo(video: Video){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(this._putUrl + video._id, JSON.stringify(video), options)
        .pipe(map((response: any) => response.json()));
      }

    deleteVideo(video: Video){
        return this._http.delete(this._deleteUrl + video._id)
        .pipe(map((response: any) => response.json()));
      }
}
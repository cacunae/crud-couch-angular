import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { Usuarios } from './interface';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class JsonServiceService {

  constructor(private http: HttpClient) { 
   
  }
  
  getJson(url: string){  
  return this.http.get(url);
  }

  postJson(url: string , usuarios: string){
    let head = new HttpHeaders().append('Content-Type','application/json')
    return this.http.post(url, usuarios, {headers: head} )
  }

  updateJson(url: string, usuarios: string){
    let head = new HttpHeaders().append('Content-Type','application/json')
    return this.http.put(url, usuarios, {headers:head})

  }

  deleteJson(url: string){
    return this.http.delete(url)
  }

  
}

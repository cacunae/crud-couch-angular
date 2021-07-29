import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuarios } from './interface';
import { JsonServiceService } from './json-service.service';
import { HttpParams, HttpParamsOptions } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit  {

  ngOnInit(){
   
  }

  constructor(public json: JsonServiceService){}

   usuarios: Usuarios[] = []
   usu: Usuarios = {
    _id: '',
    _rev: '',
    entity: '',
    nombre: '',
    edad: 0,
    sexo: ''
  }
  userUpdate: Usuarios = {
    _id: '',
    _rev: '',
    entity: '',
    nombre: '',
    edad: 0,
    sexo: ''
  }
    
  title = 'Project42labs';
  name = "";
  age = 0;
  sex = "";
  nameUpdate = "";
  ageUpdate = 0;
  sexUpdate = "";
  entity = "user";
  
  
  idurl = "";

  getDoc(){
    this.json.getJson('http://localhost:5984/db_test1/' + this.idurl).subscribe((res : any) =>{
      this.usu._id = res._id;
      this.usu._rev = res._rev;
      this.usu.entity = res.entity;
      this.name = res.nombre;
      this.age = res.edad;
      this.sex = res.sexo;
      
      return this.usu;
       
    });
  }

  postDoc(usuario: Usuarios){
    this.fill();
    let body = JSON.stringify(usuario)
    this.json.postJson('http://localhost:5984/db_test1/', body).subscribe((res: any) =>{
      console.log(res);
    });
  
  }

  updateDoc():void {
    let body = JSON.stringify(this.fillUpdate())
    console.log(body)
    this.json.updateJson('http://localhost:5984/db_test1/' + this.idurl, body ).subscribe((res:any)=>{
        console.log(body);
        console.log(res);

    })
  }
  

  deleteDoc(): void{
  
    this.json.deleteJson('http://localhost:5984/db_test1/'+  this.idurl + "?rev=" + this.fillRev()).subscribe((res:any)=>{
        console.log(res);
    })
  }

  mostrarUpdate = false;
  mostrarInput = false;
  mostrar = false;

  toggle(): void{
    this.mostrar = !this.mostrar

  }
  toggleInput(): void{
    this.mostrarInput = !this.mostrarInput
  }

  toggleUpdate(): void{
    this.mostrarUpdate = !this.mostrarUpdate
  }

  fillUpdate(){
    this.getDoc()
    
    this.userUpdate._id = this.usu._id;
    this.userUpdate.nombre = this.nameUpdate;
    this.userUpdate.edad = this.ageUpdate;
    this.userUpdate.sexo = this.sexUpdate;
    this.userUpdate._rev = this.usu._rev;
    return this.userUpdate;

  }

  fillRev(){
    this.getDoc()
    var revi = this.usu._rev
    return revi;

  }
  fill(): void{
    this.usu.nombre = this.name;
    this.usu.edad = this.age;
    this.usu.sexo = this.sex;
    this.usu.entity = this.entity;

  }

}



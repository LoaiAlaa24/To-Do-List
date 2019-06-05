import { Component, OnInit } from '@angular/core';



import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {errorHandler} from "@angular/platform-browser/src/browser";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-toDo',
    styleUrls:[
          './styles.css'
        ],
  templateUrl:"./toDo.component.html"
})
export class ToDoComponent implements OnInit {
  dataForm = new FormGroup({
    dataEntered: new FormControl(''),
  });
config = {
    headers: {
        'Content-Type': 'application/json'
    }
}
  todoList = [];
  constructor(private http: HttpClient,private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {


     if(!(sessionStorage.getItem("username"))){

      this.router.navigateByUrl("/");

     }

     this.http.get("/api/user/getToDo/"+sessionStorage.getItem("username"),this.config).subscribe(res => {

       this.todoList=res["data"]["toDoList"];

  
  
  },err =>{
  
  
  
  });
}




addTodo(){
 var data ={

    username: sessionStorage.getItem("username") ,
    dataEntered: this.dataForm.value["dataEntered"]
 
 };
  
  this.http.post("/api/user/postToDo",data,this.config).subscribe(res => {

   window.location.reload();
  
  
  },err =>{

  
  
  });



}

      done(x){
     
        var data={
          username: sessionStorage.getItem("username"),
          item:x

       }
        this.http.patch("/api/user/doneToDo",data,this.config).subscribe(res => {

          window.location.reload();
     
     
     
     },err =>{
     

     
     
     });

        
      }

logout(){

  sessionStorage.clear();
  this.router.navigateByUrl("/");

}

}
